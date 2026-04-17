import { motion } from "framer-motion";
import aboutImg from "../assets/AboutUs.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-black overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 🔥 Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Us
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            We are a results-driven digital agency focused on building
            high-performance websites that not only look stunning but also
            convert visitors into loyal customers.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Our team combines modern UI/UX design, cutting-edge development,
            and data-driven strategies to help businesses grow faster in the
            digital world.
          </p>

          {/* 🔥 Stats */}
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">50+</h3>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">30+</h3>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">3+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">100%</h3>
              <p className="text-gray-400 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>

        {/* 🔥 Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img
              src={aboutImg}
              alt="About our agency"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* 🔥 Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-xl">
            <p className="text-white text-sm">🚀 Trusted by startups & brands</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}