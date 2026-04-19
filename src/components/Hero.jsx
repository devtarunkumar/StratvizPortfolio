import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-black">

      {/* 🔥 Mouse Follow Glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-600 opacity-20 blur-[120px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 🔥 Floating Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 left-10 w-40 h-40 bg-pink-500 opacity-20 blur-[100px] rounded-full"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-20 right-10 w-60 h-60 bg-blue-500 opacity-20 blur-[120px] rounded-full"
      />

      <div className="max-w-5xl mx-auto">

        {/* 🔥 Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-6 px-4 py-1 text-sm rounded-full bg-white/10 backdrop-blur border border-white/20 text-gray-300"
        >
          🚀 50+ Projects Delivered
        </motion.div>

        {/* 🔥 Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white"
        >
          We Build{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            High-Converting
          </span>
          <br />
          Digital Experiences
        </motion.h1>

        {/* 🔥 Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg"
        >
          We craft premium websites with modern UI/UX, high performance, and
          conversion-focused strategy to grow your business online.
        </motion.p>

        {/* 🔥 Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg"
          >
            Get Started
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10"
          >
            View Projects
          </motion.a>

          {/* ✅ NEW WEBSITE BUTTON */}
          <motion.a
            href="https://www.stratvizsolution.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Visit Our Website
          </motion.a>

        </motion.div>

        {/* 🔥 Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center"
        >
          <div>
            <h3 className="text-2xl font-bold text-white">50+</h3>
            <p className="text-gray-400 text-sm">Projects</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">30+</h3>
            <p className="text-gray-400 text-sm">Clients</p>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-2xl font-bold text-white">3+</h3>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}