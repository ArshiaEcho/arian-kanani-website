import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxHeroProps {
  backgroundImage: string;
  mobileBackgroundImage?: string;
  children: React.ReactNode;
  height?: string;
  overlay?: string;
}

const ParallaxHero: React.FC<ParallaxHeroProps> = ({
  backgroundImage,
  mobileBackgroundImage,
  children,
  height = 'h-screen',
  overlay = 'bg-black/60'
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%]"
      >
        {/* Mobile image */}
        {mobileBackgroundImage && (
          <img
            src={mobileBackgroundImage}
            alt=""
            className="w-full h-full object-cover object-center md:hidden"
            loading="lazy"
          />
        )}
        {/* Desktop image */}
        <img
          src={backgroundImage}
          alt=""
          className={`w-full h-full object-cover object-center ${mobileBackgroundImage ? 'hidden md:block' : ''}`}
          loading="lazy"
        />
      </motion.div>
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default ParallaxHero;