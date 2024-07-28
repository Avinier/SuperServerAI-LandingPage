import React from 'react';

function Pricing() {
  const plans = [
    { name: 'Simple', price: '$40/mo + $6/mo per person', description: 'Best for new businesses and startups paying people in one state.' },
    { name: 'Plus', price: '$80/mo + $12/mo per person', description: 'Run payroll in 2 or more states and get built-in time tracking and HR tools.' },
    { name: 'Premium', price: '$120/mo + $12/mo per person', description: "You'll get a dedicated success liaison to meet your team's complex needs." },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading text-text">Choose Your Plan</h2>
        <div className="grid grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-primary m-10 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 font-heading text-background">{plan.name}</h3>
              <p className="text-xl font-semibold mb-4 font-body text-background">{plan.price}</p>
              <p className="mb-8 font-body text-gray-300">{plan.description}</p>
              <button className="w-full bg-accent text-background py-2 rounded-md hover:bg-secondary font-body">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;