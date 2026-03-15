import { ArrowRight, Bot, Filter, LineChart, Megaphone, SearchCheck, Target } from 'lucide-react';

export default function AgencyServices() {
  const services = [
    {
      icon: Target,
      title: 'AI Marketing Strategy',
      description: 'Define channel strategy, offer positioning, and growth roadmaps backed by market and audience data.',
    },
    {
      icon: Filter,
      title: 'Funnel Design & Optimization',
      description: 'Build high-converting acquisition funnels from ad click to qualified lead and customer conversion.',
    },
    {
      icon: Bot,
      title: 'Automation Workflows',
      description: 'Implement AI-assisted lead qualification, follow-ups, and campaign operations to reduce manual effort.',
    },
    {
      icon: Megaphone,
      title: 'Paid Campaign Management',
      description: 'Run and optimize paid campaigns with clear creative testing and performance-led budget allocation.',
    },
    {
      icon: SearchCheck,
      title: 'SEO & Content Systems',
      description: 'Create consistent search visibility with AI-supported research, topic planning, and content workflows.',
    },
    {
      icon: LineChart,
      title: 'Analytics & Reporting',
      description: 'Track business KPIs with transparent dashboards and regular performance insights for smarter decisions.',
    },
  ];

  return (
    <section id="ai-marketing-agency" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">AI Marketing Agency</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            End-to-end AI-powered marketing services built to improve pipeline quality, conversion rate, and business
            growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-black rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-yellow-400"
            >
              <div className="bg-yellow-400 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-black" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center text-yellow-400 font-medium group-hover:translate-x-2 transition-transform duration-300"
              >
                Book a Strategy Call
                <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
