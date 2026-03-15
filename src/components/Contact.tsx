import { Phone, Mail, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'training' | 'business'>('training');

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you're looking to upskill or grow your business, we're here to help
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-gray-900 border border-gray-700 p-8 rounded-2xl text-center hover:border-yellow-400 transition-colors duration-300">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="text-black" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Phone</h3>
            <div className="space-y-2">
              <a href="tel:+919063118119" className="block text-gray-400 hover:text-yellow-400 transition-colors">
                +91 9063118119
              </a>
              <a href="tel:08736254354" className="block text-gray-400 hover:text-yellow-400 transition-colors">
                08736 254354
              </a>
              <a href="tel:08736254355" className="block text-gray-400 hover:text-yellow-400 transition-colors">
                08736 254355
              </a>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 p-8 rounded-2xl text-center hover:border-yellow-400 transition-colors duration-300">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="text-black" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Email</h3>
            <a
              href="mailto:info@thenexaira.com"
              className="text-gray-400 hover:text-yellow-400 transition-colors break-all"
            >
              info@thenexaira.com
            </a>
          </div>

          <div className="bg-gray-900 border border-gray-700 p-8 rounded-2xl text-center hover:border-yellow-400 transition-colors duration-300">
            <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-black" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Location</h3>
            <p className="text-gray-400 leading-relaxed">
              HNO 23-5/2, 2nd floor,<br />
              Chunnambattiwada,<br />
              Mancherial - 504208<br />
              Landmark: Beside Sonovision
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex border-b border-gray-700 mb-8">
            <button
              onClick={() => setActiveTab('training')}
              className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                activeTab === 'training'
                  ? 'text-yellow-400 border-b-2 border-yellow-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <GraduationCap className="inline-block mr-2" size={20} />
              Training Inquiry
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                activeTab === 'business'
                  ? 'text-yellow-400 border-b-2 border-yellow-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <Briefcase className="inline-block mr-2" size={20} />
              Business Consultation
            </button>
          </div>

          {activeTab === 'training' && (
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Interested in Our Training Programs?</h3>
              <p className="text-gray-400 mb-6">Fill out the form and we'll get back to you shortly</p>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Course Interested In</label>
                  <select className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none">
                    <option>Select a course</option>
                    <option>Artificial Intelligence</option>
                    <option>Generative AI</option>
                    <option>Machine Learning</option>
                    <option>Python Programming</option>
                    <option>DevOps</option>
                    <option>SAP</option>
                    <option>Embedded Systems</option>
                    <option>Data Science</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="Any questions or additional information..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors duration-200 font-bold"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          )}

          {activeTab === 'business' && (
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Looking for AI Marketing Agency Services?</h3>
              <p className="text-gray-400 mb-6">Let's discuss how we can help grow your business</p>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Website</label>
                    <input
                      type="url"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      placeholder="e.g., SaaS, Healthcare"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Business Goal / Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="Tell us about your business goals and what you're looking to achieve..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors duration-200 font-bold"
                >
                  Book Consultation
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
