import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your learning journey? Contact us today to learn more about our programs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              Opp: i planet Mancherial
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-yellow-400 p-8 rounded-2xl shadow-xl text-black">
            <p className="text-2xl font-bold mb-2">Ready to Transform Your Career?</p>
            <p className="text-lg mb-6">Join hundreds of successful professionals who trained with us</p>
            <a
              href="tel:+919063118119"
              className="inline-block px-8 py-4 bg-black text-yellow-400 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-bold border border-yellow-400"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
