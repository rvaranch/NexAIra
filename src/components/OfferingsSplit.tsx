import { ArrowRight, Briefcase, GraduationCap } from 'lucide-react';

export default function OfferingsSplit() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">What We Do</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the path that matches your goal. We support learners and business teams with dedicated outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 relative">
          <div className="absolute left-1/2 top-0 h-full w-px bg-gray-700/60 hidden lg:block" />

          <div className="bg-black border border-yellow-500/40 rounded-2xl p-8 hover:border-yellow-400 transition-colors duration-300">
            <p className="inline-block text-xs uppercase tracking-widest text-yellow-300 bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 rounded-full mb-5">
              For Learners
            </p>
            <div className="bg-yellow-400 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="text-black" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Build Your Career with Industry-Ready Training</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Job-oriented AI and technology learning paths with practical projects, mentorship, assessments, and
              career support.
            </p>
            <a
              href="#training-programs"
              className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors font-semibold"
            >
              Explore Training Programs
              <ArrowRight className="ml-2" size={16} />
            </a>
          </div>

          <div className="bg-[#0b1524] border border-cyan-600/40 rounded-2xl p-8 hover:border-cyan-400 transition-colors duration-300">
            <p className="inline-block text-xs uppercase tracking-widest text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full mb-5">
              For Businesses
            </p>
            <div className="bg-cyan-400 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Briefcase className="text-black" size={28} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Grow with AI Search & Conversation Marketing</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              AI Search and Conversation Marketing services that improve lead quality, automate follow-ups, and grow
              conversion-focused demand.
            </p>
            <a
              href="/ai-marketing-agency"
              className="inline-flex items-center justify-center px-6 py-3 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors font-semibold"
            >
              Explore Agency Services
              <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
