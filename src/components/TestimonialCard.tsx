import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Testimonial } from '../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'homepage' | 'stories' | 'contact';
  onClick?: () => void;
  onVideoClick?: () => void;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  variant = 'homepage',
  onClick,
  onVideoClick,
  className = ''
}) => {
  const baseClasses = "bg-white rounded-lg shadow-lg overflow-hidden";
  
  if (variant === 'homepage') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`${baseClasses} p-4 sm:p-6 md:p-8 text-center cursor-pointer hover:shadow-xl transition-shadow flex flex-col min-h-[480px] ${className}`}
        onClick={onClick}
      >
        <div className="mb-4 sm:mb-6 relative flex-shrink-0">
          <div 
            className="relative inline-block cursor-pointer" 
            onClick={testimonial.videoEmbed && onVideoClick ? (e) => {
              e.stopPropagation();
              onVideoClick();
            } : undefined}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 sm:mb-4 object-cover ${
                testimonial.videoEmbed && onVideoClick ? 'hover:opacity-80 transition-opacity' : ''
              }`}
            />
            {testimonial.videoEmbed && onVideoClick && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onVideoClick();
                }}
                className="absolute -bottom-1 -right-1 bg-yellow text-shadow rounded-full p-2 hover:bg-yellow/90 transition-colors shadow-lg z-10"
                aria-label="Watch video testimonial"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
              </button>
            )}
          </div>
          <h3 className="font-bebas text-xl sm:text-xl tracking-tighter uppercase text-bronze mb-1" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
            {testimonial.name}
          </h3>
          <p className="text-gray-600 text-sm sm:text-sm">{testimonial.location}</p>
        </div>
        
        <blockquote className="text-sm sm:text-base md:text-base italic text-gray-700 mb-3 sm:mb-4 leading-relaxed flex-grow">
          "{testimonial.quote}"
        </blockquote>
        
        <div className="text-xs sm:text-sm text-bronze font-medium mb-4 flex-shrink-0 leading-relaxed min-h-[60px] flex items-start">
          <span>{testimonial.result}</span>
        </div>
        
        {/* Watch Video Button - Always at bottom if video exists */}
        {testimonial.videoEmbed && onVideoClick && (
          <div className="mt-auto pt-4 flex-shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onVideoClick();
              }}
              className="w-full bg-yellow text-shadow px-4 py-3 rounded-lg font-bold text-base hover:bg-yellow/90 transition-colors inline-flex items-center justify-center min-h-[44px] active:scale-95"
            >
              <Play className="w-4 h-4 mr-2 fill-current" />
              Watch Video
            </button>
          </div>
        )}
      </motion.div>
    );
  }

  if (variant === 'contact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`${baseClasses} p-3 sm:p-4 cursor-pointer hover:shadow-xl transition-shadow flex flex-col h-[280px] ${className}`}
        onClick={onClick}
      >
        <div className="flex items-start space-x-2 sm:space-x-3">
          <div 
            className="relative flex-shrink-0 cursor-pointer" 
            onClick={testimonial.videoEmbed && onVideoClick ? (e) => {
              e.stopPropagation();
              onVideoClick();
            } : undefined}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className={`w-12 h-12 sm:w-12 sm:h-12 rounded-full object-cover ${
                testimonial.videoEmbed && onVideoClick ? 'hover:opacity-80 transition-opacity' : ''
              }`}
            />
            {testimonial.videoEmbed && onVideoClick && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onVideoClick();
                }}
                className="absolute -bottom-0.5 -right-0.5 bg-yellow text-shadow rounded-full p-1.5 hover:bg-yellow/90 transition-colors shadow-lg"
                aria-label="Watch video testimonial"
              >
                <Play className="w-3 h-3 fill-current" />
              </button>
            )}
          </div>
          <div className="flex-1 min-w-0 flex flex-col">
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <h4 className="font-bebas text-base sm:text-base md:text-lg tracking-tighter uppercase text-bronze truncate" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                {testimonial.name}
              </h4>
              <span className="text-sm bg-bronze/10 text-bronze px-2 py-1 sm:px-2 sm:py-1 rounded-full whitespace-nowrap ml-2">
                {testimonial.timeline}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-1 sm:mb-2">{testimonial.location}</p>
            <blockquote className="text-sm sm:text-sm italic text-gray-700 mb-1 sm:mb-2 leading-relaxed flex-grow overflow-hidden line-clamp-3">
              "{testimonial.quote}"
            </blockquote>
            <div className="text-sm text-bronze font-medium mb-1 flex-shrink-0">
              RESULT
            </div>
            <div className="text-sm text-gray-600 leading-relaxed flex-shrink-0 line-clamp-2">
              {testimonial.result}
            </div>
          </div>
        </div>
        
        {/* Watch Video Button - Always at bottom if video exists */}
        {testimonial.videoEmbed && onVideoClick && (
          <div className="mt-auto pt-3 border-t border-gray-100 flex-shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onVideoClick();
              }}
              className="w-full bg-yellow text-shadow px-3 py-3 rounded-lg font-bold text-base hover:bg-yellow/90 transition-colors inline-flex items-center justify-center min-h-[44px] active:scale-95"
            >
              <Play className="w-4 h-4 mr-2 fill-current" />
              Watch Video
            </button>
          </div>
        )}
      </motion.div>
    );
  }

  // Stories variant (detailed)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${baseClasses} overflow-hidden ${className}`}
    >
      <div className="md:flex">
        <div 
          className="md:w-1/3 relative cursor-pointer" 
          onClick={testimonial.videoEmbed && onVideoClick ? (e) => {
            e.stopPropagation();
            onVideoClick();
          } : undefined}
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className={`w-full h-48 sm:h-64 md:h-full object-cover ${
              testimonial.videoEmbed && onVideoClick ? 'hover:opacity-80 transition-opacity' : ''
            }`}
          />
          {testimonial.videoEmbed && onVideoClick && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onVideoClick();
              }}
              className="absolute bottom-4 right-4 bg-yellow text-shadow rounded-full p-3 hover:bg-yellow/90 transition-colors shadow-lg group"
              aria-label="Watch video testimonial"
            >
              <Play className="w-5 h-5 fill-current" />
            </button>
          )}
          {testimonial.videoEmbed && onVideoClick && (
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
              Click to watch video
            </div>
          )}
        </div>
        
        <div className="md:w-2/3 p-4 sm:p-6 md:p-8">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-bronze text-cream rounded-full flex items-center justify-center font-bold text-lg sm:text-xl mr-3 sm:mr-4 flex-shrink-0">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bebas text-lg sm:text-xl md:text-2xl tracking-tighter uppercase text-bronze" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                {testimonial.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{testimonial.location}</p>
            </div>
          </div>

          <blockquote className="text-base sm:text-lg md:text-xl italic text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            "{testimonial.quote}"
          </blockquote>

          <div className="mb-4 sm:mb-6">
            <span className="inline-block bg-bronze/10 text-bronze px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm mb-2">
              {testimonial.timeline} to results
            </span>
          </div>

          <div className="mb-4 sm:mb-6">
            <h4 className="font-bebas text-base sm:text-lg tracking-tighter uppercase text-bronze mb-2" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
              KEY RESULT
            </h4>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {testimonial.result}
            </p>
          </div>

          {testimonial.videoEmbed && onVideoClick && (
            <div className="mb-4 sm:mb-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onVideoClick();
                }}
                className="inline-flex items-center bg-yellow text-shadow px-4 py-2 rounded-lg font-bold hover:bg-yellow/90 transition-colors text-sm"
              >
                <Play className="w-4 h-4 mr-2 fill-current" />
                Watch Full Video Testimonial
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;