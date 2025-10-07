import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ParallaxHero from '../components/ParallaxHero';
import WarriorResetForm from '../components/WarriorResetForm';
import TestimonialCard from '../components/TestimonialCard';
import TestimonialModal from '../components/TestimonialModal';
import VideoModal from '../components/VideoModal';
import { testimonials } from '../data/testimonials';

const Home: React.FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ embed: string; title: string } | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Arian Kanani - Sensei Academy',
    url: 'https://ariankanani.com',
    logo: 'https://ariankanani.com/logo.png',
    sameAs: [
      'https://instagram.com/ariankanani',
      'https://youtube.com/@ariankanani',
      'https://linkedin.com/in/ariankanani'
    ]
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Arian Kanani',
    url: 'https://ariankanani.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ariankanani.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const pillars = [
    {
      title: 'Brutal Simplicity',
      description: 'No fluff, just what works.'
    },
    {
      title: 'Mental Mastery',
      description: 'Power begins with awareness.'
    },
    {
      title: 'Strength Redefined',
      description: 'Mace, barbell, bodyweight, stillness.'
    }
  ];

  const evolutionSteps = [
    {
      title: 'RESET',
      description: 'Corrective Mobility & Muscle Balance Training'
    },
    {
      title: 'REINFORCE',
      description: 'Discipline-based programming, form focus'
    },
    {
      title: 'RECLAIM',
      description: 'Power, speed, freedom — your true potential actualized'
    }
  ];

  // Use all 5 testimonials for homepage
  const homepageTestimonials = testimonials;

  return (
    <>
      <SEO 
        jsonLd={[organizationJsonLd, websiteJsonLd]}
      />
      
      {/* Hero Section */}
      <ParallaxHero
        backgroundImage="https://i.imgur.com/dunHzzD.jpeg"
        mobileBackgroundImage="https://i.imgur.com/qITKPSp.jpeg"
        height="h-screen"
        overlay=""
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tighter uppercase mb-4 sm:mb-6 leading-none drop-shadow-2xl"
            style={{ display: 'block', visibility: 'visible', opacity: 1 }}
          >
            So you think you're fit?
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto px-2"
          >
            This is the training ground for modern warriors. Strength. Stillness. Precision.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-2"
          >
            <Link
              to="/1on1"
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-shadow transition-all transform hover:scale-105 inline-flex items-center justify-center min-h-[48px] cursor-pointer"
            >
              Book Free Consultation
            </Link>
            <a
              href="https://www.skool.com/senseiacademy/about?ref=ef162307115940808d7f594a0c500054"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow text-shadow px-6 sm:px-8 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow/90 transition-all transform hover:scale-105 inline-flex items-center justify-center min-h-[48px]"
            >
              Become a Member
            </a>
          </motion.div>
        </div>
      </ParallaxHero>

      {/* Core Philosophy */}
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
              Discipline First.<br className="sm:hidden" /> Results Follow.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="font-bebas text-xl sm:text-2xl tracking-tighter uppercase text-bronze mb-3 sm:mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution Path */}
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
            >
              Rebuild From the Ground Up
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {evolutionSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-lg relative"
              >
                <div className="bg-yellow text-shadow w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center absolute -top-4 sm:-top-5 left-6 sm:left-8 font-bold text-sm sm:text-base">
                  {index + 1}
                </div>
                <h3 className="font-bebas text-2xl sm:text-3xl tracking-tighter uppercase text-bronze mb-3 sm:mb-4 mt-4 sm:mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
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
              Programs
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Community */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-3 sm:mb-4">
                  <p className="text-gray-600 text-sm sm:text-base">Community Program</p>
                  <h3 className="font-bebas text-2xl sm:text-3xl tracking-tighter uppercase text-bronze" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                    The Academy
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                  Join a community of modern warriors. Daily programming, mindset training, 
                  and the accountability you need to evolve.
                </p>
                
                <div className="mb-4 sm:mb-6">
                  <div className="text-2xl sm:text-3xl font-bold text-shadow">$100 USD/month</div>
                </div>
                
                <a
                  href="https://www.skool.com/senseiacademy/about?ref=ef162307115940808d7f594a0c500054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-yellow text-shadow px-6 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow/90 transition-all transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center min-h-[48px]"
                >
                  Become a Member
                </a>
              </div>
            </motion.div>

            {/* 1-on-1 Coaching */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-shadow to-gray-800 border-2 border-yellow/30 text-white p-6 sm:p-8 rounded-xl shadow-xl relative overflow-hidden"
            >
              {/* Dark background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow/10 to-transparent opacity-20" />
              
             <div className="relative z-10">
               <div className="mb-3 sm:mb-4">
                <p className="text-gray-300 text-sm sm:text-base">1-on-1 Mentorship</p>
                 <h3 className="font-bebas text-2xl sm:text-3xl tracking-tighter uppercase text-yellow" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                  Private Coaching
                 </h3>
               </div>
               
               <p className="text-gray-200 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Elite-level mentorship for high-performers. Personalized programming, 
                mindset work, and direct access to Arian.
               </p>
               
               <div className="mb-4 sm:mb-6">
                 <div className="text-2xl sm:text-3xl font-bold text-yellow">Custom Pricing</div>
               </div>
               
               <Link
                 to="/1on1"
                 className="w-full bg-yellow text-shadow px-6 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow/90 transition-all transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center min-h-[48px]"
               >
                 Apply Now
               </Link>
             </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
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
              Success Stories
            </motion.h2>
          </motion.div>

          {/* Desktop Grid */}
          <div className="hidden md:block">
            <div className="max-w-5xl mx-auto">
              {/* Top row - 3 testimonials */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
                {homepageTestimonials.slice(0, 3).map((testimonial, index) => (
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
                  {homepageTestimonials.slice(3, 5).map((testimonial, index) => (
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

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex space-x-4 overflow-x-auto pb-6 pl-4 snap-x snap-mandatory scrollbar-hide">
              {homepageTestimonials.map((testimonial, index) => (
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
              {homepageTestimonials.map((_, index) => (
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

          <div className="text-center mt-8">
            <div className="max-w-md mx-auto">
              <Link
                to="/stories"
                className="w-full bg-gradient-to-r from-bronze to-shadow text-cream px-8 py-4 rounded-lg font-bold text-lg hover:from-bronze/90 hover:to-shadow/90 transition-all transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center group min-h-[56px]"
              >
                <span className="mr-3">View All Success Stories</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section id="free-guide-section" className="py-12 sm:py-16 lg:py-20 bg-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none"
              style={{ display: 'block', visibility: 'visible', opacity: 1 }}
            >
              Claim Your Free 90-Day Warrior Training Preview
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

export default Home;