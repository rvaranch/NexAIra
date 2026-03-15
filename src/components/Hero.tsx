import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">
                Nex<span className="text-yellow-400">AI</span>ra
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-400">Tech Services LLP</span>
            </h1>

            <p className="text-3xl sm:text-4xl text-yellow-400 mb-6 font-semibold leading-tight">
              AI Training for Learners. AI Search and Conversation Marketing for Businesses.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              NexAIra empowers learners with industry-ready technology programs and helps companies grow with modern,
              measurable AI marketing systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#training-programs"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors duration-200 font-bold shadow-lg hover:shadow-xl"
              >
                Start Learning with NexAIra
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="/ai-marketing-agency"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-yellow-400 border-2 border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors duration-200 font-medium"
              >
                Grow Your Business with AI
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-xl">
              <h2 className="text-2xl text-white font-bold mb-4">Why teams and learners choose us</h2>
              <ul className="space-y-3 text-gray-300">
                <li>Industry-ready, practical AI and technology training tracks</li>
                <li>AI Search and Conversation Marketing built for conversion</li>
                <li>Transparent execution with clear strategy and measurable outcomes</li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
                <p className="text-yellow-400 text-2xl font-bold">10+</p>
                <p className="text-gray-300 text-sm">Years Experience</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
                <p className="text-yellow-400 text-2xl font-bold">2</p>
                <p className="text-gray-300 text-sm">Core Verticals</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
                <p className="text-yellow-400 text-2xl font-bold">1</p>
                <p className="text-gray-300 text-sm">Unified AI Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
