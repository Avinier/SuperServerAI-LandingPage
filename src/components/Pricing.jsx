import React from "react";
const PricingCard = ({ title, price, description, features, buttonText, highlight }) => (
  <div className="flex flex-col min-h-[50%] min-w-[25%] p-6 bg-white rounded-lg shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer duration-300">
    <div className="flex-grow">
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
    </div>
    <div className="mt-6">
      <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">
        {buttonText}
      </button>
    </div>
  </div>
);


function Pricing() {
  const plans = [
    {
      title: "DEVELOPER",
      price: "$0",
      description: "for first 5 components",
      subDescription: "Ideal for developers.",
      additionalInfo: "$5/additional component",
      resourceUsage: "+ resource usage ($100 credits per month free)",
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
      subDescription: "Ideal for teams collaboratively building cloud native apps.",
      additionalInfo: "Sign up and upgrade to Team with your work email to get 5 components free for 6 months",
      resourceUsage: "+ resource usage ($1,000 credits for 6 months free)",
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
      subDescription: "Discounts offered based on annual commitments",
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
        <p className="text-md md:text-2xl lg:text-xl text-bold text-center font-body text-text max-w-3xl mx-auto">
          We offer three tier services. blah blah
        </p>
        <div className="flex flex-col md:flex-row bg-background justify-center items-stretch space-y-6 md:space-y-0 md:space-x-6 p-6">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              buttonText={plan.buttonText}
              highlight={plan.highlight}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
export default Pricing;

