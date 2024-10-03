import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const useScrollDirection = () => {
  // ... (keep this hook unchanged)
};

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="text-xl lg:text-2xl font-heading text-primary">
        SuperServer<span className="text-accent text-2xl lg:text-3xl">.</span><span className="text-secondary">AI</span>
      </Link>
    </div>
  );
};

const NavItem = ({ title, to, subitems, isMobile, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItemStyle = `
    text-gray-700 font-body text-sm lg:text-base
    flex items-center py-2 px-3 rounded-md
    transition-all duration-200 ease-in-out
    hover:bg-gray-100 hover:text-primary
  `;

  const dropdownToggleStyle = `
    ${navItemStyle}
    ${isMobile ? "w-full justify-between" : ""}
    ${isOpen ? "bg-gray-100 text-primary" : ""}
  `;

  useEffect(() => {
    // ... (keep this effect unchanged)
  }, []);

  if (subitems) {
    return (
      <div className={`relative group ${isMobile ? "w-full" : ""}`} ref={dropdownRef}>
        <button
          className={dropdownToggleStyle}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>{title}</span>
          <Arrow isOpen={isOpen} />
        </button>
        {isOpen && <Dropdown subitems={subitems} isMobile={isMobile} closeMenu={closeMenu} />}
      </div>
    );
  }

  return (
    <Link
      to={to}
      className={navItemStyle}
      onClick={isMobile ? closeMenu : undefined}
    >
      {title}
    </Link>
  );
};

const Arrow = ({ isOpen }) => {
  // ... (keep this component unchanged)
};

const Dropdown = ({ subitems, isMobile, closeMenu }) => {
  return (
    <div
      className={`
        ${isMobile ? "relative" : "absolute"}
        left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50
        transition-all duration-200 ease-in-out
      `}
    >
      <div className="py-1">
        {subitems.map((section, index) => (
          <div key={index} className="px-3 py-2">
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">
              {section.title}
            </h3>
            {section.items.map((item, itemIndex) => (
              <Link
                key={itemIndex}
                to={item.to}
                className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-150 ease-in-out"
                onClick={isMobile ? closeMenu : undefined}
              >
                <div className="font-medium">{item.title}</div>
                <p className="text-xs text-gray-500 mt-1">{item.description}</p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const navItems = [
  { title: "About Us", to: "/about" },
  {
    title: "Products",
    subitems: [
      {
        title: "PRODUCTS",
        items: [
          {
            title: "AI Chatbot",
            description: "Automate your server deployments with our chatbot",
            to: "/products/ai-chatbot",
          },
          {
            title: "Dashboard",
            description: "Monitor your deployments and get real-time insights",
            to: "/products/dashboard",
          },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    subitems: [
      // Add subitems for Solutions here
    ],
  },
  {
    title: "Contact Us",
    to: "/contact"
  },
  { title: "Pricing", to: "/pricing" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const [showHeader, setShowHeader] = useState(true);
  
  useEffect(() => {
    // ... (keep this effect unchanged)
  }, [scrollDirection]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header className={`bg-background shadow-md hover:shadow-lg py-3 lg:py-4 w-full flex justify-around sticky top-0 z-20 transition-all duration-300 ease-in-out ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="container px-3 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <Logo />
          {/* Hamburger menu for mobile */}
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Mobile menu */}
          <div
            className={`absolute top-full w-[100%] left-0 bg-background md:hidden ${isMenuOpen ? "block" : "hidden"}`}
          >
            <nav className="flex flex-col space-y-3 p-3">
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  {...item}
                  isMobile={true}
                  closeMenu={closeMenu}
                />
              ))}
              <Link
                to="/signin"
                className="text-gray-600 font-body hover:text-gray-900 text-sm lg:text-base"
                onClick={closeMenu}
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="bg-secondary text-text px-3 py-1.5 rounded-md text-sm lg:text-base font-body transition-all duration-300 hover:bg-accent hover:shadow-lg transform hover:scale-105 hover:-translate-y-1"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
            </nav>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </nav>

          {/* <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/signin"
              className="text-gray-600 font-body hover:text-gray-900 text-base mt-1 mr-2"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="bg-secondary text-text px-6 py-1 pt-1.5 rounded-md text-base font-body transition-all duration-300 hover:bg-accent hover:shadow-lg transform hover:scale-105 hover:-translate-y-1"
            >
              Sign Up
            </Link>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;