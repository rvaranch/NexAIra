import {
  ArrowRight,
  Bot,
  Brain,
  Briefcase,
  CheckCircle,
  Code,
  Database,
  FileText,
  Filter,
  LineChart,
  Megaphone,
  SearchCheck,
  Target,
  Users,
} from 'lucide-react';

export default function AIMarketingAgencyPage() {
  const outcomes = [
    'Better AI visibility',
    'Conversational intent targeting',
    'High-intent prompt research',
    'Better landing page messaging',
    'More qualified leads',
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Reach high-intent audiences',
      description: 'Focus on users actively searching for solutions through AI-assisted discovery and conversations.',
    },
    {
      icon: FileText,
      title: 'Improve message clarity',
      description: 'Refine your value proposition so buyers understand what you do and why it matters, quickly.',
    },
    {
      icon: SearchCheck,
      title: 'Align content with buyer questions',
      description: 'Create content and messaging around real customer prompts and decision-stage intent.',
    },
    {
      icon: Users,
      title: 'Build trust in AI-driven journeys',
      description: 'Show up with relevant, clear answers where customers evaluate options through AI tools.',
    },
    {
      icon: LineChart,
      title: 'Support lead generation',
      description: 'Connect visibility and messaging improvements to better lead quality and conversion outcomes.',
    },
  ];

  const services = [
    {
      icon: SearchCheck,
      title: 'AI Visibility Audit',
      description: 'Identify how your brand appears across AI search and conversational discovery journeys.',
    },
    {
      icon: Target,
      title: 'Conversational Intent Research',
      description: 'Map the real questions, contexts, and intents customers use before making a purchase decision.',
    },
    {
      icon: Bot,
      title: 'Prompt Bank Development',
      description: 'Build structured prompt banks aligned to your audience, offers, and conversion goals.',
    },
    {
      icon: Brain,
      title: 'Campaign Strategy',
      description: 'Design funnel-driven strategies that connect AI discovery to qualified lead generation.',
    },
    {
      icon: Megaphone,
      title: 'Creative Development',
      description: 'Craft high-clarity messaging and creative directions tailored for AI-influenced customer journeys.',
    },
    {
      icon: Filter,
      title: 'Setup & Optimization',
      description: 'Implement campaigns, tracking, and iterative optimization focused on performance and efficiency.',
    },
    {
      icon: LineChart,
      title: 'Monthly Reporting',
      description: 'Review progress through actionable reporting with clear priorities for next-stage growth.',
    },
  ];

  const processSteps = [
    'Understand your business',
    'Research customer prompts',
    'Build funnel-based strategy',
    'Create messaging and landing page recommendations',
    'Optimize and report',
  ];

  const audiences = [
    { title: 'Training Institutes', icon: Briefcase },
    { title: 'SaaS Companies', icon: Code },
    { title: 'Startups', icon: Brain },
    { title: 'Healthcare Clinics', icon: Database },
    { title: 'Local Service Businesses', icon: Target },
    { title: 'Real Estate / Professional Services', icon: FileText },
  ];

  const differentiators = [
    'AI-first expertise',
    'Strategy + execution thinking',
    'Training and technology background',
    'Practical and future-ready approach',
  ];

  const faqs = [
    {
      question: 'What is AI Search & Conversation Marketing?',
      answer:
        'It is a strategy that helps your brand appear in AI-led discovery journeys by aligning visibility, content, prompts, and messaging with how customers ask questions in AI tools.',
    },
    {
      question: 'Is this only for large businesses?',
      answer:
        'No. The service is designed for startups, local businesses, institutes, and growing brands as well as larger companies.',
    },
    {
      question: 'Can this help local businesses?',
      answer:
        'Yes. Local businesses can improve discoverability, message relevance, and lead quality by targeting local buyer intent and conversational search behavior.',
    },
    {
      question: 'Do I need to run ads immediately?',
      answer:
        'Not always. We begin with visibility and intent alignment. Paid campaigns can be added when they support your goals and readiness.',
    },
    {
      question: 'What will NexAIra deliver?',
      answer:
        'Depending on scope: AI visibility audit, intent research, prompt bank, strategy plan, messaging recommendations, setup support, and monthly reporting.',
    },
    {
      question: 'Can you help improve our website messaging too?',
      answer:
        'Yes. Messaging and landing page recommendations are part of our process to improve conversion clarity and trust.',
    },
  ];

  const trustItems = [
    {
      title: 'Sample Industries Served',
      content: 'Training and education, SaaS, healthcare, local services, real estate, and consulting-driven businesses.',
    },
    {
      title: 'Business Use Cases',
      content: 'AI visibility improvement, lead quality optimization, funnel messaging refinement, and campaign clarity.',
    },
    {
      title: 'Testimonials / Case Studies',
      content: 'Placeholders ready for upcoming client stories, measurable outcomes, and implementation highlights.',
    },
  ];

  return (
    <main className="bg-[#07101a] text-white">
      <section className="pt-24 pb-20 bg-gradient-to-br from-[#081321] via-[#0c1d2f] to-[#081321]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-300 font-semibold uppercase tracking-wider mb-4">AI Marketing Agency</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI Search & Conversation Marketing for Modern Brands
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                NexAIra helps brands improve visibility in AI conversations and AI-driven search journeys, so your
                business appears at the right moment with messaging that converts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#consult"
                  className="inline-flex items-center justify-center px-8 py-4 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors duration-200 font-bold"
                >
                  Book Free Consultation
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-300 text-cyan-200 rounded-lg hover:bg-cyan-300 hover:text-black transition-colors duration-200 font-semibold"
                >
                  Explore Agency Services
                </a>
              </div>
            </div>

            <div className="bg-[#0f1f31] border border-cyan-900/50 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-5">Built for growth-focused teams</h2>
              <ul className="space-y-3 text-slate-300">
                <li>Improve brand discoverability beyond traditional ads</li>
                <li>Align search intent, conversations, and landing pages</li>
                <li>Focus on qualified demand, not vanity traffic</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="problem-solution" className="py-20 bg-[#0a1623] border-y border-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Your customers are searching in new ways</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0f1f31] border border-cyan-900/40 rounded-xl p-6">
              <p className="text-slate-300">
                More people are asking AI tools for recommendations before they visit websites or speak to sales teams.
              </p>
            </div>
            <div className="bg-[#0f1f31] border border-cyan-900/40 rounded-xl p-6">
              <p className="text-slate-300">
                Traditional marketing alone is no longer enough when discovery and evaluation happen in AI
                conversations.
              </p>
            </div>
            <div className="bg-[#0f1f31] border border-cyan-900/40 rounded-xl p-6">
              <p className="text-slate-300">
                NexAIra helps businesses prepare with clear visibility, buyer-aligned messaging, and practical strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="achieve" className="py-20 bg-[#07101a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">What We Help Businesses Achieve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {outcomes.map((item) => (
              <div key={item} className="bg-[#0f1f31] border border-cyan-900/40 rounded-xl p-5">
                <p className="text-slate-200 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-[#0a1623] border-y border-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">Outcomes You Can Expect</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-[#0f1f31] border border-cyan-900/40 rounded-xl p-6">
                <div className="bg-cyan-400 w-11 h-11 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-black" size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-[#07101a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Services</h2>
            <a
              href="#consult"
              className="inline-flex items-center text-cyan-300 font-semibold hover:text-cyan-200 transition-colors"
            >
              Get AI Visibility Audit
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="group bg-[#0f1f31] border border-cyan-900/40 rounded-2xl p-7 hover:border-cyan-400 transition-colors duration-300"
              >
                <div className="bg-cyan-400 w-12 h-12 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-black" size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-[#0a1623] border-y border-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">How Our Process Works</h2>
          <div className="grid md:grid-cols-5 gap-5">
            {processSteps.map((step, index) => (
              <div key={step} className="bg-[#0f1f31] border border-cyan-900/40 rounded-xl p-5">
                <p className="text-cyan-300 font-semibold mb-2">Step {index + 1}</p>
                <p className="text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-this-matters" className="py-20 bg-[#07101a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Why This Matters</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0f1f31] border border-cyan-900/40 rounded-xl p-6">
              <p className="text-slate-300">
                People increasingly discover brands through AI conversations and AI-assisted search experiences.
              </p>
            </div>
            <div className="bg-[#0f1f31] border border-cyan-900/40 rounded-xl p-6">
              <p className="text-slate-300">
                Ads alone are not enough when buying decisions begin inside conversational and intent-driven discovery.
              </p>
            </div>
            <div className="bg-[#0f1f31] border border-cyan-900/40 rounded-xl p-6">
              <p className="text-slate-300">
                Brands need visibility, messaging, and strategy working together to capture high-intent demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="who-this-is-for" className="py-20 bg-[#0a1623] border-y border-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">Who This Service Is For</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((audience) => (
              <div key={audience.title} className="bg-[#0f1f31] border border-cyan-900/40 rounded-xl p-6">
                <div className="bg-cyan-400 w-11 h-11 rounded-lg flex items-center justify-center mb-4">
                  <audience.icon className="text-black" size={20} />
                </div>
                <p className="text-slate-100 font-semibold">{audience.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-nexaira" className="py-20 bg-[#07101a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Why Choose NexAIra</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {differentiators.map((item) => (
              <div key={item} className="bg-[#0f1f31] border border-cyan-900/40 rounded-xl p-6">
                <p className="text-slate-200 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-[#0a1623] border-y border-cyan-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">FAQ for Business Clients</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-[#0f1f31] border border-cyan-900/40 rounded-xl p-5 group">
                <summary className="list-none cursor-pointer flex items-center justify-between text-slate-100 font-semibold">
                  <span>{faq.question}</span>
                  <span className="text-cyan-300 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-slate-300 mt-3 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="py-20 bg-[#07101a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">Trust Signals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {trustItems.map((item) => (
              <div key={item.title} className="bg-[#0f1f31] border border-cyan-900/40 rounded-xl p-6">
                <div className="inline-flex items-center text-cyan-300 mb-3">
                  <CheckCircle size={18} className="mr-2" />
                  <span className="font-semibold">Placeholder</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-capture" className="py-20 bg-[#0a1623] border-y border-cyan-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Talk to NexAIra</h2>
          <p className="text-slate-300 mb-8">
            Share your business details and goals. We will schedule a focused consultation for your AI visibility and
            conversation marketing strategy.
          </p>

          <form className="grid sm:grid-cols-2 gap-5 bg-[#0f1f31] border border-cyan-900/40 rounded-2xl p-6 sm:p-8">
            <label className="block">
              <span className="block text-sm text-slate-200 mb-2">Name</span>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg bg-[#081321] border border-cyan-900/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>

            <label className="block">
              <span className="block text-sm text-slate-200 mb-2">Business Name</span>
              <input
                type="text"
                name="businessName"
                className="w-full rounded-lg bg-[#081321] border border-cyan-900/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>

            <label className="block">
              <span className="block text-sm text-slate-200 mb-2">Website</span>
              <input
                type="url"
                name="website"
                placeholder="https://"
                className="w-full rounded-lg bg-[#081321] border border-cyan-900/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>

            <label className="block">
              <span className="block text-sm text-slate-200 mb-2">Industry</span>
              <input
                type="text"
                name="industry"
                className="w-full rounded-lg bg-[#081321] border border-cyan-900/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>

            <label className="block">
              <span className="block text-sm text-slate-200 mb-2">Service Interested In</span>
              <select
                name="serviceInterestedIn"
                className="w-full rounded-lg bg-[#081321] border border-cyan-900/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>AI Visibility Audit</option>
                <option>Conversational Intent Research</option>
                <option>Prompt Bank Development</option>
                <option>Campaign Strategy</option>
                <option>Setup & Optimization</option>
                <option>Monthly Reporting</option>
              </select>
            </label>

            <label className="block">
              <span className="block text-sm text-slate-200 mb-2">Phone</span>
              <input
                type="tel"
                name="phone"
                className="w-full rounded-lg bg-[#081321] border border-cyan-900/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="block text-sm text-slate-200 mb-2">Email</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg bg-[#081321] border border-cyan-900/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="block text-sm text-slate-200 mb-2">Message</span>
              <textarea
                name="message"
                rows={5}
                className="w-full rounded-lg bg-[#081321] border border-cyan-900/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Tell us about your business goals and current marketing challenges."
              />
            </label>

            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors duration-200 font-semibold"
              >
                Book Free Consultation
              </button>
              <a
                href="#consult"
                className="inline-flex items-center justify-center px-6 py-3 border border-cyan-300 text-cyan-200 rounded-lg hover:bg-cyan-300 hover:text-black transition-colors duration-200 font-semibold"
              >
                Talk to NexAIra
              </a>
            </div>
          </form>
        </div>
      </section>

      <section id="consult" className="py-20 bg-gradient-to-r from-cyan-500 to-teal-400 text-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s grow your brand in AI-powered customer journeys.
          </h2>
          <p className="text-lg mb-8">
            Talk to our team and get a practical roadmap for AI Search and Conversation Marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919063118119"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-cyan-300 rounded-lg hover:bg-slate-900 transition-colors duration-200 font-bold"
            >
              Book Consultation
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-black text-black rounded-lg hover:bg-black hover:text-cyan-300 transition-colors duration-200 font-semibold"
            >
              Explore Agency Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}