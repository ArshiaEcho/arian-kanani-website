import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Stories from './pages/Stories';
import Contact from './pages/Contact';
import OneOnOnePage from './pages/OneOnOnePage';
import ThankYou from './pages/ThankYou';
import BackToTop from './components/BackToTop';

// Component to handle scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-cream text-shadow">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/1on1" element={<OneOnOnePage />} />
              <Route path="/ThankYou" element={<ThankYou />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;