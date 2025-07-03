import { motion } from "framer-motion";
import Navigation from "./Navigation";

const DriftHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          {/* Fallback image in case video doesn't load */}
          <img
            src="/redbull-drift-bg.jpg"
            alt="Drift Background"
            className="h-full w-full object-cover"
          />
        </video>
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/30 to-motorsports-red/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated background elements */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute -top-20 -left-20 w-40 h-40 border border-motorsports-red/30 rounded-full"
          />
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="absolute -bottom-16 -right-16 w-32 h-32 border border-white/20 rounded-full"
          />

          <motion.h1
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 0.8,
            }}
            className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-none tracking-wider mb-4 relative"
          >
            <span className="relative inline-block">
              UNLEASH
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 2 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-motorsports-red to-transparent"
              />
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-motorsports-red via-red-500 to-orange-500 font-michroma tracking-widest">
              THE DRIFT
            </span>
          </motion.h1>

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 1.4,
            }}
            className="font-rajdhani text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-motorsports-silver leading-relaxed mb-12 tracking-wide max-w-4xl mx-auto"
          >
            Experience the ultimate fusion of precision, power, and pure
            adrenaline
            <br />
            <span className="font-jetbrains text-sm md:text-base text-white/60 mt-2 block">
              [ PRECISION • CONTROL • SPEED ]
            </span>
          </motion.h2>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 1.8,
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-motorsports-red to-red-600 hover:from-red-600 hover:to-motorsports-red text-white font-rajdhani font-bold py-5 px-10 text-lg transition-all duration-300 shadow-2xl overflow-hidden group"
            >
              <span className="relative z-10">ENTER THE ZONE</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative border-2 border-white/80 hover:border-motorsports-red hover:bg-motorsports-red/10 text-white font-rajdhani font-bold py-5 px-10 text-lg transition-all duration-300 backdrop-blur-sm group"
            >
              <span className="relative z-10 group-hover:text-motorsports-red transition-colors">
                WATCH HIGHLIGHTS
              </span>
            </motion.button>
          </motion.div>

          {/* Stats/Info Cards */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { label: "TOP SPEED", value: "320", unit: "KM/H" },
              { label: "DRIFT ANGLE", value: "85", unit: "°" },
              { label: "ADRENALINE", value: "∞", unit: "%" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.4 + index * 0.1, duration: 0.5 }}
                className="bg-black/40 backdrop-blur-sm border border-white/20 p-4 text-center"
              >
                <div className="font-orbitron text-xl md:text-2xl font-bold text-motorsports-red">
                  {stat.value}
                  <span className="text-sm text-white/60 ml-1">
                    {stat.unit}
                  </span>
                </div>
                <div className="font-sharetech text-xs md:text-sm text-white/80 tracking-widest mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center text-white/70"
        >
          <span className="font-rajdhani text-sm mb-2 tracking-widest">
            SCROLL
          </span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Side Elements */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-10 hidden md:block"
      >
        <div className="writing-mode-vertical text-white/60 font-sharetech text-xs lg:text-sm tracking-[0.3em] space-y-4">
          <div className="mb-8">MOTORSPORTS</div>
          <div className="mb-8">PRECISION</div>
          <div className="mb-8">POWER</div>
        </div>
        <div className="w-px h-20 bg-gradient-to-b from-motorsports-red to-transparent mt-4 mx-auto" />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-10 hidden md:block"
      >
        <div className="w-px h-20 bg-gradient-to-b from-white/40 to-transparent mb-4 mx-auto" />
        <div className="writing-mode-vertical text-white/60 font-sharetech text-xs lg:text-sm tracking-[0.3em] space-y-4">
          <div className="mb-8">DRIFT</div>
          <div className="mb-8">SPEED</div>
          <div className="mb-8">ADRENALINE</div>
        </div>
      </motion.div>

      {/* Corner Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute top-8 left-8 hidden lg:block"
      >
        <div className="w-16 h-16 border-l-2 border-t-2 border-white/30" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.7, duration: 1 }}
        className="absolute top-8 right-8 hidden lg:block"
      >
        <div className="w-16 h-16 border-r-2 border-t-2 border-motorsports-red/50" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.9, duration: 1 }}
        className="absolute bottom-8 left-8 hidden lg:block"
      >
        <div className="w-16 h-16 border-l-2 border-b-2 border-white/30" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.1, duration: 1 }}
        className="absolute bottom-8 right-8 hidden lg:block"
      >
        <div className="w-16 h-16 border-r-2 border-b-2 border-motorsports-red/50" />
      </motion.div>
    </div>
  );
};

export default DriftHero;
