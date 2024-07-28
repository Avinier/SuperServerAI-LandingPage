import React from 'react';

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <a href='#' className="text-3xl font-heading text-background">
        SuperServer<span className='text-accent text-4xl'>.</span>AI
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-background py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        <div className="space-x-4">
          <a href="#" className="hover:text-accent font-body">Privacy Policy</a>
          <a href="#" className="hover:text-accent font-body">Terms of Service</a>
          <a href="#" className="hover:text-accent font-body">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;