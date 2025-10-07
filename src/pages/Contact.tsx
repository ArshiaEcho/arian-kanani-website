import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ParallaxHero from '../components/ParallaxHero';
import TestimonialCard from '../components/TestimonialCard';
import TestimonialModal from '../components/TestimonialModal';
import VideoModal from '../components/VideoModal';
import { testimonials } from '../data/testimonials';
import { subscribeToMailchimp } from '../utils/mailchimp';

const Contact: React.FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ embed: string; title: string } | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.name || !formData.subject || !formData.message) {
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
        source: 'contact',
        type: 'contact',
        ...utmData,
      });

      if (result.success) {
        setSubmitMessage('Thank you! We\'ll be in touch within 24 hours.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    }
    
    
    setIsSubmitting(false);
  };

  const handleTestimonialClick = (testimonial: any) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  const handleVideoClick = (testimonial: any) => {
    if (testimonial.videoEmbed) {
      setSelectedVideo({
        embed: testimonial.videoEmbed,
        title: testimonial.name
      });
      setIsVideoModalOpen(true);
    }
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
  };

  // Use all 5 testimonials for contact page
  const contactTestimonials = testimonials;

  const quickActions = [
    {
      title: 'Become a Member',
      description: 'Join the community of modern warriors',
      action: 'Join Now',
      link: 'SKOOL_LINK_HERE',
      external: true
    },
    {
      title: 'Book Consultation',
      description: 'Schedule a call to discuss 1-on-1 coaching',
      action: 'Book Call',
      link: 'CALENDLY_LINK_HERE',
      external: true
    }
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
        name: 'Contact',
        item: 'https://ariankanani.com/contact'
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Contact Arian Kanani - Get in Touch"
        description="Contact Arian Kanani for questions about Sensei Academy, private coaching, or general inquiries. Join the community or book a consultation."
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
                Contact
              </h1>
            </motion.h1>
          </div>
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto mt-4 px-2">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl leading-relaxed font-normal"
            style={{ display: 'block', visibility: 'visible', opacity: 1 }}
          >
            <h2 className="text-base sm:text-lg md:text-xl leading-relaxed font-normal">
              Ready to begin your transformation? Get in touch and start your warrior journey today.
            </h2>
          </motion.h2>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="py-12 sm:py-16 lg:py-20 bg-sandstone/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none">
              Get Started Today
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose your path to transformation. Join our community or apply for personalized coaching.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center"
              >
                <h3 className="font-bebas text-xl sm:text-2xl tracking-tighter uppercase text-bronze mb-3 sm:mb-4" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                  {action.title}
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  {action.description}
                </p>
                <a
                  href="https://calendly.com/ariankananicoaching/discovery-call?month=2025-09"
                  target={action.external ? "_blank" : "_self"}
                  rel={action.external ? "noopener noreferrer" : ""}
                  className="bg-yellow text-shadow px-6 py-3 rounded-md font-bold hover:bg-yellow/90 transition-colors inline-flex items-center text-sm sm:text-base min-h-[48px] justify-center"
                >
                  {action.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-sandstone/20">
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
              <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none text-center">
                See What Others Have to Say
              </h2>
            </motion.h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
              Real transformations from real people who took action.
            </p>
          </motion.div>

          {/* Mobile: Single column with modal */}
          <div className="md:hidden">
            <div className="flex space-x-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
              {contactTestimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="flex-shrink-0 w-72 snap-start first:ml-4">
                  <TestimonialCard
                    testimonial={testimonial}
                    variant="homepage"
                    onClick={() => handleTestimonialClick(testimonial)}
                    onVideoClick={() => handleVideoClick(testimonial)}
                  />
                </div>
              ))}
              <div className="flex-shrink-0 w-4" />
            </div>
            
            {/* Mobile scroll indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {contactTestimonials.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-bronze/30"
                />
              ))}
            </div>
            
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600 mb-4">← Swipe to see more stories →</p>
            </div>
          </div>

          {/* Desktop: 1x3 Grid - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="max-w-5xl mx-auto">
              {/* Top row - 3 testimonials */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
                {contactTestimonials.slice(0, 3).map((testimonial, index) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    variant="homepage"
                    onClick={() => handleTestimonialClick(testimonial)}
                    onVideoClick={() => handleVideoClick(testimonial)}
                  />
                ))}
              </div>
              
              {/* Bottom row - 2 testimonials centered */}
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-2xl">
                  {contactTestimonials.slice(3, 5).map((testimonial, index) => (
                    <TestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                      variant="homepage"
                      onClick={() => handleTestimonialClick(testimonial)}
                      onVideoClick={() => handleVideoClick(testimonial)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonial Modal */}
      <TestimonialModal
        testimonial={selectedTestimonial}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={closeVideoModal}
          videoEmbed={selectedVideo.embed}
          title={selectedVideo.title}
        />
      )}
    </>
  );
};

export default Contact;