import React from "react";
function Pricing() {
  const plans = [
    {
      name: "Simple",
      price: "$40/mo + $6/mo per person",
      description:
        "Best for new businesses and startups paying people in one state.",
    },
    {
      name: "Plus",
      price: "$80/mo + $12/mo per person",
      description:
        "Run payroll in 2 or more states and get built-in time tracking and HR tools.",
    },
    {
      name: "Premium",
      price: "$120/mo + $12/mo per person",
      description:
        "You'll get a dedicated success liaison to meet your team's complex needs.",
    },
  ];
  return (
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 font-heading text-text">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-primary mx-0 md:mx-4 my-4 md:my-6 p-6 md:p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-heading text-background">
                {plan.name}
              </h3>
              <p className="text-lg md:text-xl font-semibold mb-3 md:mb-4 font-body text-background">
                {plan.price}
              </p>
              <p className="mb-6 md:mb-8 font-body text-gray-300 text-sm md:text-base">
                {plan.description}
              </p>
              <button className="w-full bg-accent text-background py-2 rounded-md hover:bg-secondary font-body text-sm md:text-base">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Pricing;
