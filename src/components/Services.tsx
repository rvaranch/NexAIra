import { ArrowRight, Brain, Cloud, Database, Cpu, Lightbulb } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Lightbulb,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to drive your business forward with innovative solutions.',
    },
    {
      icon: Brain,
      title: 'Training in Artificial Intelligence',
      description: 'Master AI and machine learning with practical, hands-on training from industry experts.',
    },
    {
      icon: Cloud,
      title: 'DevOps',
      description: 'Learn modern DevOps practices, CI/CD pipelines, and cloud infrastructure management.',
    },
    {
      icon: Database,
      title: 'Data Sciences',
      description: 'Comprehensive data science training covering analytics, visualization, and predictive modeling.',
    },
    {
      icon: Cpu,
      title: 'Embedded Systems',
      description: 'Deep dive into embedded systems programming, IoT, and hardware-software integration.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology training and consulting services designed to accelerate your career growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-900 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-yellow-400"
            >
              <div className="bg-yellow-400 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-black" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
              <div className="flex items-center text-yellow-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn More
                <ArrowRight className="ml-2" size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
