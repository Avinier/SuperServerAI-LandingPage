import React, { useState } from "react";
const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <a href="#" className="text-xl lg:text-2xl font-heading text-primary">
        SuperServer<span className="text-accent text-2xl lg:text-3xl">.</span>AI
      </a>
    </div>
  );
};
const NavItem = ({ title, href, subitems, isMobile, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItemStyle =
    "text-gray-600 font-body hover:text-accent text-sm lg:text-base flex items-center";
  if (subitems) {
    return (
      <div className={`relative group ${isMobile ? "w-full" : ""}`}>
        <button
          className={`${navItemStyle} ${
            isMobile ? "w-full justify-between" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <Arrow isOpen={isOpen} />
        </button>
        {isOpen && <Dropdown subitems={subitems} isMobile={isMobile} />}
      </div>
    );
  }
  return (
    <a
      href={href}
      className={navItemStyle}
      onClick={isMobile ? closeMenu : undefined}
    >
      {title}
    </a>
  );
};

const Dropdown = ({ subitems, isMobile }) => {
  return (
    <div
      className={`${
        isMobile ? "relative" : "absolute"
      } left-0 mt-2 w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50`}
    >
      <div className="py-1">
        {subitems.map((section, index) => (
          <div key={index} className="px-3 py-2">
            <h3 className="text-xs font-semibold text-gray-900">
              {section.title}
            </h3>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <a
                  href={item.href}
                  className="block px-3 py-2 text-xs text-primary hover:bg-gray-100"
                >
                  {item.title}
                </a>
                <p className="px-3 py-1 text-xs text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
const Arrow = ({ isOpen }) => {
  return (
    <svg
      className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
        isOpen ? "rotate-180" : ""
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const navItems = [
  { title: "Why Us", href: "#" },
  {
    title: "Products",
    subitems: [
      {
        title: "PRODUCTS",
        items: [
          {
            title: "Payroll",
            description: "Automated deductions, direct deposit and tax filing",
            href: "#",
          },
          // Add more product items here
        ],
      },
      {
        title: "FEATURES",
        items: [
          {
            title: "Time and attendance",
            description: "Time tracking and time-off requests",
            href: "#",
          },
          // Add more feature items here
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
    title: "Contact Sales",
    subitems: [
      // Add subitems for Contact Sales here
    ],
  },
  { title: "Pricing", href: "#" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="bg-background shadow-md hover:shadow-lg py-3 lg:py-4 w-full flex justify-around sticky top-0 z-10">
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
            className={`absolute top-full w-fit left-0 bg-background md:hidden ${
              isMenuOpen ? "block" : "hidden"
            }`}
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
              <a
                href="#"
                className="text-gray-600 font-body hover:text-gray-900 text-sm lg:text-base"
                onClick={closeMenu}
              >
                Sign in
              </a>
              <button
                className="bg-secondary text-text px-3 py-1.5 rounded-md text-sm lg:text-base font-body transition-all duration-300 hover:bg-accent hover:shadow-lg transform hover:scale-105 hover:-translate-y-1"
                onClick={closeMenu}
              >
                Sign Up
              </button>
            </nav>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#"
              className="text-gray-600 font-body hover:text-gray-900 text-base mt-1 mr-2"
            >
              Sign in
            </a>
            <button className="bg-secondary text-text px-6 py-1 pt-1.5 rounded-md text-base font-body transition-all duration-300 hover:bg-accent hover:shadow-lg transform hover:scale-105 hover:-translate-y-1">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
