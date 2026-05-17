import { useState } from 'react';
import { LogOut, Video, BookOpen, BookMarked, User, Clock, AlertTriangle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import MeetingsSection from './MeetingsSection';
import CoursesSection from './CoursesSection';
import NotesSection from './NotesSection';

type Tab = 'courses' | 'notes' | 'meetings';
type Props = { onLogout: () => void; };

export default function Dashboard({ onLogout }: Props) {
  const { user, signOut, sessionExpiring, sessionExpiresAt } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>('courses');

  const handleLogout = async () => { await signOut(); onLogout(); };
  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Learner';

  const formatTimeLeft = () => {
    if (!sessionExpiresAt) return '';
    const ms  = sessionExpiresAt.getTime() - Date.now();
    if (ms <= 0) return '0 min';
    const min = Math.ceil(ms / 60000);
    return `${min} min`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">

      {/* ── Header ── */}
      <header className="bg-black/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-40">
        <div className="w-full px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-white">
              Nex<span className="text-yellow-400">AI</span>ra
              <span className="text-gray-400 text-sm font-normal ml-2 hidden sm:inline">Learner Portal</span>
            </span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center">
                  <User size={16} className="text-gray-300" />
                </div>
                <span className="hidden sm:block">{displayName}</span>
              </div>
              <button onClick={handleLogout}
                className="flex items-center gap-1.5 text-gray-400 hover:text-red-400 transition-colors text-sm">
                <LogOut size={16} />
                <span className="hidden sm:block">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Session expiry warning banner ── */}
      {sessionExpiring && (
        <div className="bg-yellow-400 text-black px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium">
            <AlertTriangle size={16} />
            Your session expires in {formatTimeLeft()}. Please save your progress and log in again.
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-xs opacity-70">
              <Clock size={12} /> Auto logout soon
            </span>
            <button
              onClick={handleLogout}
              className="bg-black text-yellow-400 text-xs font-bold px-3 py-1 rounded-lg hover:bg-gray-900 transition-colors"
            >
              Login Again
            </button>
          </div>
        </div>
      )}

      {/* ── Welcome + tabs ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white">
            Welcome back, <span className="text-yellow-400">{displayName}</span> 👋
          </h1>
          <p className="text-gray-400 mt-1">Access your meetings and course recordings below.</p>
        </div>

        <div className="flex gap-1 bg-gray-900 border border-gray-700 rounded-xl p-1 w-fit">
          {/* Courses & Recordings — first */}
          <button onClick={() => setActiveTab('courses')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'courses' ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white'
            }`}>
            <BookOpen size={16} /> Courses & Recordings
          </button>
          {/* Notes */}
          <button onClick={() => setActiveTab('notes')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'notes' ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white'
            }`}>
            <BookMarked size={16} /> Notes
          </button>
          {/* Live Meetings — disabled */}
          <button
            disabled
            title="Live meetings coming soon"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-gray-600 cursor-not-allowed opacity-50"
          >
            <Video size={16} /> Live Meetings
          </button>
        </div>
      </div>

      {/* ── Content ── */}
      {activeTab === 'meetings' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
          <h2 className="text-xl font-semibold text-white mb-4">Upcoming Sessions</h2>
          <MeetingsSection />
        </div>
      )}

      {activeTab === 'courses' && (
        <div className="pb-6">
          <CoursesSection />
        </div>
      )}

      {activeTab === 'notes' && (
        <div className="pb-10">
          <NotesSection />
        </div>
      )}
    </div>
  );
}
