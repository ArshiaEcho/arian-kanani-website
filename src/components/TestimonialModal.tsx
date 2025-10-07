import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Testimonial } from '../data/testimonials';

interface TestimonialModalProps {
  testimonial: Testimonial | null;
  isOpen: boolean;
  onClose: () => void;
}

const TestimonialModal: React.FC<TestimonialModalProps> = ({
  testimonial,
  isOpen,
  onClose
}) => {
  if (!testimonial) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-white rounded-2xl max-w-sm w-full max-h-[95vh] overflow-y-auto relative mx-4"
          style={{ aspectRatio: '9/16' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto relative mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center mb-4 sm:mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4 flex-shrink-0"
                />
                <div>
                  <h3 className="font-bebas text-xl sm:text-2xl md:text-3xl tracking-tighter uppercase text-bronze" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg">{testimonial.location}</p>
                </div>
              </div>

              <blockquote className="text-lg sm:text-xl md:text-2xl italic text-gray-700 mb-6 sm:mb-8 leading-relaxed text-center">
                "{testimonial.quote}"
              </blockquote>

              <div className="mb-4 sm:mb-6 text-center">
                <span className="inline-block bg-bronze/10 text-bronze px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm">
                  {testimonial.timeline} to results
                </span>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-bebas text-lg sm:text-xl tracking-tighter uppercase text-bronze mb-2 sm:mb-3" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                    The Challenge
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{testimonial.challenge}</p>
                </div>

                <div>
                  <h4 className="font-bebas text-lg sm:text-xl tracking-tighter uppercase text-bronze mb-2 sm:mb-3" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                    The Process
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{testimonial.process}</p>
                </div>

                <div>
                  <h4 className="font-bebas text-lg sm:text-xl tracking-tighter uppercase text-bronze mb-2 sm:mb-3" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                    The Result
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{testimonial.result}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TestimonialModal;