import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { subscribeToMailchimp } from '../utils/mailchimp';

const WarriorResetForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('WarriorResetForm submission started:', formData);
    
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
        console.log('WarriorResetForm UTM data:', utmData);
      } catch (e) {
        console.log('No UTM data found');
      }
      
      console.log('WarriorResetForm calling subscribeToMailchimp...');
      const result = await subscribeToMailchimp({
        email: formData.email,
        name: formData.name,
        source: 'homepage',
        type: 'warrior-reset',
        ...utmData,
      });

      console.log('WarriorResetForm Mailchimp result:', result);
      
      if (result.success) {
        setIsSubmitted(true);
        setSubmitMessage(result.message);
        // Keep form data for success state
      } else {
        setSubmitMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('WarriorResetForm submission error:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-shadow/20 backdrop-blur-md p-6 sm:p-8 rounded-lg border border-shadow/30"
      >
        <h3 className="text-xl sm:text-2xl font-bold mb-2 text-shadow">Success!</h3>
        <p className="mb-6 text-shadow">{submitMessage}</p>
        <a
          href="https://www.skool.com/senseiacademy/about?ref=ef162307115940808d7f594a0c500054"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-shadow text-cream px-6 py-3 rounded-lg font-bold hover:bg-shadow/90 transition-colors inline-flex items-center"
        >
          Become a Member
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full px-4 py-3 bg-shadow/20 border border-shadow/30 rounded-lg text-shadow placeholder-shadow/70 focus:outline-none focus:border-shadow text-base min-h-[48px]"
        required
      />
      <input
        type="email"
        placeholder="Your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full px-4 py-3 bg-shadow/20 border border-shadow/30 rounded-lg text-shadow placeholder-shadow/70 focus:outline-none focus:border-shadow text-base min-h-[48px]"
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-shadow text-cream px-4 py-3 rounded-lg font-bold hover:bg-shadow/90 transition-colors disabled:opacity-50 text-base min-h-[48px] inline-flex items-center justify-center"
      >
        {isSubmitting ? 'Sending...' : 'Get Free Routine'}
      </button>
      <p className="text-xs text-shadow/70 text-center">
        No spam, ever. Unsubscribe anytime.
      </p>
      {submitMessage && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-xs sm:text-sm text-shadow"
        >
          {submitMessage}
        </motion.p>
      )}
    </form>
  );
};

export default WarriorResetForm;