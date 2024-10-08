import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WorkFlow from './components/Workflow';
import AiInfo from './components/AiInfo';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function GoogleAnalyticsTag() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-Y4575EYTLY';
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-Y4575EYTLY');

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

function App() {
  const pricingRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#pricing') {
      pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="font-sans">
      <GoogleAnalyticsTag />
      <Header />
      <Hero />
      <Features />
      <WorkFlow />
      <AiInfo />    
      <div ref={pricingRef} id="pricing">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}

export default App;