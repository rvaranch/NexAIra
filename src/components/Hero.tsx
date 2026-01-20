import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">
                Nex<span className="text-yellow-400">A</span>ira
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-400">
                Tech Services LLP
              </span>
            </h1>

            <p className="text-2xl sm:text-3xl text-yellow-400 mb-8 font-light">
              Shaping the next generation
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Empowering professionals with cutting-edge technology training and consulting services.
              Transform your career with expert guidance and hands-on experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors duration-200 font-bold shadow-lg hover:shadow-xl"
              >
                Explore Services
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-yellow-400 border-2 border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors duration-200 font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 border-l-4 border-yellow-400 p-8 rounded-lg shadow-xl">
              <p className="text-xl text-white italic leading-relaxed">
                "Your future is built one study session at a time—show up for yourself every day."
              </p>
            </div>
            <div className="bg-gray-800 border-l-4 border-yellow-400 p-8 rounded-lg shadow-xl">
              <p className="text-xl text-white italic leading-relaxed">
                "Success begins with believing that improvement is possible."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
