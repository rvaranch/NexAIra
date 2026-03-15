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
      description: 'Offline and online training delivery with recorded sessions for revision and continuity.',
    },
    {
      icon: Users,
      title: 'Mentorship and Live Support',
      description: 'Daily one-to-one interaction and expert support to accelerate understanding and confidence.',
    },
    {
      icon: Calendar,
      title: 'Structured Assessments',
      description: 'Weekly evaluations and progress tracking to ensure measurable growth across programs.',
    },
    {
      icon: Award,
      title: 'Experienced Experts',
      description: 'Learn and collaborate with professionals who bring deep real-world experience.',
    },
    {
      icon: Target,
      title: 'Outcome-Driven Execution',
      description: 'For business clients, every campaign is aligned with clear KPIs and growth objectives.',
    },
    {
      icon: Briefcase,
      title: 'Real Project Exposure',
      description: 'Practical scenarios and campaign workflows that connect theory to implementation.',
    },
    {
      icon: FileText,
      title: 'Transparent Reporting',
      description: 'Consistent updates, actionable insights, and clear communication for learners and businesses.',
    },
    {
      icon: MessageSquare,
      title: 'Career and Business Guidance',
      description: 'Resume support, interview prep, and strategy consultation for long-term growth.',
    },
  ];

  return (
    <section id="why-nexaira" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Why Choose NexAIra</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A trusted AI partner for both skill development and business growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
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
              <div className="text-4xl font-bold text-yellow-400 mb-2">2</div>
              <div className="text-gray-300">Core Verticals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300">Practical, Outcome-Focused Approach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}