import {
  Users,
  Calendar,
  Target,
  Award,
  Briefcase,
  FileText,
  MessageSquare,
  Wifi,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Wifi,
      title: 'Flexible Learning Options',
      description: 'Both offline and online sessions available for all technologies. Recorded sessions provided for reference.',
    },
    {
      icon: Users,
      title: 'One-to-One Interaction',
      description: 'Personalized interaction sessions conducted every day to ensure individual attention and growth.',
    },
    {
      icon: Calendar,
      title: 'Regular Assessments',
      description: 'Weekly tests focused on specific technologies to track progress and reinforce learning.',
    },
    {
      icon: Award,
      title: 'Experienced Instructors',
      description: 'Learn from instructors with over 10 years of industry experience and real-world expertise.',
    },
    {
      icon: Target,
      title: 'Scenario-Based Training',
      description: 'Practical training that emphasizes real-world scenarios and industry best practices.',
    },
    {
      icon: Briefcase,
      title: 'Live Project Explanations',
      description: 'Detailed discussions on real-time projects to bridge the gap between theory and practice.',
    },
    {
      icon: FileText,
      title: 'Resume & Career Support',
      description: 'Professional guidance in crafting resumes and maintaining job portals for career success.',
    },
    {
      icon: MessageSquare,
      title: 'Mock Interviews',
      description: 'Comprehensive mock interview sessions to prepare you for real-world opportunities.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Choose NexAIra?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We provide comprehensive support and resources to ensure your success in the technology industry
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
              <div className="text-gray-300">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-gray-300">Technology Domains</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300">Practical Training</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
