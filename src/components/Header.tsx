import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      // Only apply hide/show logic on mobile (screens smaller than 768px)
      if (window.innerWidth < 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past 100px
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        // Always visible on desktop
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      // Reset visibility on resize
      if (window.innerWidth >= 768) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Stories', path: '/stories' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleFreeGuideClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('free-guide-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('free-guide-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Burger Menu - Always Visible */}
      <div className="md:hidden fixed top-0 right-0 z-50 p-4 flex items-center h-16">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`text-cream hover:text-yellow transition-colors p-3 rounded-lg flex flex-col justify-center items-center w-10 h-10 ${
            isScrolled ? 'bg-shadow/95 backdrop-blur-md' : 'bg-shadow/80'
          }`}
        >
          {isMenuOpen ? (
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className="absolute w-6 h-0.5 bg-current transform rotate-45"></span>
              <span className="absolute w-6 h-0.5 bg-current transform -rotate-45"></span>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center space-y-1">
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </div>
          )}
        </button>
      </div>

      {/* Main Header - Hides on Mobile Scroll */}
      <motion.header 
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-shadow/95 backdrop-blur-md shadow-lg' 
            : 'bg-shadow/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 md:justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <img 
                  src="https://i.imgur.com/R8nphs9.png" 
                  alt="Arian Kanani Logo" 
                  className="h-7 sm:h-8 w-auto"
                />
                <span className="font-bebas text-2xl sm:text-3xl text-yellow tracking-tighter uppercase">
                  Arian Kanani
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-yellow ${
                    location.pathname === item.path 
                      ? 'text-yellow' 
                      : 'text-cream'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={handleFreeGuideClick}
                className="text-sm font-medium text-cream hover:text-yellow transition-colors whitespace-nowrap"
              >
                Free Guide
              </button>
              <Link
                to="/1on1"
                className="bg-bronze text-cream px-3 py-2 rounded-md text-sm font-medium hover:bg-bronze/90 transition-colors whitespace-nowrap"
              >
                Premium Coaching
              </Link>
              <a
                href="https://www.skool.com/senseiacademy/about?ref=ef162307115940808d7f594a0c500054"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow text-shadow px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow/90 transition-colors whitespace-nowrap"
              >
                Become a Member
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-shadow/95 backdrop-blur-md border-t border-bronze/20"
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg font-medium transition-colors hover:text-yellow py-2 ${
                      location.pathname === item.path 
                        ? 'text-yellow' 
                        : 'text-cream'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-3 border-t border-bronze/20 space-y-3">
                  <button
                    onClick={handleFreeGuideClick}
                    className="block text-lg font-medium text-cream hover:text-yellow transition-colors py-2"
                  >
                    Free Guide
                  </button>
                  <Link
                    to="/1on1"
                    onClick={() => setIsMenuOpen(false)}
                    className="block bg-yellow text-shadow px-6 py-3 rounded-md text-lg font-medium hover:bg-yellow/90 transition-colors text-center mb-3"
                  >
                    Premium Coaching
                  </Link>
                  <a
                    href="https://www.skool.com/senseiacademy/about?ref=ef162307115940808d7f594a0c500054"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-yellow text-shadow px-6 py-3 rounded-md text-lg font-medium hover:bg-yellow/90 transition-colors text-center"
                  >
                    Become a Member
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;