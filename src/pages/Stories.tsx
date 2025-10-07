import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ParallaxHero from '../components/ParallaxHero';
import WarriorResetForm from '../components/WarriorResetForm';
import TestimonialCard from '../components/TestimonialCard';
import TestimonialModal from '../components/TestimonialModal';
import VideoModal from '../components/VideoModal';
import { testimonials } from '../data/testimonials';

const Stories: React.FC = () => {
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
        name: 'Stories',
        item: 'https://ariankanani.com/stories'
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Transformation Stories - They Thought They Were Fit Too"
        description="Real transformation stories from Arian Kanani's clients. See how discipline, proper training, and mindset work create lasting change."
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
                Transformation Stories
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
              They thought they were fit too... until they discovered what real transformation looks like.
            </h2>
          </motion.h2>
        </div>
      </div>

      {/* Stories Section */}
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
                Real People, Real Results
              </h2>
            </motion.h2>
          </motion.div>

          {/* Mobile: Horizontal scroll cards */}
          <div className="md:hidden">
            <div className="flex space-x-4 overflow-x-auto pb-4 pl-4 snap-x snap-mandatory scrollbar-hide">
              {testimonials.map((testimonial, index) => (
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
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600 mb-4">Swipe to see more stories →</p>
            </div>
          </div>

          {/* Tablet: 2-column grid */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
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

          {/* Desktop: Detailed layout */}
          <div className="hidden lg:block space-y-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                variant="stories"
                className={index % 2 === 1 ? 'md:flex-row-reverse' : ''}
                onVideoClick={() => handleVideoClick(testimonial)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-yellow">
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

export default Stories;