import { useState } from 'react';
import { Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

type Props = {
  onSuccess: () => void;
};

export default function SetNewPassword({ onSuccess }: Props) {
  const { updatePassword } = useAuth();
  const [password, setPassword]               = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword]       = useState(false);
  const [loading, setLoading]                 = useState(false);
  const [error, setError]                     = useState('');
  const [done, setDone]                       = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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

    const { error } = await updatePassword(password);
    if (error) {
      setError(error);
    } else {
      setDone(true);
      setTimeout(onSuccess, 2000);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-2xl">

          <div className="text-center mb-8">
            <span className="text-3xl font-bold text-white">
              Nex<span className="text-yellow-400">AI</span>ra
            </span>
            <p className="text-gray-400 mt-1 text-sm">Set New Password</p>
          </div>

          {done ? (
            <div className="text-center py-4">
              <CheckCircle size={48} className="text-yellow-400 mx-auto mb-4" />
              <h2 className="text-white font-semibold text-lg">Password updated!</h2>
              <p className="text-gray-400 text-sm mt-2">Redirecting you to your dashboard...</p>
            </div>
          ) : (
            <>
              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl px-4 py-3 mb-6">
                <p className="text-yellow-400 text-sm font-medium">Set your new password</p>
                <p className="text-gray-400 text-xs mt-1">
                  Choose a strong password. You'll use this to log in from now on.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="New password (min 8 characters)"
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
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={e => { setConfirmPassword(e.target.value); setError(''); }}
                    required
                    className="w-full bg-black border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                  />
                </div>

                {error && (
                  <div className="bg-red-900/30 border border-red-700 text-red-400 text-sm rounded-xl px-4 py-3">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-60"
                >
                  {loading ? 'Updating...' : 'Update Password'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
