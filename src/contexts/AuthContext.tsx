import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

export type EmailStatus = {
  is_allowed: boolean;
  account_created: boolean;
  full_name: string | null;
};

// ── SESSION TIMEOUT SETTINGS ─────────────────────────────────────────────
// 🧪 TEST MODE: 2 min timeout, warn at 1 min
// To restore production values, change to:
//   SESSION_DURATION_MS = 24 * 60 * 60 * 1000  (24 hours)
//   WARN_BEFORE_MS      = 5 * 60 * 1000         (5 minutes)
//   CHECK_INTERVAL_MS   = 60 * 1000             (1 minute)
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000  //(24 hours)
const WARN_BEFORE_MS      = 5 * 60 * 1000;  // 🧪 TEST: warn at 5 min left
const LAST_ACTIVE_KEY     = 'nexaira_last_active';
const LOGIN_TIME_KEY      = 'nexaira_login_time';
const CHECK_INTERVAL_MS   = 60 * 1000;      // 🧪 TEST: check every 1 minute

// Reset the inactivity clock on any user interaction
function refreshActivityTimestamp() {
  localStorage.setItem(LAST_ACTIVE_KEY, Date.now().toString());
}

type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isPasswordRecovery: boolean;
  sessionExpiring: boolean;      // true when < 5 min left
  sessionExpiresAt: Date | null; // exact expiry time
  googleAuthError: string | null;
  clearGoogleAuthError: () => void;
  checkEmailStatus: (email: string) => Promise<EmailStatus>;
  signInWithEmail: (email: string, password: string) => Promise<{ error: string | null }>;
  createAccount: (email: string, password: string) => Promise<{ error: string | null; needsConfirmation?: boolean }>;
  signInWithGoogle: () => Promise<{ error: string | null }>;
  sendPasswordReset: (email: string) => Promise<{ error: string | null }>;
  updatePassword: (newPassword: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser]                             = useState<User | null>(null);
  const [session, setSession]                       = useState<Session | null>(null);
  const [loading, setLoading]                       = useState(true);
  const [isPasswordRecovery, setIsPasswordRecovery] = useState(false);
  const [googleAuthError, setGoogleAuthError]       = useState<string | null>(null);
  const [sessionExpiring, setSessionExpiring]       = useState(false);
  const [sessionExpiresAt, setSessionExpiresAt]     = useState<Date | null>(null);

  // ── Session timeout checker (based on last activity, not login time) ────
  const checkSessionTimeout = useCallback(async (currentUser: User | null) => {
    if (!currentUser) return;

    const lastActiveStr = localStorage.getItem(LAST_ACTIVE_KEY);
    if (!lastActiveStr) {
      // No activity recorded yet — set it now
      refreshActivityTimestamp();
      return;
    }

    const lastActive = parseInt(lastActiveStr, 10);
    const expiresAt  = lastActive + SESSION_DURATION_MS;
    const now        = Date.now();
    const remaining  = expiresAt - now;

    setSessionExpiresAt(new Date(expiresAt));

    if (remaining <= 0) {
      // 24 hours of inactivity — sign out
      localStorage.removeItem(LAST_ACTIVE_KEY);
      localStorage.removeItem(LOGIN_TIME_KEY);
      await supabase.auth.signOut();
      return;
    }

    if (remaining <= WARN_BEFORE_MS) {
      setSessionExpiring(true);
    } else {
      setSessionExpiring(false);
    }
  }, []);

  // ── Auth state listener ─────────────────────────────────────────────────
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        setIsPasswordRecovery(true);
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
        return;
      }

      if (event === 'SIGNED_IN' && session?.user?.app_metadata?.provider === 'google') {
        const email  = session.user.email!;
        const status = await checkEmailStatus(email);
        if (!status.is_allowed) {
          await supabase.auth.signOut();
          setGoogleAuthError('This Google account is not registered with NexAIra. Please contact your trainer to get access.');
          setSession(null);
          setUser(null);
          setLoading(false);
          return;
        }
        if (!status.account_created) {
          await supabase.rpc('mark_account_created', { user_email: email });
        }
      }

      // Record login time and initial activity timestamp on fresh sign-in
      if (event === 'SIGNED_IN' && session?.user) {
        if (!localStorage.getItem(LOGIN_TIME_KEY)) {
          localStorage.setItem(LOGIN_TIME_KEY, Date.now().toString());
        }
        // Always refresh activity on sign-in (covers page reloads too)
        refreshActivityTimestamp();
      }

      if (event === 'SIGNED_OUT') {
        localStorage.removeItem(LOGIN_TIME_KEY);
        localStorage.removeItem(LAST_ACTIVE_KEY);
        setSessionExpiring(false);
        setSessionExpiresAt(null);
      }

      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // ── Periodic session timeout check ─────────────────────────────────────
  useEffect(() => {
    if (!user) return;

    // Run immediately on mount
    checkSessionTimeout(user);

    const interval = setInterval(() => {
      checkSessionTimeout(user);
    }, CHECK_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [user, checkSessionTimeout]);

  // ── Activity listeners — reset inactivity clock on any interaction ──────
  useEffect(() => {
    if (!user) return;

    const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart', 'click'];
    
    // Throttle: only update localStorage at most once every 30 seconds
    let lastUpdate = 0;
    const handleActivity = () => {
      const now = Date.now();
      if (now - lastUpdate > 30_000) {
        lastUpdate = now;
        refreshActivityTimestamp();
        // If warning was showing, dismiss it since user is active
        setSessionExpiring(false);
      }
    };

    events.forEach(e => window.addEventListener(e, handleActivity, { passive: true }));
    return () => events.forEach(e => window.removeEventListener(e, handleActivity));
  }, [user]);

  // ── Auth methods ────────────────────────────────────────────────────────
  const checkEmailStatus = useCallback(async (email: string): Promise<EmailStatus> => {
    const { data, error } = await supabase.rpc('check_email_allowed', {
      check_email: email.toLowerCase().trim(),
    });
    if (error || !data) return { is_allowed: false, account_created: false, full_name: null };
    return data as EmailStatus;
  }, []);

  const signInWithEmail = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message ?? null };
  };

  const createAccount = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return { error: error.message };
    if (!data.session) return { error: null, needsConfirmation: true };
    await supabase.rpc('mark_account_created', { user_email: email });
    return { error: null, needsConfirmation: false };
  };

  const signInWithGoogle = async () => {
    setGoogleAuthError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    });
    return { error: error?.message ?? null };
  };

  const sendPasswordReset = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin,
    });
    return { error: error?.message ?? null };
  };

  const updatePassword = async (newPassword: string) => {
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (!error) setIsPasswordRecovery(false);
    return { error: error?.message ?? null };
  };

  const clearGoogleAuthError = () => setGoogleAuthError(null);

  const signOut = async () => {
    localStorage.removeItem(LOGIN_TIME_KEY);
    localStorage.removeItem(LAST_ACTIVE_KEY);
    await supabase.auth.signOut();
    setIsPasswordRecovery(false);
    setSessionExpiring(false);
    setSessionExpiresAt(null);
  };

  return (
    <AuthContext.Provider value={{
      user, session, loading,
      isPasswordRecovery, sessionExpiring, sessionExpiresAt,
      googleAuthError, clearGoogleAuthError,
      checkEmailStatus, signInWithEmail, createAccount,
      signInWithGoogle, sendPasswordReset, updatePassword, signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
