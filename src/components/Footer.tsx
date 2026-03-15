export default function Footer() {
  const currentPath = window.location.pathname.replace(/\/+$/, '');
  const isAgencyPage = currentPath === '/ai-marketing-agency';

  const quickLinks = isAgencyPage
    ? [
        { label: 'Home', href: '/' },
        { label: 'What We Help Achieve', href: '#achieve' },
        { label: 'Our Services', href: '#services' },
        { label: 'How Our Process Works', href: '#process' },
        { label: 'Why This Matters', href: '#why-this-matters' },
        { label: 'Book Consultation', href: '#consult' },
      ]
    : [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Training Programs', href: '#training-programs' },
        { label: 'AI Marketing Agency', href: '/ai-marketing-agency' },
        { label: 'Why NexAIra', href: '#why-nexaira' },
        { label: 'Contact', href: '#contact' },
      ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/thenexaira/' },
    { label: 'Instagram', href: 'https://www.instagram.com/thenexaira/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@thenexaira' },
  ];

  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Nex<span className="text-yellow-400">AI</span>ra{' '}
              <span className="text-sm text-gray-500">Tech Services LLP</span>
            </h3>
            <p className="text-gray-400">
              AI training institute and AI-powered business solutions provider for growth-focused learners and brands.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-yellow-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+91 9063118119</li>
              <li>info@thenexaira.com</li>
              <li>Mancherial - 504208</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Social Links</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} NexAIra Tech Services LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
