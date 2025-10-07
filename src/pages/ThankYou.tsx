import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ThankYou: React.FC = () => {
  return (
    <>
      <SEO 
        title="Thank You - Call Booked Successfully"
        description="Thank you for booking your discovery call. Watch the video below for next steps."
      />

      {/* Full Screen Section */}
      <section className="min-h-screen bg-shadow text-white pt-24 sm:pt-28 md:pt-32 pb-8 flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase mb-6 leading-none">
              <span className="text-white">Thank You</span>
              <br />
              <span className="text-yellow">For Booking Your Call</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Watch the video below for next steps
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe 
                  src="https://player.vimeo.com/video/1122033244?badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                  title="CONGRATS_ARIAN"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;