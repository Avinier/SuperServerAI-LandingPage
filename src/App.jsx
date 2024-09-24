import React from 'react';
import ReactGTM from 'react-gtm-module';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WorkFlow from './components/Workflow';
import AiInfo from './components/AiInfo';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const tagManagerArgs = {
  gtmId: 'G-Y4575EYTLY',
};

function App() {
  React.useEffect(() => {
    ReactGTM.initialize(tagManagerArgs);
  }, []);
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Features />
      <WorkFlow />
      <AiInfo />    
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;