import { motion } from "framer-motion";
import { Code, Palette, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "High-performance, scalable and lightning-fast websites built with modern technologies.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    desc: "Clean, modern and user-focused interfaces designed for better engagement.",
    icon: Palette,
  },
  {
    title: "SEO Optimization",
    desc: "Boost your visibility and rank higher on search engines with proven strategies.",
    icon: TrendingUp,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 px-6 bg-black text-center overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
      </div>

      {/* 🔥 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-16 text-white"
      >
        Our{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Services
        </span>
      </motion.h2>

      {/* 🔥 Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((s, i) => {
          const Icon = s.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
            >
              {/* Inner Card */}
              <div className="h-full bg-black/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">

                {/* 🔥 Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-xl bg-white/10 group-hover:bg-white/20 transition">
                    <Icon className="text-white w-6 h-6" />
                  </div>
                </div>

                {/* 🔥 Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {s.title}
                </h3>

                {/* 🔥 Desc */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {s.desc}
                </p>

                {/* 🔥 CTA */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition">
                  <button className="text-sm text-white underline">
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}