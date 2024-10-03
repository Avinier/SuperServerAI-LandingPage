import React from 'react';
import Header from './Header'; // Make sure this path is correct
import { motion } from 'framer-motion'; // You'll need to install framer-motion

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-5xl font-bold text-primary mb-12 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            About SuperServer<span className="text-secondary">.AI</span>
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-primary mb-4">Our Mission</h2>
              <p className="text-text">
                At SuperServer.AI, we're on a mission to revolutionize cloud infrastructure management. We believe in empowering developers and small businesses with powerful, scalable, and secure cloud solutions—without the need for extensive DevOps knowledge.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-primary mb-4">Our Story</h2>
              <p className="text-text">
                Founded in 2023, SuperServer.AI emerged from a shared frustration among developers spending more time on infrastructure than coding. Our team of passionate engineers and AI experts united to create a solution that lets developers focus on what they do best—building great software.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8 mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2 text-secondary">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-text">Pushing the boundaries of AI and cloud technology</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2 text-secondary">🛡️</div>
                <h3 className="text-xl font-semibold mb-2">Security</h3>
                <p className="text-text">Prioritizing the protection of our customers' data and applications</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2 text-secondary">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
                <p className="text-text">Evolving our products based on customer needs and feedback</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-primary text-white rounded-lg shadow-lg p-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-center">Join Us on Our Journey</h2>
            <p className="text-center mb-6">
              We're always looking for passionate individuals to join our team and help shape the future of cloud infrastructure management.
            </p>
            <div className="text-center">
              <a 
                href="/careers" 
                className="inline-block bg-secondary text-white py-2 px-6 rounded-md hover:bg-accent transition-colors duration-300"
              >
                View Open Positions
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;