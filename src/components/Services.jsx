import { motion } from "framer-motion";
import { Code, Palette, TrendingUp, Megaphone, Video, Camera } from "lucide-react";
import { useState } from "react";

export default function Services() {

  // ✅ FIX: hook component ke andar
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Web Development",
      desc: "High-performance, scalable and lightning-fast websites built with modern technologies.",
      icon: Code,
      cost: "₹10,000 - ₹50,000",
      details: "Custom websites built using React, modern frameworks and optimized performance.",
      use: "Business website, portfolio, e-commerce platforms.",
      image: "/web.png",
    },
    {
      title: "UI/UX Design",
      desc: "Clean, modern and user-focused interfaces designed for better engagement.",
      icon: Palette,
      cost: "₹5,000 - ₹20,000",
      details: "User-centered design with wireframes, prototypes and modern UI systems.",
      use: "Apps, websites, dashboards.",
      image: "/uiux.png",
    },
    {
      title: "SEO Optimization",
      desc: "Boost your visibility and rank higher on search engines with proven strategies.",
      icon: TrendingUp,
      cost: "₹3,000 - ₹15,000 / month",
      details: "On-page, off-page SEO and keyword optimization strategies.",
      use: "Increase traffic, Google ranking, organic growth.",
      image: "/seo.png",
    },
    {
      title: "Facebook Ads",
      desc: "Run high-converting Facebook ad campaigns to generate leads and grow your business.",
      icon: Megaphone,
      cost: "₹5,000+ / month",
      details: "Targeted campaigns, audience research and conversion optimization.",
      use: "Lead generation, sales, brand awareness.",
      image: "/faceb.png",
    },
    {
      title: "Instagram Ads",
      desc: "Target the right audience and boost engagement with powerful Instagram ad strategies.",
      icon: Camera,
      cost: "₹5,000+ / month",
      details: "Creative ad campaigns with reels, stories and engagement strategies.",
      use: "Followers growth, engagement, product promotion.",
      image: "/Insta.png",
    },
    {
      title: "Video Editing",
      desc: "Professional video editing services to create engaging and high-quality content.",
      icon: Video,
      cost: "₹500 - ₹5,000 / video",
      details: "High-quality edits with transitions, effects and storytelling.",
      use: "Reels, YouTube videos, ads, promotions.",
      image: "/video.png",
    },
  ];

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
              <div className="h-full bg-black/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-xl bg-white/10 group-hover:bg-white/20 transition">
                    <Icon className="text-white w-6 h-6" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {s.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {s.desc}
                </p>

                {/* CTA */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={() => setSelectedService(s)}
                    className="text-sm text-white underline"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 🔥 MODAL */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">

          <div className="bg-black border border-white/10 rounded-2xl max-w-md w-full overflow-hidden relative">

            {/* Close */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-4 text-white text-xl z-10"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-52 object-contain bg-black p-2"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-3">
                {selectedService.title}
              </h2>

              <p className="text-purple-400 mb-2">
                💰 {selectedService.cost}
              </p>

              <p className="text-gray-300 mb-3">
                {selectedService.details}
              </p>

              <p className="text-gray-400 text-sm">
                📌 {selectedService.use}
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}