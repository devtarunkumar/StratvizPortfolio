import { motion } from "framer-motion";

export default function OfferSection() {
  return (
    <section
      id="offer"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600 opacity-20 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold">
            🖤 STRATVIZ SOLUTIONS
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Premium Digital Growth Proposal
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-12"
        >
          <h2 className="text-2xl font-semibold mb-2">
            📌 Client Proposal Overview
          </h2>
          <p className="text-gray-400">
            Stratviz Solutions ek performance-driven digital agency hai jo
            businesses ko grow karti hai through Meta Ads, Websites & Branding.
          </p>
          <p className="mt-2 text-purple-400 font-semibold">
            Results + Brand Value + Growth
          </p>
        </motion.div>

        {/* Services */}
        <h2 className="text-3xl font-bold mb-8 text-center">
          🚀 Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold mb-3">
              Meta Ads & Content
            </h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>Unlimited Photos & Videos</li>
              <li>Ad Setup & Management</li>
              <li>Video Editing</li>
              <li>Reels + Transitions</li>
            </ul>
            <p className="mt-4 text-green-400 font-bold">
              ₹5,000/month
            </p>
            <span className="text-xs text-gray-500">
              After 6 months: +10–20%
            </span>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-purple-500 rounded-2xl p-6 backdrop-blur-xl relative"
          >
            <span className="absolute top-3 right-3 text-xs bg-purple-500 px-2 py-1 rounded-full">
              Popular
            </span>

            <h3 className="text-xl font-semibold mb-3">
              Frontend Website
            </h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>Premium UI/UX</li>
              <li>SEO Optimization</li>
              <li>Fully Responsive</li>
            </ul>
            <p className="mt-4 text-yellow-400 font-bold">
              ₹2,000
            </p>
            <span className="text-xs text-gray-500">
              Hosting ~₹4,000/year
            </span>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold mb-3">
              Advanced Backend
            </h3>
            <ul className="text-gray-400 space-y-1 text-sm">
              <li>Fees System</li>
              <li>Attendance</li>
              <li>WhatsApp Integration</li>
              <li>Admin Dashboard</li>
            </ul>
            <p className="mt-4 text-green-400 font-bold">
              ₹12,000+
            </p>
          </motion.div>

        </div>

        {/* Tech */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
        >
          <h2 className="text-2xl font-semibold mb-2">
            ⚙️ Technology Stack
          </h2>
          <p className="text-gray-400">
            React.js | Next.js | Node.js
          </p>
        </motion.div>

        {/* Bonus */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="mt-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400 rounded-2xl p-6 text-center"
        >
          <h2 className="text-2xl font-semibold mb-2">
            🎁 Bonus
          </h2>
          <p>✔ 1 Month Free Maintenance</p>
          <p>✔ Dedicated Support</p>
        </motion.div>

        {/* Why */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            💼 Why Choose Us?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span className="bg-white/10 px-4 py-2 rounded-full">
              ROI Focused
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full">
              Premium Design
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full">
              Fast Delivery
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full">
              Long-Term Support
            </span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold">
            📞 Let’s Grow Your Business
          </h2>
          <p className="text-gray-400 mt-2">
            We build brands that convert & scale
          </p>

          <motion.a
            href="tel:+919217960799"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-medium shadow-lg"
          >
            Call Now
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}