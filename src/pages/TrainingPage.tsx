import { BookOpen, Code, Brain, Cloud, Database, Cpu, Zap, LineChart } from 'lucide-react';

export default function TrainingPage() {
  const programs = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Master AI fundamentals, neural networks, and real-world AI applications with hands-on projects.',
    },
    {
      icon: Zap,
      title: 'Generative AI',
      description: 'Learn to build and deploy generative AI models, prompt engineering, and LLM applications.',
    },
    {
      icon: LineChart,
      title: 'Machine Learning',
      description: 'Deep dive into ML algorithms, model training, and deployment with practical use cases.',
    },
    {
      icon: Code,
      title: 'Python Programming',
      description: 'From basics to advanced Python development for data science, automation, and web applications.',
    },
    {
      icon: Cloud,
      title: 'DevOps',
      description: 'Master CI/CD pipelines, containerization, cloud infrastructure, and automation tools.',
    },
    {
      icon: Database,
      title: 'SAP',
      description: 'Comprehensive SAP training covering modules and real-world enterprise implementation.',
    },
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'Hardware-software integration, IoT development, and embedded programming expertise.',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Analytics, visualization, statistical modeling, and business intelligence mastery.',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Industry-Ready <span className="text-yellow-400">Training Programs</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Build your career with comprehensive, hands-on training in cutting-edge technologies.
              Learn from industry experts with 10+ years of experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 p-6 rounded-xl hover:border-yellow-400 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="bg-yellow-400 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="text-black" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{program.description}</p>
                <button className="w-full px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors duration-200 font-medium">
                  Enquire Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-700 p-8 rounded-xl">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-black" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Who Can Join?</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Students & fresh graduates</li>
                <li>• Working professionals upskilling</li>
                <li>• Career switchers into tech</li>
                <li>• Anyone passionate about technology</li>
              </ul>
            </div>

            <div className="bg-black border border-gray-700 p-8 rounded-xl">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="text-black" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Learning Options</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Online live sessions</li>
                <li>• Offline classroom training</li>
                <li>• Recorded sessions provided</li>
                <li>• Flexible batch timings</li>
              </ul>
            </div>

            <div className="bg-black border border-gray-700 p-8 rounded-xl">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="text-black" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Career Support</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Live project guidance</li>
                <li>• Internship opportunities</li>
                <li>• Resume building support</li>
                <li>• Mock interviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-black mb-4">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl text-black mb-8">
              Join hundreds of successful professionals who transformed their careers with us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-black text-yellow-400 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-bold"
              >
                Enroll Now
              </a>
              <a
                href="tel:+919063118119"
                className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold"
              >
                Call +91 9063118119
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
