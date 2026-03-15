import { Search, MessageSquare, Target, TrendingUp, CheckCircle, Users, Building, Stethoscope, ShoppingBag, Home as HomeIcon, Briefcase, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function AgencyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      title: 'AI Visibility Audit',
      description: 'Comprehensive analysis of how your brand appears in AI-powered search and conversations.',
    },
    {
      title: 'Conversational Intent Research',
      description: 'Deep research into how your target customers phrase queries when discovering solutions.',
    },
    {
      title: 'Prompt Bank Development',
      description: 'Strategic repository of high-intent prompts and queries that connect to your services.',
    },
    {
      title: 'Campaign Strategy',
      description: 'End-to-end marketing strategy aligned with AI-driven customer discovery journeys.',
    },
    {
      title: 'Creative Development',
      description: 'Messaging, content, and creative assets optimized for conversational marketing.',
    },
    {
      title: 'Setup & Optimization',
      description: 'Implementation and continuous optimization of campaigns for maximum ROI.',
    },
    {
      title: 'Monthly Reporting',
      description: 'Transparent analytics and insights showing visibility, engagement, and lead quality.',
    },
  ];

  const benefits = [
    'Reach high-intent audiences discovering solutions',
    'Improve message clarity and positioning',
    'Align content with real buyer questions',
    'Build trust in AI-driven customer journeys',
    'Support qualified lead generation',
  ];

  const industries = [
    { icon: Building, name: 'Training Institutes' },
    { icon: Target, name: 'SaaS Companies' },
    { icon: TrendingUp, name: 'Startups' },
    { icon: Stethoscope, name: 'Healthcare Clinics' },
    { icon: ShoppingBag, name: 'Local Service Businesses' },
    { icon: HomeIcon, name: 'Real Estate & Professional Services' },
  ];

  const faqs = [
    {
      question: 'What is AI Search & Conversation Marketing?',
      answer: 'It\'s a new approach to marketing focused on making your brand visible and compelling when customers discover solutions through AI tools like ChatGPT, Perplexity, and AI-powered search engines.',
    },
    {
      question: 'Is this only for large businesses?',
      answer: 'Not at all. Businesses of all sizes can benefit. In fact, smaller businesses often have an advantage in conversational marketing because they can be more specific and targeted in their positioning.',
    },
    {
      question: 'Can this help local businesses?',
      answer: 'Absolutely. Local businesses can leverage AI visibility to appear when potential customers ask AI tools for recommendations in their area, making it a powerful discovery channel.',
    },
    {
      question: 'Do I need to run ads immediately?',
      answer: 'No. We start with visibility audit, research, and strategy. Paid campaigns are optional and depend on your goals, budget, and readiness.',
    },
    {
      question: 'What will NexAIra deliver?',
      answer: 'We deliver strategic research, actionable recommendations, campaign setup, creative assets, and ongoing optimization focused on improving your AI visibility and lead quality.',
    },
    {
      question: 'Can you help improve our website messaging too?',
      answer: 'Yes. Part of our service includes landing page messaging recommendations to ensure your site resonates with visitors coming from AI-driven discovery.',
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              AI Search & Conversation Marketing for <span className="text-yellow-400">Modern Brands</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              NexAIra helps brands improve visibility in AI conversations and AI-driven search journeys.
              Reach customers where they're discovering solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors duration-200 font-bold"
              >
                Book Free Consultation
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-transparent text-yellow-400 border-2 border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors duration-200 font-medium"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Customers Are Searching in New Ways
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              People increasingly ask AI tools for recommendations, compare solutions through conversations,
              and discover brands in AI-powered search journeys. Traditional marketing alone is no longer enough.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-700 p-8 rounded-xl text-center">
              <Search className="text-yellow-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Discovery</h3>
              <p className="text-gray-400">
                Customers use AI tools to research, compare, and decide before ever visiting a website.
              </p>
            </div>

            <div className="bg-black border border-gray-700 p-8 rounded-xl text-center">
              <MessageSquare className="text-yellow-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-3">Conversational Intent</h3>
              <p className="text-gray-400">
                People phrase questions naturally, revealing deeper intent and readiness to buy.
              </p>
            </div>

            <div className="bg-black border border-gray-700 p-8 rounded-xl text-center">
              <Target className="text-yellow-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-white mb-3">Strategic Positioning</h3>
              <p className="text-gray-400">
                Brands that show up in these conversations with clear messaging win trust and attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What We Help Businesses Achieve
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-gray-900 border border-gray-700 p-6 rounded-xl">
                <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI marketing services from audit to execution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black border border-gray-700 p-6 rounded-xl hover:border-yellow-400 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How Our Process Works</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '1', title: 'Understand Your Business', desc: 'Deep dive into your goals, audience, and competitive landscape' },
              { step: '2', title: 'Research Customer Prompts', desc: 'Identify how your audience discovers solutions through AI' },
              { step: '3', title: 'Build Strategy', desc: 'Create funnel-based approach for visibility and conversion' },
              { step: '4', title: 'Develop Messaging', desc: 'Craft positioning and landing page recommendations' },
              { step: '5', title: 'Optimize & Report', desc: 'Continuous improvement with transparent analytics' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-black">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Who This Service Is For</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-black border border-gray-700 p-6 rounded-xl hover:border-yellow-400 transition-all duration-300 flex items-center space-x-4"
              >
                <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <industry.icon className="text-black" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`text-yellow-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    size={24}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose NexAIra</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AI-First Expertise', desc: 'Deep understanding of AI technologies and how they shape customer behavior' },
              { title: 'Strategy + Execution', desc: 'We don\'t just plan—we implement and optimize for results' },
              { title: 'Training Background', desc: 'Our technology training experience informs practical, educational approach' },
              { title: 'Future-Ready', desc: 'Positioned at the forefront of AI-driven marketing evolution' },
            ].map((item, index) => (
              <div key={index} className="bg-black border border-gray-700 p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              Let's Grow Your Brand in AI-Powered Customer Journeys
            </h2>
            <p className="text-xl text-black mb-8">
              Schedule a free consultation to discuss your business goals
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-black text-yellow-400 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-bold"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
