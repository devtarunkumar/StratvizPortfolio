import { motion } from "framer-motion";
import pharmEasyImg from "../assets/P4.jpg";
import webmdImg from "../assets/P5.webp";
import elevareImg from "../assets/P6.jfif";
import glossierImg from "../assets/P7.avif";
import nixonImg from "../assets/P8.webp";
import fineryImg from "../assets/P9.webp";
import crateImg from "../assets/P10.webp";
import mannImg from "../assets/P11.jpg";
import chetanImg from "../assets/P12.png";

/* ✅ NEW IMAGES ADD KARO (apne assets me daal dena) */
import brunelloImg from "../assets/brunelloImg.webp";
import grownestImg from "../assets/grownestImg.png";

const projects = [
  {
    title: "PharmEasy",
    tech: "Healthcare, E-commerce",
    img: pharmEasyImg,
    live: "https://pharmeasy.in/",
  },
  {
    title: "WebMD",
    tech: "Medical Platform",
    img: webmdImg,
    live: "https://www.webmd.com/",
  },
  {
    title: "Elevare Market",
    tech: "Luxury Marketplace",
    img: elevareImg,
    live: "https://elevaremarket.com/en-qa",
  },
  {
    title: "Glossier",
    tech: "Beauty Brand",
    img: glossierImg,
    live: "https://www.glossier.com/en-in",
  },
  {
    title: "Nixon",
    tech: "Fashion Accessories",
    img: nixonImg,
    live: "https://www.nixon.com/",
  },
  {
    title: "Finery London",
    tech: "Fashion Store",
    img: fineryImg,
    live: "https://www.finerylondon.com/",
  },
  {
    title: "Crate & Barrel",
    tech: "Home Decor",
    img: crateImg,
    live: "https://www.crateandbarrel.com/",
  },
  {
    title: "Mann Tours",
    tech: "Travel Agency",
    img: mannImg,
    live: "https://www.manntours.com/",
  },
  {
    title: "Chetan Travels",
    tech: "Travel Services",
    img: chetanImg,
    live: "https://www.chetantravels.com/",
  },

  /* ✅ NEW CARD 1 */
  {
    title: "Brunello Cucinelli",
    tech: "Luxury Fashion",
    img: brunelloImg,
    live: "https://shop.brunellocucinelli.com/en-gb/ai",
  },

  /* ✅ NEW CARD 2 */
  {
    title: "Grownest Realty",
    tech: "Real Estate",
    img: grownestImg,
    live: "https://grownestrealty.com/",
  },
];

export default function Portfolio() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-16 text-center text-white"
      >
        Our{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {p.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">{p.tech}</p>

                <span className="px-5 py-2 text-sm bg-white text-black rounded-full">
                  Visit Website
                </span>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-transparent"></div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}