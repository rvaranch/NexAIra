import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Training Programs', href: '/training' },
    { name: 'AI Marketing Agency', href: '/agency' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleClick = (href: string) => {
    setIsOpen(false);
    if (href.includes('#')) {
      const id = href.split('#')[1];
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              Nex<span className="text-yellow-400">AI</span>ra
            </span>
            <span className="ml-2 text-sm text-gray-400 hidden sm:block">Tech Services LLP</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.href.includes('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      const id = item.href.split('#')[1];
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
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
              item.href.includes('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
