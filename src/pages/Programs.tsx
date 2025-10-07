import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ParallaxHero from '../components/ParallaxHero';
import WarriorResetForm from '../components/WarriorResetForm';
import { subscribeToMailchimp } from '../utils/mailchimp';

const Programs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    program: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.name || !formData.message) {
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
        source: 'programs',
        type: 'inquiry',
        ...utmData,
      });

      if (result.success) {
        setSubmitMessage('Thank you! We\'ll be in touch within 24 hours.');
        setFormData({ name: '', email: '', message: '', program: '' });
      } else {
        setSubmitMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Programs form submission error:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    }
    
    
    setIsSubmitting(false);
  };

  const communityFeatures = [
    'Daily programming & workouts',
    'Mindset & discipline training',
    'Community support & accountability',
    'Live Q&A sessions',
    'Movement library access',
  ];

  const coachingFeatures = [
    '1-on-1 personalized programming',
    'Direct access to Arian',
    'Weekly check-ins & adjustments',
    'Mindset & life coaching',
    'Priority support',
    'Custom nutrition planning'
  ];

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ariankanani.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Programs',
        item: 'https://ariankanani.com/programs'
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Programs - Sensei Academy Community & Private Coaching"
        description="Join the Sensei Academy community or apply for exclusive 1-on-1 coaching with Arian Kanani. Transform your fitness, mindset, and discipline."
        jsonLd={breadcrumbJsonLd}
      />

      {/* Hero Section */}
      <div className="relative h-48 sm:h-48 md:h-64 bg-gradient-to-br from-shadow via-bronze to-yellow overflow-hidden pt-16 sm:pt-0">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-bebas text-3xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase leading-none text-center mt-2 md:mt-8"
              style={{ display: 'block', visibility: 'visible', opacity: 1 }}
            >
              <h1 className="font-bebas text-3xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter uppercase leading-none text-center mt-2 md:mt-8">
                Programs
              </h1>
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none"
              style={{ display: 'block', visibility: 'visible', opacity: 1 }}
            >
              <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none">
                Choose Your Path
              </h2>
            </motion.h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Whether you're ready to join a community of warriors or need personalized elite coaching, we have the program for your transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Community Program */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div>
                  <h3 className="font-bebas text-2xl sm:text-3xl tracking-tighter uppercase text-bronze" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                    The Academy
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">Community Program</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Join a brotherhood of modern warriors. Daily programming, mindset training, 
                and the accountability you need to evolve.
              </p>

              <div className="mb-6 sm:mb-8">
                <h4 className="font-bebas text-lg sm:text-xl tracking-tighter uppercase text-bronze mb-3 sm:mb-4" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                  What's Included:
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {communityFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-4 sm:pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-shadow">$100 USD/month</div>
                  </div>
                </div>
                <a
                  href="https://www.skool.com/senseiacademy/about?ref=ef162307115940808d7f594a0c500054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-yellow text-shadow px-6 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow/90 transition-colors inline-flex items-center justify-center min-h-[48px]"
                >
                  Become a Member
                </a>
              </div>
            </motion.div>

            {/* Private Coaching */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow/10 to-cream border-2 border-yellow/30 text-shadow p-6 sm:p-8 rounded-xl shadow-xl relative overflow-hidden"
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow/5 to-transparent opacity-50" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div>
                    <h3 className="font-bebas text-2xl sm:text-3xl tracking-tighter uppercase text-yellow" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                      Private Coaching
                    </h3>
                    <p className="text-shadow/60 text-sm sm:text-base">Elite Mentorship</p>
                  </div>
                </div>
                
                <p className="text-shadow/80 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                  Elite-level mentorship for high-performers. Personalized programming, 
                  mindset work, and direct access to Arian.
                </p>

                <div className="mb-6 sm:mb-8">
                  <h4 className="font-bebas text-lg sm:text-xl tracking-tighter uppercase text-yellow mb-3 sm:mb-4" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                    What's Included:
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {coachingFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-shadow/80 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-yellow/20 pt-4 sm:pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold text-yellow">Custom pricing</div>
                    </div>
                  </div>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('https://calendly.com/ariankananicoaching/discovery-call', '_blank');
                    }}
                    className="w-full bg-yellow text-shadow px-6 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow/90 transition-colors inline-flex items-center justify-center min-h-[48px] cursor-pointer"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none"
              style={{ display: 'block', visibility: 'visible', opacity: 1 }}
            >
              <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none">
                Claim Your Free 90-Day Warrior Training Preview
              </h2>
            </motion.h2>

            
            <div className="max-w-md mx-auto">
              <WarriorResetForm />
            </div>
            



            <div className="flex items-center justify-center space-x-8 mt-8 text-shadow">
              <div className="flex items-center text-sm sm:text-base">
                500+ Warriors Transformed
              </div>
              <div className="flex items-center text-sm sm:text-base">
                Exclusive Preview
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Programs;