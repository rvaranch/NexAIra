import { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

type View = 'email_step' | 'password_step' | 'create_password' | 'forgot' | 'forgot_sent';

type Props = {
  onBack: () => void;
  onSuccess: () => void;
};

export default function LoginPage({ onBack, onSuccess }: Props) {
  const {
    signInWithEmail, createAccount, signInWithGoogle,
    sendPasswordReset, checkEmailStatus,
    googleAuthError, clearGoogleAuthError,
    user,
  } = useAuth();

  const [view, setView]               = useState<View>('email_step');
  const [email, setEmail]             = useState('');
  const [password, setPassword]       = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword]       = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState('');
  const [forgotEmail, setForgotEmail] = useState('');

  // If Google OAuth succeeds and user lands back here as logged-in, proceed to dashboard
  useEffect(() => {
    if (user) onSuccess();
  }, [user, onSuccess]);

  // Show Google block error if it fires from AuthContext
  useEffect(() => {
    if (googleAuthError) {
      setError(googleAuthError);
      clearGoogleAuthError();
    }
  }, [googleAuthError, clearGoogleAuthError]);

  // ── Step 1: validate email against whitelist ──────────────────────────────
  const handleEmailContinue = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError('');

    const status = await checkEmailStatus(email.trim());

    if (!status.is_allowed) {
      setError('This email is not registered with NexAIra. Please contact your trainer to get access.');
      setLoading(false);
      return;
    }

    if (!status.account_created) {
      // First-time user — send them to create a password
      setView('create_password');
    } else {
      // Returning user — ask for password
      setView('password_step');
    }
    setLoading(false);
  };

  // ── Step 2a: returning user login ─────────────────────────────────────────
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await signInWithEmail(email.trim(), password);
    if (error) {
      setError('Incorrect password. Try again or use "Forgot password" below.');
    }
    // onSuccess fires via the useEffect watching `user`
    setLoading(false);
  };

  // ── Step 2b: first-time user creates their password ───────────────────────
  const handleCreatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    setError('');

    const { error } = await createAccount(email.trim(), password);
    if (error) {
      setError(error);
    }
    // onSuccess fires via the useEffect watching `user`
    setLoading(false);
  };

  // ── Forgot password ───────────────────────────────────────────────────────
  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail.trim()) return;
    setLoading(true);
    setError('');

    // Optional: check whitelist before sending so we don't leak that an email exists
    const status = await checkEmailStatus(forgotEmail.trim());
    if (!status.is_allowed) {
      setError('This email is not registered with NexAIra.');
      setLoading(false);
      return;
    }

    const { error } = await sendPasswordReset(forgotEmail.trim());
    if (error) {
      setError(error);
    } else {
      setView('forgot_sent');
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    const { error } = await signInWithGoogle();
    if (error) {
      setError(error);
      setLoading(false);
    }
    // If no error, page redirects to Google — loading stays true
  };

  const resetToEmailStep = () => {
    setView('email_step');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Back button */}
        <button
          onClick={view === 'forgot' ? resetToEmailStep : onBack}
          className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          {view === 'forgot' ? 'Back to Login' : 'Back to Home'}
        </button>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl">

          {/* Logo */}
          <div className="text-center mb-8">
            <span className="text-3xl font-bold text-white">
              Nex<span className="text-yellow-400">AI</span>ra
            </span>
            <p className="text-gray-400 mt-1 text-sm">Learner Portal</p>
          </div>

          {/* ── VIEW: email_step ── */}
          {view === 'email_step' && (
            <>
              {/* Google button */}
              <button
                onClick={handleGoogleLogin}
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-medium py-3 rounded-xl hover:bg-gray-100 transition-colors mb-6 disabled:opacity-60"
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-xs text-gray-500">
                  <span className="bg-gray-900 px-3">or continue with email</span>
                </div>
              </div>

              <form onSubmit={handleEmailContinue} className="space-y-4">
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setError(''); }}
                    required
                    autoFocus
                    className="w-full bg-black border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                  />
                </div>

                {error && <ErrorBox message={error} />}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {loading ? 'Checking...' : (<>Continue <ArrowRight size={16} /></>)}
                </button>
              </form>
            </>
          )}

          {/* ── VIEW: password_step (returning user) ── */}
          {view === 'password_step' && (
            <>
              <div className="flex items-center gap-2 bg-black rounded-xl px-4 py-3 mb-6">
                <Mail size={15} className="text-yellow-400 flex-shrink-0" />
                <span className="text-white text-sm truncate">{email}</span>
                <button
                  onClick={resetToEmailStep}
                  className="ml-auto text-xs text-gray-500 hover:text-yellow-400 transition-colors flex-shrink-0"
                >
                  Change
                </button>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={e => { setPassword(e.target.value); setError(''); }}
                    required
                    autoFocus
                    className="w-full bg-black border border-gray-700 rounded-xl pl-10 pr-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                {error && <ErrorBox message={error} />}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-60"
                >
                  {loading ? 'Signing in...' : 'Login'}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => { setForgotEmail(email); setError(''); setView('forgot'); }}
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              </form>
            </>
          )}

          {/* ── VIEW: create_password (first-time user) ── */}
          {view === 'create_password' && (
            <>
              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl px-4 py-3 mb-6">
                <p className="text-yellow-400 text-sm font-medium">👋 Welcome to NexAIra!</p>
                <p className="text-gray-400 text-xs mt-1">
                  This is your first login. Please create a password to secure your account.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-black rounded-xl px-4 py-3 mb-6">
                <Mail size={15} className="text-yellow-400" />
                <span className="text-white text-sm truncate">{email}</span>
              </div>

              <form onSubmit={handleCreatePassword} className="space-y-4">
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password (min 8 characters)"
                    value={password}
                    onChange={e => { setPassword(e.target.value); setError(''); }}
                    required
                    minLength={8}
                    autoFocus
                    className="w-full bg-black border border-gray-700 rounded-xl pl-10 pr-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={e => { setConfirmPassword(e.target.value); setError(''); }}
                    required
                    className="w-full bg-black border border-gray-700 rounded-xl pl-10 pr-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                {error && <ErrorBox message={error} />}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-60"
                >
                  {loading ? 'Setting up your account...' : 'Create Password & Login'}
                </button>
              </form>
            </>
          )}

          {/* ── VIEW: forgot password ── */}
          {view === 'forgot' && (
            <>
              <div className="mb-6">
                <h2 className="text-white font-semibold text-lg">Reset your password</h2>
                <p className="text-gray-400 text-sm mt-1">
                  Enter your registered email. We'll send you a reset link.
                </p>
              </div>

              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Your registered email"
                    value={forgotEmail}
                    onChange={e => { setForgotEmail(e.target.value); setError(''); }}
                    required
                    autoFocus
                    className="w-full bg-black border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                  />
                </div>

                {error && <ErrorBox message={error} />}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-60"
                >
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </form>
            </>
          )}

          {/* ── VIEW: forgot_sent ── */}
          {view === 'forgot_sent' && (
            <div className="text-center py-4">
              <CheckCircle size={48} className="text-yellow-400 mx-auto mb-4" />
              <h2 className="text-white font-semibold text-lg mb-2">Check your inbox!</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                A password reset link has been sent to<br />
                <span className="text-white font-medium">{forgotEmail}</span>
              </p>
              <p className="text-gray-500 text-xs mt-4">
                Click the link in the email to set a new password.<br />
                It may take a minute to arrive.
              </p>
              <button
                onClick={resetToEmailStep}
                className="mt-6 text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                Back to Login
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

function ErrorBox({ message }: { message: string }) {
  return (
    <div className="bg-red-900/30 border border-red-700 text-red-400 text-sm rounded-xl px-4 py-3">
      {message}
    </div>
  );
}
