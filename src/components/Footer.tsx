export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Nex<span className="text-yellow-400">A</span>ira <span className="text-sm text-gray-500">Tech Services LLP</span>
            </h3>
            <p className="text-gray-400">
              Shaping the next generation through quality technology education and consulting.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#features" className="hover:text-yellow-400 transition-colors">Features</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
              </li>
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
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} NexAIra Tech Services LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
