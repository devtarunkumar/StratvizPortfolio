import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" }, // ✅ FIXED
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [hidden, setHidden] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // ✅ Hide on scroll down
  useEffect(() => {
    let lastY = 0;
    return scrollY.onChange((y) => {
      if (y > lastY && y > 80) setHidden(true);
      else setHidden(false);
      lastY = y;
    });
  }, [scrollY]);

  // ✅ Active section highlight (FIXED)
  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            current = link.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔥 Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 origin-left z-[60]"
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.4 }}
        className="fixed w-full top-0 left-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
          
          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            DigitakMark
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-sm">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative transition ${
                  active === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}

                {/* Active underline */}
                {active === link.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"
                  />
                )}
              </a>
            ))}

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden text-white">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* 🔥 Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full h-screen bg-black z-40 flex flex-col justify-center items-center gap-10 text-2xl"
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-400 transition"
          >
            {link.name}
          </a>
        ))}

        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg"
        >
          Get Started
        </a>
      </motion.div>
    </>
  );
}