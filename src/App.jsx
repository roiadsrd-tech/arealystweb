
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import SolutionIntro from './components/SolutionIntro';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import ProcessSteps from './components/ProcessSteps';
import BeforeAfter from './components/BeforeAfter';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
const Precios = React.lazy(() => import('./pages/Precios'));
const ArealystAgent = React.lazy(() => import('./pages/ArealystAgent'));
const ArealystSystem = React.lazy(() => import('./pages/ArealystSystem'));


const LandingPage = ({ whySectionRef, globalBgOpacity, isVisible, whyScroll, progressBarFill }) => (
  <main>
    <Hero />
    <div ref={whySectionRef}>
      <WhySection />
    </div>
    <SolutionIntro />
    <Features />
    <DemoSection />
    <ProcessSteps />
    <BeforeAfter />
    <Pricing showBg={true} />
  </main>
);

function App() {
  const { scrollYProgress } = useScroll();
  const whySectionRef = useRef(null);
  const location = useLocation();

  // Atmosphere Glows visibility: Fade out during WhySection sequence
  const globalBgOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.5, 0.6], [1, 1, 0, 0, 1]);

  // Progress bar tracking starts when WhySection is 10% into the viewport
  const { scrollYProgress: whyScroll } = useScroll({
    target: whySectionRef,
    offset: ["start 90%", "end start"]
  });

  // Progress bar fill: Hits 100% at 80% of its tracking range
  const progressBarFill = useTransform(whyScroll, [0, 0.8], [0, 1]);

  // Use state to trigger a time-based fade out
  const [isVisible, setIsVisible] = React.useState(false);

  // Monitor scroll to trigger visibility
  useMotionValueEvent(whyScroll, "change", (latest) => {
    // Start showing as soon as scroll begins (which is now earlier)
    if (latest > 0.001 && latest < 0.8) {
      setIsVisible(true);
    } else if (latest >= 0.8) {
      setIsVisible(false);
    } else {
      setIsVisible(false);
    }
  });

  // Only show progress bar on landing page
  const isLandingPage = location.pathname === '/';

  return (
    <div className="app" style={{ backgroundColor: '#000000' }}>
      {/* Global Atmosphere Glows (scoped to fade out during sequence) */}
      <motion.div className="bg-glow" style={{ opacity: globalBgOpacity }}>
        <div className="glow-1"></div>
        <div className="glow-2"></div>
      </motion.div>

      {/* Narrative Progress Bar */}
      {isLandingPage && (
        <motion.div
          animate={{
            opacity: isVisible ? 1 : 0,
            display: isVisible || whyScroll.get() < 0.8 ? 'block' : 'none'
          }}
          transition={{
            opacity: { duration: isVisible ? 0.3 : 1.5, ease: "easeInOut" },
            display: { delay: isVisible ? 0 : 1.5 }
          }}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            zIndex: 1000,
            pointerEvents: 'none'
          }}
        >
          <motion.div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, #ffffff 0%, var(--accent-color) 100%)',
              transformOrigin: 'left',
              scaleX: progressBarFill
            }}
          />
        </motion.div>
      )}

      <React.Suspense fallback={<div style={{ height: '100vh', backgroundColor: '#000' }} />}>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <LandingPage
                whySectionRef={whySectionRef}
                globalBgOpacity={globalBgOpacity}
                isVisible={isVisible}
                whyScroll={whyScroll}
                progressBarFill={progressBarFill}
              />
              <Footer />
            </>
          } />
          <Route path="/precios" element={<Precios />} />
          <Route path="/agent" element={<ArealystAgent />} />
          <Route path="/system" element={<ArealystSystem />} />

        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
