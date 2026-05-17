import { Menu, X, LogOut, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

type Props = {
  onLoginClick: () => void;
  onDashboardClick: () => void;
};

export default function Navbar({ onLoginClick, onDashboardClick }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">
              Nex<span className="text-yellow-400">AI</span>ra
            </span>
            <span className="ml-2 text-sm text-gray-400 hidden sm:block">Tech Services LLP</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}

            {user ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={onDashboardClick}
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors font-medium text-sm"
                >
                  <LayoutDashboard size={16} />
                  My Dashboard
                </button>
                <button
                  onClick={() => signOut()}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                  title="Logout"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="px-5 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors font-medium text-sm"
              >
                Learner Login
              </button>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-800">
              {user ? (
                <div className="space-y-2">
                  <button
                    onClick={() => { onDashboardClick(); setIsOpen(false); }}
                    className="w-full flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium text-sm"
                  >
                    <LayoutDashboard size={16} />
                    My Dashboard
                  </button>
                  <button
                    onClick={() => { signOut(); setIsOpen(false); }}
                    className="w-full text-left text-gray-400 text-sm py-1"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => { onLoginClick(); setIsOpen(false); }}
                  className="w-full px-4 py-2 bg-yellow-400 text-black rounded-lg font-medium text-sm"
                >
                  Learner Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
