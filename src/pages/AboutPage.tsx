import { GraduationCap, TrendingUp, Users, Target, Award, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              About <span className="text-yellow-400">NexAIra</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              An AI-focused organization empowering the next generation through education and business growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-700 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                NexAIra Tech Services LLP is built on a foundation of AI expertise and a commitment to
                shaping the future through technology. We recognized that the AI revolution requires both
                skilled professionals and businesses ready to adapt.
              </p>
              <p>
                That's why we operate across two complementary verticals: empowering individuals with
                industry-ready training and helping businesses leverage AI-powered marketing strategies
                to grow in the modern digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              To bridge the gap between AI innovation and practical application by training professionals
              and transforming how businesses connect with customers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Two Pillars, One Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 border-2 border-yellow-400 rounded-2xl p-8">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="text-black" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Training & Skill Development</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We train students and professionals in AI, Machine Learning, DevOps, Data Science,
                and emerging technologies with hands-on, scenario-based learning.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• 10+ years of industry experience</li>
                <li>• One-to-one mentorship</li>
                <li>• Live projects and internships</li>
                <li>• Career support and mock interviews</li>
              </ul>
            </div>

            <div className="bg-gray-900 border-2 border-yellow-400 rounded-2xl p-8">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="text-black" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">AI Marketing & Business Growth</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We help businesses navigate AI-driven customer discovery through strategic visibility,
                conversational marketing, and data-informed campaigns.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• AI Search & Conversation Marketing</li>
                <li>• Strategic positioning and messaging</li>
                <li>• High-intent customer research</li>
                <li>• Campaign strategy and execution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-black border border-gray-700 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Both Services Belong Together</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                At NexAIra, our dual focus isn't accidental—it's strategic. Our deep expertise in AI
                technologies informs both how we teach and how we help businesses grow.
              </p>
              <p>
                Training the next generation of tech professionals keeps us grounded in practical skill
                development, while working with businesses on AI marketing strategies keeps us at the
                cutting edge of how AI is reshaping customer behavior.
              </p>
              <p className="text-yellow-400 font-semibold">
                This combination makes us uniquely positioned to deliver value across both education and
                business transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: 'Practical Focus', desc: 'Real-world applications over theoretical knowledge' },
              { icon: Users, title: 'People-First', desc: 'Personalized attention whether training or consulting' },
              { icon: Lightbulb, title: 'Innovation', desc: 'Staying ahead of AI trends and technologies' },
              { icon: Award, title: 'Excellence', desc: 'High standards in everything we deliver' },
              { icon: GraduationCap, title: 'Education', desc: 'Teaching and sharing knowledge is our core' },
              { icon: TrendingUp, title: 'Growth', desc: 'Committed to your success and continuous improvement' },
            ].map((value, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 p-6 rounded-xl text-center hover:border-yellow-400 transition-all">
                <div className="bg-yellow-400 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-black" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Leadership & Experience</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              NexAIra is led by technology professionals with over 10 years of industry experience across
              AI, software development, and enterprise solutions. Our instructors and consultants bring
              real-world expertise from working on live projects, scaling businesses, and staying current
              with emerging technologies.
            </p>
            <p className="text-lg text-gray-400">
              We believe in practical, scenario-based learning and strategic thinking grounded in data
              and real customer behavior.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              Ready to Work with NexAIra?
            </h2>
            <p className="text-xl text-black mb-8">
              Whether you're looking to upskill or grow your business, we're here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="px-8 py-4 bg-black text-yellow-400 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-bold"
              >
                Get in Touch
              </a>
              <a
                href="tel:+919063118119"
                className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors duration-200 font-bold"
              >
                Call +91 9063118119
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
