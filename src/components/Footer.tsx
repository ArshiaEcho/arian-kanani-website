import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { subscribeToMailchimp } from '../utils/mailchimp';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Footer form submission:', { email, name });
    
    if (!email || !name) {
      setMessage('Please fill in all fields.');
      return;
    }
    
    setIsSubmitting(true);
    setMessage('');
    
    try {
      let utmData = {};
      try {
        utmData = JSON.parse(localStorage.getItem('utm_data') || '{}');
      } catch (e) {
        console.log('No UTM data found');
      }
      
      const result = await subscribeToMailchimp({
        email,
        name,
        source: 'footer',
        type: 'warrior-reset',
        ...utmData,
      });

      console.log('Footer result:', result);
      
      if (result.success) {
        setMessage(result.message);
        // Clear form on success
        setTimeout(() => { setEmail(''); setName(''); }, 2000);
      } else {
        setMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setMessage('Something went wrong. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-shadow text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
              <img 
                src="https://i.imgur.com/R8nphs9.png" 
                alt="Arian Kanani Logo" 
                className="h-6 sm:h-7 w-auto"
              />
              <h3 className="font-bebas text-2xl sm:text-3xl text-yellow tracking-tighter uppercase" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                Arian Kanani
              </h3>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              This is the training ground for modern warriors. Strength. Stillness. Precision. 
              At Sensei Academy, you don't just train—you evolve.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6 sm:mb-8">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow transition-colors p-2 -ml-2"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow transition-colors p-2"
                aria-label="YouTube"
              >
                YouTube
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow transition-colors p-2"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bebas text-lg sm:text-xl tracking-tighter uppercase text-yellow mb-3 sm:mb-4" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {[
                { name: 'About', path: '/about' },
                { name: 'Programs', path: '/programs' },
                { name: 'Stories', path: '/stories' },
                { name: 'Contact', path: '/contact' },
                { name: 'Apply', path: '/apply' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-yellow transition-colors text-sm sm:text-base py-1 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h4 className="font-bebas text-lg sm:text-xl tracking-tighter uppercase text-yellow mb-3 sm:mb-4" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
              Claim Your Free 90-Day Warrior Training Preview
            </h4>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Unleash your potential with our complete Kettlebell + Calisthenics transformation system. Get instant access to the exact routine that's forging modern warriors.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3 sm:space-y-4 max-w-md">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-bronze/20 border border-bronze/40 rounded-lg text-cream placeholder-gray-400 focus:outline-none focus:border-yellow text-sm sm:text-base min-h-[48px]"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-3 bg-bronze/20 border border-bronze/40 rounded-lg text-cream placeholder-gray-400 focus:outline-none focus:border-yellow text-sm sm:text-base min-h-[48px]"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow text-shadow px-4 py-3 rounded-lg font-bold hover:bg-yellow/90 transition-colors disabled:opacity-50 text-sm sm:text-base min-h-[48px] inline-flex items-center justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Get Free Preview'}
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-3">
              No spam, ever. Unsubscribe anytime.
            </p>
            {message && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-xs sm:text-sm text-gray-400"
              >
                {message}
              </motion.p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bronze/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} Arian Kanani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;