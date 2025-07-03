import { motion } from 'framer-motion';

const MotorsportsHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/redbull-drift-bg.jpg"
          alt="Red Bull Mazda RX-7 Drifting"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-motorsports-overlay/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 0.5
            }}
            className="font-bebas text-8xl md:text-9xl lg:text-[12rem] font-bold text-white leading-none tracking-wider"
          >
            UNLEASH
          </motion.h1>
          
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 0.8
            }}
            className="font-bebas text-4xl md:text-6xl lg:text-7xl font-bold text-motorsports-silver leading-none tracking-wider mt-4"
          >
            THE BEAST
          </motion.h2>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 1.2
            }}
            className="mt-8"
          >
            <div className="h-1 w-24 bg-motorsports-red mx-auto mb-6" />
            <p className="text-white text-xl md:text-2xl font-light tracking-widest">
              PRECISION • POWER • PERFORMANCE
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pulsing indicator at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-6 border-2 border-white rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default MotorsportsHero;