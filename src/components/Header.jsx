// Header.jsx
import React from 'react';
import { useState } from 'react';

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <a href='#' className="text-3xl font-heading text-primary">
        SuperServer<span className='text-accent text-4xl'>.</span>AI
      </a>
    </div>
  );
}

const NavItem = ({ title, href, subitems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItemStyle = "text-gray-600 font-body hover:text-accent text-[1.4rem] flex items-center";

  if (subitems) {
    return (
      <div className="relative group">
        <button 
          className={navItemStyle} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <Arrow isOpen={isOpen} />
        </button>
        {isOpen && <Dropdown subitems={subitems} />}
      </div>
    );
  }

  return (
    <a href={href} className={navItemStyle}>
      {title}
    </a>
  );
}

const Dropdown = ({ subitems }) => {
  return (
    <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
      <div className="py-1">
        {subitems.map((section, index) => (
          <div key={index} className="px-4 py-2">
            <h3 className="text-sm font-semibold text-gray-900">{section.title}</h3>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <a href={item.href} className="block px-4 py-2 text-sm text-primary hover:bg-gray-100">
                  {item.title}
                </a>
                <p className="px-4 py-1 text-xs text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const Arrow = ({ isOpen }) => {
  return (
    <svg
      className={`ml-1 h-5 w-5 transform transition-transform duration-200  ${
        isOpen ? 'rotate-180' : ''
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
}

const navItems = [
  { title: 'Why Us', href: '#' },
  {
    title: 'Products',
    subitems: [
      {
        title: 'PRODUCTS',
        items: [
          { title: 'Payroll', description: 'Automated deductions, direct deposit and tax filing', href: '#' },
          // Add more product items here
        ]
      },
      {
        title: 'FEATURES',
        items: [
          { title: 'Time and attendance', description: 'Time tracking and time-off requests', href: '#' },
          // Add more feature items here
        ]
      }
    ]
  },
  {
    title: 'Solutions',
    subitems: [
      // Add subitems for Solutions here
    ]
  },
  {
    title: 'Contact Sales',
    subitems: [
      // Add subitems for Contact Sales here
    ]
  },
  { title: 'Pricing', href: '#' }
];

function Header() {
  return (
    <header className="bg-background shadow-md hover:shadow-lg py-[20px] w-[100%] flex justify-around sticky top-0 z-10">
      <div className="container px-10">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 font-body hover:text-gray-900 text-[1.4rem] mt-[5px] mr-[10px]">Sign in</a>
            <button className="bg-secondary text-text px-[30px] py-[5px] pt-[7px] rounded-md text-[1.4rem] font-body transition-all duration-300 hover:bg-accent hover:shadow-lg transform hover:scale-105 hover:-translate-y-1">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;