import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Nex<span className="text-yellow-400">AI</span>ra <span className="text-sm text-gray-500">Tech Services LLP</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              NexAIra empowers learners with future-ready technology training and helps businesses
              grow through AI Search & Conversation Marketing.
            </p>
            <div className="text-sm text-gray-500">
              <p>HNO 23-5/2, 2nd floor, Chunnambattiwada</p>
              <p>Mancherial - 504208</p>
              <p className="mt-2">+91 9063118119</p>
              <p>info@thenexaira.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Training Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/training" className="hover:text-yellow-400 transition-colors">All Programs</Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-yellow-400 transition-colors">Artificial Intelligence</Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-yellow-400 transition-colors">Machine Learning</Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-yellow-400 transition-colors">DevOps</Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-yellow-400 transition-colors">Data Science</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-yellow-400 transition-colors">Training</Link>
              </li>
              <li>
                <Link to="/agency" className="hover:text-yellow-400 transition-colors">AI Marketing Agency</Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} NexAIra Tech Services LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
