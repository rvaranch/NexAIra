export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-yellow-400 font-semibold uppercase tracking-wider mb-4">About NexAIra</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            One AI brand for talent development and business growth
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto">
            NexAIra is an AI-focused organization. We train students and professionals in future-ready technologies,
            and we help businesses grow through AI-powered marketing strategy and visibility services.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 mb-10">
          <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to make AI practical and useful for both people and businesses by combining strong technical
            learning with real-world growth strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-black border border-yellow-500/40 rounded-2xl p-8">
            <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mb-3">Pillar 1</p>
            <h3 className="text-2xl font-bold text-white mb-4">Training & Skill Development</h3>
            <p className="text-gray-400 leading-relaxed">
              We deliver structured training programs in AI and core technologies with practical projects, mentorship,
              and career-focused support to build job-ready confidence.
            </p>
          </div>

          <div className="bg-[#0b1524] border border-cyan-600/40 rounded-2xl p-8">
            <p className="text-cyan-300 text-sm font-semibold uppercase tracking-wider mb-3">Pillar 2</p>
            <h3 className="text-2xl font-bold text-white mb-4">AI Marketing & Business Growth</h3>
            <p className="text-gray-400 leading-relaxed">
              We support businesses with AI Search and Conversation Marketing, helping them improve discoverability,
              strengthen messaging, and generate qualified leads.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 mb-10">
          <h3 className="text-2xl font-bold text-white mb-4">Why both services belong under one brand</h3>
          <p className="text-gray-300 leading-relaxed">
            Both pillars are powered by the same foundation: applied AI expertise. The same practical understanding of
            AI tools, workflows, and user behavior that helps learners build careers also helps brands grow in modern
            customer journeys.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Credibility</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              NexAIra brings together training experience, technology depth, and practical business execution. Our
              approach is simple: focus on real skills, clear strategy, and measurable outcomes.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Work with NexAIra</h3>
            <div className="space-y-4 text-gray-300">
              <p>For learners: practical training for career growth.</p>
              <p>For businesses: AI-powered strategy for visibility and lead generation.</p>
              <a
                href="#contact"
                className="inline-block mt-3 px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Contact NexAIra
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
