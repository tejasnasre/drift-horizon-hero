
import { motion } from 'framer-motion';
import Navigation from './Navigation';

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
          <source src="/bg.mp4" type="video/mp4" />
          {/* Fallback image in case video doesn't load */}
          <img
            src="/redbull-drift-bg.jpg"
            alt="Drift Background"
            className="h-full w-full object-cover"
          />
        </video>
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 0.8
            }}
            className="font-bebas text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white leading-none tracking-wider mb-6"
          >
            UNLEASH
            <br />
            <span className="text-motorsports-red">THE DRIFT</span>
          </motion.h1>
          
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 1.4
            }}
            className="font-rajdhani text-xl md:text-2xl lg:text-3xl font-light text-motorsports-silver leading-relaxed mb-8 tracking-wide"
          >
            Experience the ultimate fusion of precision, power, and pure adrenaline
          </motion.h2>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 1.8
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-motorsports-red hover:bg-red-600 text-white font-rajdhani font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              ENTER THE ZONE
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black text-white font-rajdhani font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105">
              WATCH HIGHLIGHTS
            </button>
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
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center text-white/70"
        >
          <span className="font-rajdhani text-sm mb-2 tracking-widest">SCROLL</span>
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
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block"
      >
        <div className="writing-mode-vertical text-white/60 font-orbitron text-sm tracking-[0.3em]">
          MOTORSPORTS • PRECISION • POWER
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block"
      >
        <div className="writing-mode-vertical text-white/60 font-orbitron text-sm tracking-[0.3em]">
          DRIFT • SPEED • ADRENALINE
        </div>
      </motion.div>
    </div>
  );
};

export default DriftHero;
