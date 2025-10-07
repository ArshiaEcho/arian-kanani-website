import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MobileStickyCTA: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-shadow border-t border-bronze/20 p-3 md:hidden z-40 safe-area-inset-bottom"
    >
      <div className="flex space-x-3 max-w-sm mx-auto">
        <a
          href="https://www.skool.com/senseiacademy/about?ref=ef162307115940808d7f594a0c500054"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-yellow text-shadow text-center py-4 px-4 rounded-lg font-bold text-base hover:bg-yellow/90 transition-colors min-h-[48px] flex items-center justify-center"
        >
          <span className="text-sm">Become a Member</span>
        </a>
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            window.open('https://calendly.com/ariankananicoaching/discovery-call', '_blank');
          }}
          className="flex-1 bg-bronze text-cream text-center py-4 px-4 rounded-lg font-bold text-base hover:bg-bronze/90 transition-colors min-h-[48px] flex items-center justify-center cursor-pointer"
        >
          <span className="text-sm">Apply Now</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default MobileStickyCTA;