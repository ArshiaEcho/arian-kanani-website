import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoEmbed: string;
  title: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoEmbed,
  title
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Extract video ID from Vimeo URL
  const getVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  const vimeoId = getVimeoId(videoEmbed);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-2xl max-w-lg w-full mx-4 relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >

          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bebas text-xl tracking-tighter uppercase text-bronze" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                {title} Testimonial
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {vimeoId ? (
              <div className="relative w-full max-w-full mx-auto" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0&badge=0&autopause=0`}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={`${title} Video Testimonial`}
                />
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">Unable to load video</p>
                <a
                  href={videoEmbed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow text-shadow px-4 py-2 rounded-lg font-bold hover:bg-yellow/90 transition-colors"
                >
                  Watch on Vimeo
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;