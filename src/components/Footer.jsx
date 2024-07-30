import React from "react";
const Logo = () => {
  return (
    <div className="flex-shrink-0 mb-4 md:mb-0">
      <a href="#" className="text-2xl md:text-3xl font-heading text-background">
        SuperServer<span className="text-accent text-3xl md:text-4xl">.</span>AI
      </a>
    </div>
  );
};
function Footer() {
  return (
    <footer className="bg-primary text-background py-4 md:py-2">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <Logo />
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 items-center">
          <a
            href="#"
            className="hover:text-accent font-body text-sm md:text-base"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-accent font-body text-sm md:text-base"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-accent font-body text-sm md:text-base"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
