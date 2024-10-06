import React from 'react';
import { motion } from 'framer-motion'; // You'll need to install framer-motion

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const teamMembers = [
    { name: "Aditya Subramanian", role: "AIML, Branding and Design" },
    { name: "Aditya Sinha", role: "Cloud Infrastructure and Devops" },
    { name: "Jugaad Chhabra", role: "Backend Development, Operations" },
    { name: "Harkirat Singh Jaggi", role: "Frontend Development" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-5xl font-bold font-heading text-primary mb-12 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            About SuperServer<span className="text-secondary">.AI</span>
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 font-body">
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-heading text-primary mb-4 text-center">Our Mission</h2>
              <p className="text-text text-center">
                At SuperServer.AI, we're on a mission to revolutionize cloud infrastructure management through the power of AI. We believe in empowering developers and small businesses with powerful, scalable, and secure cloud solutions—without the need for extensive DevOps knowledge.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-heading text-primary mb-4 text-center">Our Story</h2>
              <p className="text-text text-center">
                Founded in 2024, SuperServer.AI emerged from a shared frustration among four developers spending more time on infrastructure than coding. So we have united to create a solution that lets developers focus on what they do best—building great software.
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
            <h2 className="text-3xl font-semibold font-heading text-primary mb-6 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2 text-secondary">
                  <img src="/otherassets/innovation.png" alt="Innovation" className="w-[90px] h-[90px] mx-auto" />
                </div>
                <h3 className="text-xl font-semibold font-body mb-2">Innovation</h3>
                <p className="text-text font-body">Pushing the boundaries of AI and cloud technology</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2 text-secondary">
                    <img src="/otherassets/cyber-security.png" alt="Security" className="w-[90px] h-[90px] mx-auto" />
                </div>
                <h3 className="text-xl font-semibold font-body mb-2">Security</h3>
                <p className="text-text font-body">Prioritizing the protection of our customers' data and applications</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2 text-secondary">
                    <img src="/otherassets/customer.png" alt="Customer-Centric" className="w-[90px] h-[90px] mx-auto" />
                </div>
                <h3 className="text-xl font-semibold font-body mb-2">Customer-Centric</h3>
                <p className="text-text font-body">Evolving our products based on customer needs and feedback</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8 mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-3xl font-semibold font-heading text-primary text-center">The Team</h2>
            <p className='text-text font-body mb-6 text-center text-md'>We are a team of passionate student developers, aiming to revolutionize the cloud-services space</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <img 
                      src=""
                      alt={member.name}
                      className="w-[150px] h-[150px] bg-slate-400 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold font-body mb-2">{member.name}</h3>
                  <p className="text-text font-body">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;