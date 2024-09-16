import React, { useState, useEffect, useRef } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    }
  }, [scrollDirection]);
  return scrollDirection;
};

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <a href="#" className="text-xl lg:text-2xl font-heading text-primary">
        SuperServer<span className="text-accent text-2xl lg:text-3xl">.</span><span className="text-secondary">AI</span>
      </a>
    </div>
  );
};

const NavItem = ({ title, href, subitems, isMobile, closeMenu }) => {
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
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
    <a
      href={href}
      className={navItemStyle}
      onClick={isMobile ? closeMenu : undefined}
    >
      {title}
    </a>
  );
};

const Arrow = ({ isOpen }) => {
  return (
    <svg
      className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""
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
              <a
                key={itemIndex}
                href={item.href}
                className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors duration-150 ease-in-out"
                onClick={isMobile ? closeMenu : undefined}
              >
                <div className="font-medium">{item.title}</div>
                <p className="text-xs text-gray-500 mt-1">{item.description}</p>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
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
  const scrollDirection = useScrollDirection();
  const [showHeader, setShowHeader] = useState(true);
  useEffect(() => {
    if (scrollDirection === 'up') {
      setShowHeader(true);
    } else if (scrollDirection === 'down') {
      setShowHeader(false);
    }
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
              href="https://hu56kt7hdn2.typeform.com/to/vD8NjERN"
              target="_blank"
              className="text-gray-600 font-body hover:text-gray-900 text-base mt-1 mr-2"
            >
              Sign in
            </a>
            <a
              href="https://hu56kt7hdn2.typeform.com/to/vD8NjERN"
              target="_blank"
              className="bg-secondary text-text px-6 py-1 pt-1.5 rounded-md text-base font-body transition-all duration-300 hover:bg-accent hover:shadow-lg transform hover:scale-105 hover:-translate-y-1">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
