import { motion } from "framer-motion";

const Navigation = () => {
  const navItems = ["Home", "About", "Sponsors", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.2,
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-michroma font-black text-xl md:text-2xl text-white tracking-widest"
          >
            DRIFT
            <span className="text-motorsports-red">.</span>ZONE
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.5,
                }}
                className="font-rajdhani font-medium text-base md:text-lg text-white/90 hover:text-motorsports-red transition-all duration-300 relative group px-2 py-1"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-motorsports-red to-transparent transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></span>
              </motion.a>
            ))}

            {/* Additional Tech Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="font-jetbrains text-xs text-white/50 tracking-wider ml-4 hidden lg:block"
            >
              [ LIVE ]
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
