import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">About SuperServer.AI</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-text mb-4">Our Mission</h2>
          <p className="text-text mb-6">
            At SuperServer.AI, our mission is to revolutionize the way developers and small businesses interact with cloud infrastructure. We believe that everyone should have access to powerful, scalable, and secure cloud solutions without the need for extensive DevOps knowledge.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-text mb-4">Our Story</h2>
          <p className="text-text mb-6">
            Founded in 2023, SuperServer.AI was born out of the frustration experienced by developers who found themselves spending more time managing infrastructure than writing code. Our team of passionate engineers and AI experts came together to create a solution that would allow developers to focus on what they do best - building great software.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-text mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-text">
            <li className="mb-2">Innovation: We constantly push the boundaries of what's possible with AI and cloud technology.</li>
            <li className="mb-2">Simplicity: We believe in making complex technologies accessible and easy to use.</li>
            <li className="mb-2">Security: We prioritize the security and privacy of our customers' data and applications.</li>
            <li className="mb-2">Customer-Centric: We listen to our customers and evolve our products to meet their needs.</li>
            <li>Transparency: We believe in open communication and being honest about our capabilities and limitations.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;