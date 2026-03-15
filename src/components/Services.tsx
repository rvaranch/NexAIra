import { ArrowRight, Bot, Brain, Briefcase, Cloud, Code, Cpu, Database, Target } from 'lucide-react';

export default function Services() {
  const programs = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Build practical AI skills through real-world workflows, model design, and guided implementation.',
    },
    {
      icon: Bot,
      title: 'Generative AI',
      description: 'Learn prompt engineering, LLM applications, and production-ready GenAI solution development.',
    },
    {
      icon: Target,
      title: 'Machine Learning',
      description: 'Understand ML foundations, supervised and unsupervised methods, and model evaluation techniques.',
    },
    {
      icon: Code,
      title: 'Python',
      description: 'Master Python for automation, backend development, data workflows, and AI/ML programming.',
    },
    {
      icon: Cloud,
      title: 'DevOps',
      description: 'Practice CI/CD, cloud environments, infrastructure automation, and deployment best practices.',
    },
    {
      icon: Briefcase,
      title: 'SAP',
      description: 'Get industry-relevant SAP exposure with process-oriented training for enterprise operations.',
    },
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'Develop embedded and IoT skills with hardware-software integration and project-based learning.',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Work on analytics, visualization, and predictive modeling using practical datasets and tools.',
    },
  ];

  return (
    <section id="training-programs" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Training Programs</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Student-focused, industry-aligned programs designed to build strong fundamentals and job-ready practical
            experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group p-6 bg-gray-900 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-yellow-400"
            >
              <div className="bg-yellow-400 w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <program.icon className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-5 text-sm">{program.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center text-yellow-400 font-medium group-hover:translate-x-2 transition-transform duration-300"
              >
                Learn More / Enquire Now
                <ArrowRight className="ml-2" size={16} />
              </a>
            </article>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Who Can Join?</h3>
            <p className="text-gray-400 leading-relaxed">
              Students, fresh graduates, working professionals, career switchers, and entrepreneurs looking to gain
              practical AI and technology skills can join our programs.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Online & Offline Training Available</h3>
            <p className="text-gray-400 leading-relaxed">
              Choose classroom or live online batches based on your schedule. Recorded sessions and trainer support are
              available to keep learning flexible and consistent.
            </p>
          </div>
        </div>

        <div className="bg-yellow-400 text-black rounded-2xl p-8 md:p-10 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Internship / Project Guidance / Career Support</h3>
          <p className="text-base md:text-lg mb-6 max-w-4xl">
            Go beyond theory with internship-oriented exposure, live project mentoring, resume preparation, and mock
            interview guidance to improve placement readiness.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-black text-yellow-400 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
          >
            Enquire for Batch Details
            <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}