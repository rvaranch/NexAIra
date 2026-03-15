import { Users, Calendar, Award, Target, Briefcase, MessageSquare, Wifi, Brain } from 'lucide-react';

export default function WhyNexaira() {
  const features = [
    {
      icon: Brain,
      title: 'AI-First Expertise',
      description: 'Deep understanding of AI technologies that informs both training and business strategy.',
    },
    {
      icon: Users,
      title: 'Personalized Attention',
      description: 'One-to-one interaction sessions and customized approaches for every learner and client.',
    },
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Industry veterans with real-world expertise in technology and business growth.',
    },
    {
      icon: Target,
      title: 'Practical Focus',
      description: 'Scenario-based training and data-driven strategies that deliver real results.',
    },
    {
      icon: Briefcase,
      title: 'Career & Business Support',
      description: 'Comprehensive support from skill building to job placement and business growth.',
    },
    {
      icon: Wifi,
      title: 'Flexible Options',
      description: 'Online and offline training, custom timelines, and scalable business solutions.',
    },
    {
      icon: Calendar,
      title: 'Regular Assessments',
      description: 'Continuous feedback and optimization whether training students or running campaigns.',
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description: 'Clear reporting, open dialogue, and honest recommendations every step of the way.',
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose NexAIra?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you're learning or growing your business, we bring expertise, dedication, and results
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-yellow-400"
            >
              <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-black" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-700">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-gray-300">Years of Industry Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300">Practical Training & Strategy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">2</div>
              <div className="text-gray-300">Powerful Service Verticals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
