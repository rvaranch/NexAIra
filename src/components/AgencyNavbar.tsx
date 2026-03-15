import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function AgencyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'What We Help Achieve', href: '#achieve' },
    { name: 'Our Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Why This Matters', href: '#why-this-matters' },
    { name: 'Who This Is For', href: '#who-this-is-for' },
    { name: 'Why NexAIra', href: '#why-choose-nexaira' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#0a1119]/95 backdrop-blur-sm shadow-lg z-50 border-b border-cyan-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              Nex<span className="text-yellow-400">AI</span>ra
            </span>
          </a>

          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#consult"
              className="inline-flex items-center justify-center px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors duration-200 font-semibold"
            >
              Book Free Consultation
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#0a1119] border-t border-cyan-900/40">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-cyan-300 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#consult"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors duration-200 font-semibold"
            >
              Book Free Consultation
            </a>
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-cyan-300 transition-colors duration-200 font-medium"
            >
              Back to Home
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
