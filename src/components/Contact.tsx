import { Globe, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact NexAIra</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose your inquiry type so our team can guide you faster with the right support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 border border-yellow-500/40 rounded-2xl p-8">
            <p className="inline-block text-xs uppercase tracking-widest text-yellow-300 bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 rounded-full mb-4">
              Training Inquiry
            </p>
            <h3 className="text-2xl font-bold text-white mb-3">Interested in our training programs?</h3>
            <p className="text-gray-400 mb-6">
              Share your learning goals and course interest. Our training team will suggest the best program and batch.
            </p>

            <form className="space-y-4">
              <label className="block">
                <span className="block text-sm text-gray-300 mb-2">Name</span>
                <input
                  type="text"
                  name="trainingName"
                  required
                  className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </label>

              <label className="block">
                <span className="block text-sm text-gray-300 mb-2">Course Interested In</span>
                <input
                  type="text"
                  name="courseInterestedIn"
                  required
                  className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </label>

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-sm text-gray-300 mb-2">Phone</span>
                  <input
                    type="tel"
                    name="trainingPhone"
                    required
                    className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm text-gray-300 mb-2">Email</span>
                  <input
                    type="email"
                    name="trainingEmail"
                    required
                    className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </label>
              </div>

              <label className="block">
                <span className="block text-sm text-gray-300 mb-2">Message</span>
                <textarea
                  name="trainingMessage"
                  rows={4}
                  className="w-full rounded-lg bg-black border border-gray-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </label>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors font-semibold"
              >
                Submit Training Inquiry
              </button>
            </form>
          </div>

          <div className="bg-[#0b1524] border border-cyan-600/40 rounded-2xl p-8">
            <p className="inline-block text-xs uppercase tracking-widest text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full mb-4">
              Business Consultation
            </p>
            <h3 className="text-2xl font-bold text-white mb-3">Looking for AI Marketing Agency services?</h3>
            <p className="text-gray-400 mb-6">
              Tell us about your business and growth goals. We will recommend a suitable AI visibility strategy.
            </p>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-sm text-gray-300 mb-2">Name</span>
                  <input
                    type="text"
                    name="businessName"
                    required
                    className="w-full rounded-lg bg-[#07101a] border border-cyan-900/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm text-gray-300 mb-2">Company Name</span>
                  <input
                    type="text"
                    name="companyName"
                    required
                    className="w-full rounded-lg bg-[#07101a] border border-cyan-900/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-sm text-gray-300 mb-2">Website</span>
                  <input
                    type="url"
                    name="website"
                    placeholder="https://"
                    className="w-full rounded-lg bg-[#07101a] border border-cyan-900/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm text-gray-300 mb-2">Industry</span>
                  <input
                    type="text"
                    name="industry"
                    required
                    className="w-full rounded-lg bg-[#07101a] border border-cyan-900/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-sm text-gray-300 mb-2">Phone</span>
                  <input
                    type="tel"
                    name="businessPhone"
                    required
                    className="w-full rounded-lg bg-[#07101a] border border-cyan-900/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm text-gray-300 mb-2">Email</span>
                  <input
                    type="email"
                    name="businessEmail"
                    required
                    className="w-full rounded-lg bg-[#07101a] border border-cyan-900/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </label>
              </div>

              <label className="block">
                <span className="block text-sm text-gray-300 mb-2">Business Goal / Message</span>
                <textarea
                  name="businessGoal"
                  rows={4}
                  className="w-full rounded-lg bg-[#07101a] border border-cyan-900/40 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </label>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors font-semibold"
              >
                Submit Business Consultation
              </button>
            </form>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gray-900 border border-gray-700 p-6 rounded-2xl">
            <div className="flex items-center mb-3 text-yellow-400">
              <Phone size={20} className="mr-2" />
              <h4 className="text-white font-semibold">Phone Number</h4>
            </div>
            <a href="tel:+919063118119" className="block text-gray-400 hover:text-yellow-400 transition-colors">
              +91 9063118119
            </a>
            <a href="tel:08736254354" className="block text-gray-400 hover:text-yellow-400 transition-colors">
              08736 254354
            </a>
          </div>

          <div className="bg-gray-900 border border-gray-700 p-6 rounded-2xl">
            <div className="flex items-center mb-3 text-yellow-400">
              <Mail size={20} className="mr-2" />
              <h4 className="text-white font-semibold">Business Email</h4>
            </div>
            <a href="mailto:info@thenexaira.com" className="text-gray-400 hover:text-yellow-400 transition-colors break-all">
              info@thenexaira.com
            </a>
          </div>

          <div className="bg-gray-900 border border-gray-700 p-6 rounded-2xl">
            <div className="flex items-center mb-3 text-yellow-400">
              <MapPin size={20} className="mr-2" />
              <h4 className="text-white font-semibold">Location</h4>
            </div>
            <p className="text-gray-400 leading-relaxed">
              HNO 23-5/2, 2nd floor,
              <br />
              Chunnambattiwada,
              <br />
              Mancherial - 504208
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 p-6 rounded-2xl">
            <div className="flex items-center mb-3 text-yellow-400">
              <Globe size={20} className="mr-2" />
              <h4 className="text-white font-semibold">Social</h4>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/thenexaira/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/thenexaira/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@thenexaira" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}