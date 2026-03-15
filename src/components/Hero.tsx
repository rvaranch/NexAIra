import { ArrowRight, GraduationCap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">
                Nex<span className="text-yellow-400">AI</span>ra
              </span>
            </h1>

            <p className="text-3xl sm:text-4xl text-white mb-6 font-light">
              Empowering Learners. Growing Businesses.
            </p>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              NexAIra empowers learners through industry-ready AI and technology training,
              and helps businesses grow through AI Search & Conversation Marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/training"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors duration-200 font-bold shadow-lg hover:shadow-xl"
              >
                Explore Training
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/agency"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-yellow-400 border-2 border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors duration-200 font-bold"
              >
                Explore Agency Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-400">Choose your path to success with NexAIra</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-yellow-400 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="text-black" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                For Learners: Build Your Career
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Industry-ready training in AI, Machine Learning, DevOps, Data Science, and more.
                Learn from experts with 10+ years of experience through hands-on projects and personalized mentorship.
              </p>
              <Link
                to="/training"
                className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors duration-200 font-bold"
              >
                Explore Training Programs
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-yellow-400 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-black" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                For Businesses: Grow with AI Marketing
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                AI Search & Conversation Marketing to improve your brand's visibility in AI-driven customer journeys.
                Strategic positioning, high-intent research, and campaigns that convert.
              </p>
              <Link
                to="/agency"
                className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors duration-200 font-bold"
              >
                Explore Agency Services
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
