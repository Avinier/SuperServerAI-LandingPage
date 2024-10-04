import React from "react";

const PricingCard = ({ title, price, description, features, buttonText, highlight }) => (
  <div className="relative flex flex-col min-h-[50%] min-w-[25%] p-6 bg-white rounded-lg shadow-lg overflow-hidden">
    {/* Blurred content */}
    <div className="filter blur-[8px] opacity-50">
      <h2 className="text-xl font-heading text-center mb-4 text-blue-600">{title}</h2>
      <div className="text-center mb-4">
        <span className="text-3xl font-heading">{price}</span>
        {description && <p className="text-sm font-body text-gray-600 mt-2">{description}</p>}
      </div>
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="w-full bg-primary text-white py-2 px-4 rounded-md">
          {buttonText}
        </button>
      </div>
    </div>
    
    {/* "Coming Soon" overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-30">
      <span className="text-3xl font-bold text-text font-heading px-4 py-2 text-shadow-lg">Coming Soon</span>
    </div>
  </div>
);

function Pricing() {
  const plans = [
    {
      title: "DEVELOPER",
      price: "$0",
      description: "for first 5 components",
      features: [
        "Unlimited projects",
        "2 developers",
        "Private repos for paid components only",
        "Scales down to 0 when not in use and scales up to 1 pod"
      ],
      buttonText: "Get Started"
    },
    {
      title: "TEAM",
      price: "$150",
      description: "/component per month",
      features: [
        "Unlimited projects",
        "Unlimited developers",
        "Private or public repo",
        "Scale up without restrictions",
        "You decide how to scale down",
        "Supports Private Data Planes"
      ],
      buttonText: "Get Started",
      highlight: true
    },
    {
      title: "ENTERPRISE",
      price: "Custom",
      description: "Ideal for companies building large-scale distributed apps.",
      features: [
        "Unlimited projects",
        "Unlimited developers",
        "Private or public repo",
        "Scale up without restrictions",
        "You decide how to scale down",
        "Pass-through infrastructure cost",
        "Supports Private Data Planes"
      ],
      buttonText: "Contact Us"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-[50px] md:text-5xl font-heading text-center text-text">
          Pricing
        </h2>
        
        <p className="text-md mb-4 md:text-base lg:text-xl text-center font-body text-text max-w-2xl mx-auto">
          We offer the most affordable prices, without compromising on management or security
        </p>
        <div className="flex flex-col md:flex-row bg-background justify-center items-stretch space-y-6 md:space-y-0 md:space-x-6">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;