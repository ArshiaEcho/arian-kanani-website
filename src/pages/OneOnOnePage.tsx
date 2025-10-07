import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Target, 
  Zap, 
  Trophy,
  Phone,
  Calendar,
  FileText,
  User,
  Clock,
  Star,
  Play,
  X
} from 'lucide-react';
import SEO from '../components/SEO';
import { subscribeToMailchimp } from '../utils/mailchimp';
import TestimonialCard from '../components/TestimonialCard';
import TestimonialModal from '../components/TestimonialModal';
import VideoModal from '../components/VideoModal';
import { testimonials as testimonialsData } from '../data/testimonials';
import { Link } from 'react-router-dom';

const OneOnOnePage: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: '',
    challenges: '',
    commitment: '',
    experience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.name || !formData.goals) {
      setSubmitMessage('Please fill in all required fields.');
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
        source: '1on1-coaching',
        type: 'application',
        ...utmData,
      });

      if (result.success) {
        setSubmitMessage('Thank you! Your application has been submitted. We\'ll be in touch within 24 hours to schedule your discovery call.');
        setFormData({ name: '', email: '', phone: '', goals: '', challenges: '', commitment: '', experience: '' });
      } else {
        setSubmitMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('1-on-1 coaching application error:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const programFeatures = [
    { icon: Phone, title: '1-on-1 Weekly Calls', description: 'Direct access to personalized coaching sessions' },
    { icon: Target, title: 'Customized Training Plans', description: 'Programs tailored specifically to your goals and needs' },
    { icon: Calendar, title: 'Flexible Scheduling', description: 'Sessions that work around your busy lifestyle' },
    { icon: FileText, title: 'Comprehensive Assessments', description: 'In-depth analysis of your current state and progress' },
    { icon: Zap, title: 'Rapid Response Support', description: 'Get answers to your questions within hours, not days' },
    { icon: Trophy, title: 'Accountability System', description: 'Stay on track with proven accountability methods' }
  ];

  const applicationSteps = [
    { number: 1, title: 'Submit Application', description: 'Complete the form below with your goals and current situation' },
    { number: 2, title: 'Discovery Call', description: 'We\'ll schedule a 30-minute call to discuss your needs' },
    { number: 3, title: 'Program Enrollment', description: 'If we\'re a good fit, we\'ll design your personalized program' }
  ];

  const faqs = [
    {
      question: 'What is the investment for 1-on-1 coaching?',
      answer: 'Investment varies based on your specific needs and program duration. During our discovery call, we\'ll discuss pricing that aligns with your goals and commitment level.'
    },
    {
      question: 'How long does the coaching program last?',
      answer: 'Programs typically range from 3-12 months, depending on your goals. We believe in sustainable transformation, not quick fixes.'
    },
    {
      question: 'What if I\'m a complete beginner?',
      answer: 'Perfect! We work with clients at all levels. Your program will be designed specifically for your current fitness level and experience.'
    },
    {
      question: 'How often do we meet?',
      answer: 'Most clients have weekly 60-minute sessions, but frequency can be adjusted based on your needs and preferences.'
    },
    {
      question: 'What makes this different from other coaching programs?',
      answer: 'Our approach combines physical training with mindset work, creating lasting transformation that goes beyond just fitness results.'
    },
    {
      question: 'Do you work with clients remotely?',
      answer: 'Yes! We work with clients worldwide through video calls and provide all necessary support digitally.'
    }
  ];

  const testimonials = [];

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
        name: '1-on-1 Coaching',
        item: 'https://ariankanani.com/1on1'
      }
    ]
  };

  return (
    <>
      <SEO 
        title="1-on-1 Coaching - Unlock Your Full Potential with Personalized Training"
        description="Transform your life with elite 1-on-1 coaching. Personalized training, mindset work, and direct access to expert guidance for lasting results."
        keywords="1-on-1 coaching, personalized training, elite mentorship, transformation coaching, private coaching"
        jsonLd={breadcrumbJsonLd}
      />

      {/* VSL Hero Section */}
      <section className="bg-shadow text-white pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase mb-6 leading-none">
              <span className="text-white">Unlock Your </span>
              <span className="text-yellow">Full Potential</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              1-on-1 coaching for high-achievers ready to transform their body, mind, and life
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Embed */}
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe 
                  src="https://player.vimeo.com/video/1122021359?badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="Arian VSL"
                />
              </div>
              
              {/* Overlay with Logo and Watch Button */}
              {!isVideoPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center">
                    {/* Logo */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="mb-6"
                    >
                      <img 
                        src="https://i.imgur.com/R8nphs9.png" 
                        alt="Arian Kanani Logo" 
                        className="h-12 sm:h-16 w-auto mx-auto"
                      />
                    </motion.div>
                    
                    {/* Animated Watch Now Button */}
                    <motion.button
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-yellow/90 hover:bg-yellow text-shadow px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center space-x-3 shadow-xl transition-all duration-300"
                      onClick={() => {
                        setIsVideoPlaying(true);
                        const iframe = document.querySelector('iframe');
                        if (iframe) {
                          // Add autoplay parameter to start the video
                          const currentSrc = iframe.src;
                          if (!currentSrc.includes('autoplay=1')) {
                            iframe.src = currentSrc + '&autoplay=1';
                          }
                        }
                      }}
                    >
                      <Play className="w-6 h-6 fill-current" />
                      <span>WATCH NOW</span>
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-8"
          >
            <a
              href="https://calendly.com/ariankananicoaching/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow text-shadow px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow/90 transition-all transform hover:scale-105 inline-flex items-center justify-center shadow-xl"
            >
              Book Your Free Consultation
            </a>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-400 text-sm sm:text-base">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow rounded-full"></div>
                <span>200+ clients helped</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow rounded-full"></div>
                <span>15+ years experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow rounded-full"></div>
                <span>100K+ social followers</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-sandstone/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
              Real People. Real Results.
            </h2>
          </motion.div>

          {/* Desktop Grid */}
          <div className="hidden md:block">
            <div className="max-w-5xl mx-auto">
              {/* Top row - 3 testimonials (always visible) */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
                {testimonialsData.slice(0, 3).map((testimonial, index) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    variant="homepage"
                    onClick={() => handleTestimonialClick(testimonial)}
                    onVideoClick={() => handleVideoClick(testimonial)}
                  />
                ))}
              </div>
              
              {/* Bottom row - 2 testimonials centered (show/hide based on state) */}
              {showAllTestimonials && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center"
                >
                  <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-2xl">
                    {testimonialsData.slice(3, 5).map((testimonial, index) => (
                      <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                        variant="homepage"
                        onClick={() => handleTestimonialClick(testimonial)}
                        onVideoClick={() => handleVideoClick(testimonial)}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Show More/Show Less Button */}
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllTestimonials(!showAllTestimonials)}
                  className="bg-bronze text-cream px-6 py-3 rounded-lg font-bold text-base hover:bg-bronze/90 transition-all transform hover:scale-105 inline-flex items-center"
                >
                  {showAllTestimonials ? 'Show Less' : 'Show More Stories'}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden testimonial-container">
            <div className="flex space-x-4 overflow-x-auto pb-6 px-4 snap-x snap-mandatory scrollbar-hide">
              {testimonialsData.slice(0, showAllTestimonials ? 5 : 3).map((testimonial, index) => (
                <div key={testimonial.id} className="flex-shrink-0 w-72 snap-start">
                  <TestimonialCard
                    testimonial={testimonial}
                    variant="homepage"
                    onClick={() => handleTestimonialClick(testimonial)}
                    onVideoClick={() => handleVideoClick(testimonial)}
                  />
                </div>
              ))}
            </div>
            
            {/* Mobile scroll indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {testimonialsData.slice(0, showAllTestimonials ? 5 : 3).map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-bronze/30"
                />
              ))}
            </div>
            
            <div className="text-center mt-4 space-y-4">
              {!showAllTestimonials && (
                <p className="text-sm text-gray-600">← Swipe to see more stories →</p>
              )}
              <button
                onClick={() => setShowAllTestimonials(!showAllTestimonials)}
                className="bg-bronze text-cream px-6 py-3 rounded-lg font-bold text-base hover:bg-bronze/90 transition-all transform hover:scale-105 inline-flex items-center"
              >
                {showAllTestimonials ? 'Show Less' : 'Show More Stories'}
              </button>
            </div>
          </div>

          <div className="text-center mt-8 pt-4 border-t border-bronze/20">
            <div className="max-w-md mx-auto">
              <Link
                to="/stories"
                className="w-full bg-gradient-to-r from-bronze to-shadow text-cream px-6 py-3 rounded-lg font-bold text-base hover:from-bronze/90 hover:to-shadow/90 transition-all transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center group min-h-[48px]"
              >
                <span className="mr-3">View All Success Stories</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-shadow text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-bebas text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase mb-6 sm:mb-6 leading-tight sm:leading-none text-center px-2"
              style={{ display: 'block', visibility: 'visible', opacity: 1 }}
            >
              <span className="text-white">From Plateau and Frustration</span>
              <br />
              <span className="text-yellow">to Unstoppable Progress</span>
            </motion.h2>
            
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 text-center px-4">
              Most training plans fail because they treat everyone the same. With Arian, every warrior is assessed, every weakness uncovered, and every plan forged to adapt as you evolve. This isn't a quick fix — it's a path to strength, precision, and long-term mastery.
            </p>
          </motion.div>

          {/* Pain Points */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <div className="space-y-4 sm:space-y-6">
              {[
                "Tried generic programs but keep hitting the same walls?",
                "Training hard but still one step away from real breakthrough?",
                "Want a body that performs like a weapon — powerful, resilient, and setback-proof?"
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 sm:space-x-4 px-2"
                >
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-yellow rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-shadow" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
            {['Discipline-driven', 'Individually-crafted', 'Built for warriors'].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-yellow/20 text-yellow px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-base font-medium border border-yellow/30"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="https://calendly.com/ariankananicoaching/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow text-shadow px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow/90 transition-all transform hover:scale-105 inline-flex items-center justify-center shadow-xl"
            >
              Book Your Free Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Warrior's Path Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
              The Warrior's Path
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Every warrior's journey follows stages of discipline and mastery. Here's how we forge yours.
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden md:block mb-8 sm:mb-12">
            <div className="grid grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  number: 1,
                  title: 'Initiation',
                  description: 'Begin with a full movement assessment, uncovering weak points, hidden imbalances, and the real barriers holding you back.'
                },
                {
                  number: 2,
                  title: 'Forging the Plan',
                  description: 'Receive a fully customized strategy designed for your body, your goals, and your lifestyle, never a cookie-cutter template.'
                },
                {
                  number: 3,
                  title: 'Battle Drills',
                  description: 'Weekly 1-on-1 coaching sessions to refine your form, sharpen your focus, and keep you accountable.'
                },
                {
                  number: 4,
                  title: 'Mastery in Motion',
                  description: 'Sustainable adaptation as you evolve. This isn\'t about quick fixes, it\'s about lasting transformation.'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-lg relative"
                >
                  <div className="bg-yellow text-shadow w-12 h-12 rounded-full flex items-center justify-center absolute -top-6 left-6 font-bold text-xl">
                    {step.number}
                  </div>
                  <h3 className="font-bebas text-xl sm:text-2xl tracking-tighter uppercase text-bronze mb-3 mt-6" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Stacked */}
          <div className="md:hidden mb-8 sm:mb-12 space-y-6">
            {[
              {
                number: 1,
                title: 'Initiation',
                description: 'Begin with a full movement assessment, uncovering weak points, hidden imbalances, and the real barriers holding you back.'
              },
              {
                number: 2,
                title: 'Forging the Plan',
                description: 'Receive a fully customized strategy designed for your body, your goals, and your lifestyle, never a cookie-cutter template.'
              },
              {
                number: 3,
                title: 'Battle Drills',
                description: 'Weekly 1-on-1 coaching sessions to refine your form, sharpen your focus, and keep you accountable.'
              },
              {
                number: 4,
                title: 'Mastery in Motion',
                description: 'Sustainable adaptation as you evolve. This isn\'t about quick fixes, it\'s about lasting transformation.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg relative"
              >
                <div className="bg-yellow text-shadow w-10 h-10 rounded-full flex items-center justify-center absolute -top-5 left-6 font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="font-bebas text-xl tracking-tighter uppercase text-bronze mb-3 mt-4" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="https://calendly.com/ariankananicoaching/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow text-shadow px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow/90 transition-all transform hover:scale-105 inline-flex items-center justify-center shadow-xl"
            >
              Book Your Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Arsenal Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-sandstone/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
              The Arsenal
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Tools forged for your evolution, the weapons you'll carry into every battle.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  icon: User,
                  title: 'Direct access to Arian with priority communication and personal guidance'
                },
                {
                  icon: Target,
                  title: 'Comprehensive assessment to reveal weaknesses and reinforce strengths'
                },
                {
                  icon: FileText,
                  title: 'Fully custom protocols designed only for you'
                },
                {
                  icon: Phone,
                  title: 'Weekly tactical sessions with 1-on-1 calls for refinement and progression'
                },
                {
                  icon: Zap,
                  title: 'Continuous adjustments that evolve with you'
                },
                {
                  icon: Trophy,
                  title: 'Integrated training built to fit both home and gym environments'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-lg"
                >
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-medium">
                    {feature.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="https://calendly.com/ariankananicoaching/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow text-shadow px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow/90 transition-all transform hover:scale-105 inline-flex items-center justify-center shadow-xl"
            >
              Book Your Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Who Thrives Here Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
              Who Thrives Here
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Not every path is meant for everyone. Here's who rises and who falls away.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* For Warriors Ready to Rise */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
            >
              <h3 className="font-bebas text-2xl sm:text-3xl tracking-tighter uppercase text-green-600 mb-6 text-center" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                For Warriors Ready to Rise
              </h3>
              <div className="space-y-4">
                {[
                  'Driven individuals who want strength and longevity, not shortcuts',
                  'Those willing to face root causes of stiffness, pain, or plateaus',
                  'People committed to discipline, accountability, and lasting progress'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Not for Pretenders */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
            >
              <h3 className="font-bebas text-2xl sm:text-3xl tracking-tighter uppercase text-red-600 mb-6 text-center" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                Not for Pretenders
              </h3>
              <div className="space-y-4">
                {[
                  'Anyone chasing overnight results or quick hacks',
                  'Those unwilling to engage, learn, and adapt along the way',
                  'People searching for cookie-cutter solutions instead of personalized mastery'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <X className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="https://calendly.com/ariankananicoaching/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow text-shadow px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow/90 transition-all transform hover:scale-105 inline-flex items-center justify-center shadow-xl"
            >
              Book Your Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why This, Not That Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-sandstone/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none" style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
              Why This, Not That
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              The battlefield is full of options. Here's why Arian's program stands apart.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-8 sm:mb-12"
          >
            {/* Desktop Table */}
            <div className="hidden md:block bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left font-bebas text-lg tracking-tighter uppercase text-bronze">Program Type</th>
                    <th className="px-6 py-4 text-center font-bebas text-lg tracking-tighter uppercase text-bronze">Assessment</th>
                    <th className="px-6 py-4 text-center font-bebas text-lg tracking-tighter uppercase text-bronze">Personalization</th>
                    <th className="px-6 py-4 text-center font-bebas text-lg tracking-tighter uppercase text-bronze">1-on-1 Support</th>
                    <th className="px-6 py-4 text-center font-bebas text-lg tracking-tighter uppercase text-bronze">Results</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-bold text-gray-700">Traditional Training</td>
                    <td className="px-6 py-4 text-center text-gray-600">Limited personalization</td>
                    <td className="px-6 py-4 text-center text-gray-600">Generic programming</td>
                    <td className="px-6 py-4 text-center text-gray-600">Little to none</td>
                    <td className="px-6 py-4 text-center text-gray-600">Short-term relief</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-bold text-gray-700">Online Programs</td>
                    <td className="px-6 py-4 text-center text-gray-600">Group-level guidance</td>
                    <td className="px-6 py-4 text-center text-gray-600">One-size-fits-all</td>
                    <td className="px-6 py-4 text-center text-gray-600">Automated responses</td>
                    <td className="px-6 py-4 text-center text-gray-600">Baseline progress</td>
                  </tr>
                  <tr className="bg-green-50 border-2 border-green-200">
                    <td className="px-6 py-4 font-bold text-green-800">Arian's Program</td>
                    <td className="px-6 py-4 text-center font-bold text-green-800">Live assessment</td>
                    <td className="px-6 py-4 text-center font-bold text-green-800">Fully custom plan</td>
                    <td className="px-6 py-4 text-center font-bold text-green-800">Weekly 1-on-1 access</td>
                    <td className="px-6 py-4 text-center font-bold text-green-800">Transformational</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
              {[
                {
                  title: 'Traditional Training',
                  assessment: 'Limited personalization',
                  personalization: 'Generic programming',
                  support: 'Little to none',
                  results: 'Short-term relief',
                  highlight: false
                },
                {
                  title: 'Online Programs',
                  assessment: 'Group-level guidance',
                  personalization: 'One-size-fits-all',
                  support: 'Automated responses',
                  results: 'Baseline progress',
                  highlight: false
                },
                {
                  title: 'Arian\'s Program',
                  assessment: 'Live assessment',
                  personalization: 'Fully custom plan',
                  support: 'Weekly 1-on-1 access',
                  results: 'Transformational',
                  highlight: true
                }
              ].map((program, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-lg ${
                    program.highlight 
                      ? 'bg-green-50 border-2 border-green-200' 
                      : 'bg-white'
                  }`}
                >
                  <h3 className={`font-bebas text-xl tracking-tighter uppercase mb-4 ${
                    program.highlight ? 'text-green-800' : 'text-bronze'
                  }`} style={{ display: 'block', visibility: 'visible', opacity: 1 }}>
                    {program.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Assessment:</span>
                      <span className={program.highlight ? 'font-bold text-green-800' : 'text-gray-600'}>
                        {program.assessment}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Personalization:</span>
                      <span className={program.highlight ? 'font-bold text-green-800' : 'text-gray-600'}>
                        {program.personalization}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">1-on-1 Support:</span>
                      <span className={program.highlight ? 'font-bold text-green-800' : 'text-gray-600'}>
                        {program.support}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Results:</span>
                      <span className={program.highlight ? 'font-bold text-green-800' : 'text-gray-600'}>
                        {program.results}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="https://calendly.com/ariankananicoaching/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow text-shadow px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow/90 transition-all transform hover:scale-105 inline-flex items-center justify-center shadow-xl"
            >
              Book Your Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Coach's Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-sandstone/20 prevent-scroll-conflict">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://i.imgur.com/nuXWrN3.jpeg"
                alt="Arian Kanani"
                className="w-full max-w-md mx-auto lg:max-w-none rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none">
                Meet Your Coach
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4 sm:space-y-6">
                <p>
                  Since age five, movement has been Arian's language. From martial arts to boxing, from underage gym sessions at twelve to a lifetime of relentless training. With over 15+ years transforming hundreds worldwide, his mission runs deeper than reps and sets.
                </p>
                
                <p>
                  Arian believes fitness is the anchor of the warrior—where we show up under every emotion and meet ourselves in motion. His coaching isn't just physical, it's spiritual. Because self-mastery begins in the body.
                </p>
                
                <div className="bg-yellow/10 p-4 sm:p-6 rounded-lg">
                  <h3 className="font-bebas text-lg sm:text-xl tracking-tighter uppercase text-bronze mb-3">
                    The 5 Pillars of Fitness:
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow mr-2 mt-0.5 flex-shrink-0" />
                      Strength & Explosive Power
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow mr-2 mt-0.5 flex-shrink-0" />
                      Mobility & Flexibility
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow mr-2 mt-0.5 flex-shrink-0" />
                      Endurance & Agility
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow mr-2 mt-0.5 flex-shrink-0" />
                      Balance
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow mr-2 mt-0.5 flex-shrink-0" />
                      Neuromuscular Connection—the mind-body link
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <Link
                    to="/about"
                    className="bg-yellow text-shadow px-6 py-3 rounded-lg font-bold text-base hover:bg-yellow/90 transition-all transform hover:scale-105 inline-flex items-center"
                  >
                    Learn More About Your Coach
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-sandstone/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none">
              Questions? We've Got Answers.
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 sm:px-8 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-bebas text-lg sm:text-xl tracking-tighter uppercase text-bronze pr-4">
                    {faq.question}
                  </h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-bronze flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-bronze flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4 sm:px-8 sm:pb-6">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-yellow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter uppercase text-shadow mb-4 sm:mb-6 leading-none">
              Ready to Transform Your Life?
            </h2>
            <p className="text-lg sm:text-xl text-shadow mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
              Limited spots available. Apply now to secure your place in this exclusive program.
            </p>
            <a
              href="https://calendly.com/ariankananicoaching/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-shadow text-cream px-8 py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-shadow/90 transition-all transform hover:scale-105 inline-flex items-center justify-center min-h-[48px]"
            >
              Apply Now - Limited Spots Available
            </a>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={closeVideoModal}
          videoEmbed={selectedVideo.embed}
          title={selectedVideo.title}
        />
      )}

      {/* Testimonial Modal */}
      <TestimonialModal
        testimonial={selectedTestimonial}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default OneOnOnePage;