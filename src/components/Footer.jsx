import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub
} from "react-icons/fa";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker
} from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 pt-20 pb-10 px-6 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-20 w-80 h-80 bg-purple-500 opacity-20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-blue-500 opacity-20 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* 🔥 Brand */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-2xl font-bold mb-4">
            DigitakMark
          </h2>

          <p className="text-sm leading-relaxed">
            We craft high-converting websites & digital experiences that drive
            real business growth.
          </p>

          {/* 🔥 Social Icons (INSANE HOVER) */}
          <div className="flex gap-4 mt-6">
            {[FaInstagram, FaLinkedin, FaTwitter, FaGithub].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                target="_blank"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-gradient-to-r from-purple-500 to-pink-500 transition"
              >
                <Icon className="text-white" size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 🔥 Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-white mb-4 font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["services", "projects", "about", "contact"].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item}`}
                  className="hover:text-white transition hover:pl-1"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 🔥 Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-white mb-4 font-semibold">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>SEO Optimization</li>
            <li>Brand Strategy</li>
          </ul>
        </motion.div>

        {/* 🔥 Contact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-white mb-4 font-semibold">Contact</h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <HiOutlineMail size={18} /> info@digitakmark.com
            </li>
            <li className="flex items-center gap-2">
              <HiOutlinePhone size={18} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineLocationMarker size={18} /> India
            </li>
          </ul>
        </motion.div>
      </div>

      {/* 🔥 Divider */}
      <div className="mt-16 border-t border-white/10"></div>

      {/* 🔥 Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-sm mt-6"
      >
        © 2026 DigitakMark — Crafted with ❤️ by You
      </motion.div>
    </footer>
  );
}