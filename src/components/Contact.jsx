import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-black overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 🔥 Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Start Your{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Project
            </span>
          </h2>

          <p className="text-gray-400 mb-8 max-w-md">
            Let’s build something amazing together. Fill out the form and we’ll
            get back to you within 24 hours.
          </p>

          {/* 🔥 Contact Info */}
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail size={18} /> stratvizsolution@gmail.com
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} /> +91 70158 01724
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} /> Noida Sector 62, Block - C, Rajiv Vihar, UP
            </div>
          </div>
        </motion.div>

        {/* 🔥 Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl"
        >
          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}