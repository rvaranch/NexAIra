import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import Dashboard from './components/dashboard/Dashboard';
import SetNewPassword from './components/SetNewPassword';

type View = 'home' | 'login' | 'dashboard';

function AppContent() {
  const { user, loading, isPasswordRecovery, googleAuthError } = useAuth();
  const [view, setView] = useState<View>('home');

  // Clean up any Zoho OAuth params from the URL on load
  // (Zoho redirects back with ?code=... which confuses Supabase auth)
  useEffect(() => {
    const url = new URL(window.location.href);
    const hasZohoCode = url.searchParams.has('code') &&
      url.searchParams.has('accounts-server');
    if (hasZohoCode) {
      // Strip all query params and replace history so refresh is clean
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  // When Google OAuth returns with a blocked account, jump to login page
  useEffect(() => {
    if (googleAuthError) setView('login');
  }, [googleAuthError]);

  // Auto-redirect logged-in user away from login page
  useEffect(() => {
    if (user && view === 'login') setView('dashboard');
  }, [user, view]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <span className="text-3xl font-bold text-white">
            Nex<span className="text-yellow-400">AI</span>ra
          </span>
          <p className="text-gray-400 mt-2 text-sm animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  if (isPasswordRecovery) {
    return <SetNewPassword onSuccess={() => setView('dashboard')} />;
  }

  if (view === 'login') {
    return (
      <LoginPage
        onBack={() => setView('home')}
        onSuccess={() => setView('dashboard')}
      />
    );
  }

  if (view === 'dashboard' && user) {
    return <Dashboard onLogout={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar
        onLoginClick={() => setView('login')}
        onDashboardClick={() => setView('dashboard')}
      />
      <Hero />
      <Services />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
