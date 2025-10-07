import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { subscribeToMailchimp } from '../utils/mailchimp';

const WarriorResetPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Popup form submission:', formData);
    
    if (!formData.email || !formData.name) {
      setSubmitMessage('Please fill in all fields.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      let utmData = {};
      try {
        utmData = JSON.parse(localStorage.getItem('utm_data') || '{}');
      } catch (e) {
        console.log('No UTM data found');
      }
      
      const result = await subscribeToMailchimp({
        email: formData.email,
        name: formData.name,
        source: 'popup',
        type: 'warrior-reset',
        ...utmData,
      });

      console.log('Popup result:', result);
      
      if (result.success) {
        setIsSubmitted(true);
        setSubmitMessage(result.message);
        // Keep form data for success state
      } else {
        setSubmitMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Popup submission error:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-gradient-to-br from-cream to-sandstone/30 rounded-2xl p-0 max-w-md w-full mx-4 relative overflow-hidden shadow-2xl border border-yellow/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/50 text-center"
          >
            <span className="leading-none">✕</span>
          </button>

          {/* Coming Soon Banner */}
          <div className="bg-yellow text-shadow px-6 py-3 text-center font-bold text-sm uppercase tracking-wider">
            Coming Soon
          </div>

          {!isSubmitted ? (
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <p className="text-bronze text-sm font-medium mb-2 uppercase tracking-wide">
                  Free Preview
                </p>
                <h3 className="font-bebas text-2xl sm:text-3xl tracking-tighter uppercase text-shadow mb-4 leading-tight" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                  Claim Your Free 90-Day Warrior Training Preview
                </h3>
                <p className="text-black text-base leading-relaxed">
                  Unleash your potential with our complete Kettlebell + Calisthenics transformation system. Get instant access to the exact routine that's forging modern warriors.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-shadow placeholder-gray-500 focus:outline-none focus:border-yellow focus:ring-2 focus:ring-yellow/20 text-base transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-shadow placeholder-gray-500 focus:outline-none focus:border-yellow focus:ring-2 focus:ring-yellow/20 text-base transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow text-shadow px-6 py-4 rounded-lg font-bold text-base hover:bg-yellow/90 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:transform-none shadow-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Preview'}
                </button>
              </form>

              {/* Footer */}
              <div className="mt-6">
                <p className="text-xs text-black text-center mb-4">
                  No spam, ever. Unsubscribe anytime.
                </p>

                <div className="flex items-center justify-center space-x-6 text-xs text-black font-medium">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow rounded-full mr-2"></div>
                    500+ Warriors Transformed
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow rounded-full mr-2"></div>
                    Exclusive Preview
                  </div>
                </div>
              </div>

              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-sm text-center text-black"
                >
                  {submitMessage}
                </motion.p>
              )}
            </div>
          ) : (
            <div className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-shadow" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bebas text-2xl tracking-tighter uppercase text-shadow mb-2" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                You're In!
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Get ready for an exclusive glimpse of the 90-day program. Check your email for instant access!
              </p>
              <button
                onClick={handleClose}
                className="bg-yellow text-shadow px-6 py-3 rounded-lg font-bold hover:bg-yellow/90 transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Continue
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WarriorResetPopup;