import React, { useEffect, useState } from "react";
import "../styles/hero.css";


function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  let btnAnimation =
    "transition-all duration-300 hover:shadow-lg transform hover:scale-105 hover:-translate-y-1";
  return (
    <section
      className={`bg-background flex flex-col lg:flex-row h-fit w-full items-center justify-around p-4 lg:py-[110px] lg:px-0 ${isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
    >
      <div className="items-center h-fit w-full lg:w-1/2 mb-6 lg:mb-0">
        <div className="text-center lg:text-left max-w-2xl px-3">
          <h1 className="text-xl lg:text-[50px] leading-[1.2] font-bold mb-3 font-heading text-text">
            {" "}
            Seamlessly deploy and manage your code, with{" "}
            <span className="text-secondary">ZERO</span>{" "}
            knowledge of devops.
          </h1>
          <p className="text-base lg:text-lg text-text mb-6 font-body">
            We aim to offer AI-powered services to small businesses and
            developers to deploy and manage their code.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <a
              href="https://hu56kt7hdn2.typeform.com/to/vD8NjERN"
              target="_blank"
              className={`bg-primary text-background px-5 py-2 lg:px-8 lg:py-3 rounded-md text-base lg:text-xl font-body ${btnAnimation}`}
            >
              Join Waitlist
            </a>
            <button
              className={`bg-secondary flex text-text px-5 py-2 lg:px-8 lg:py-3 rounded-md text-base lg:text-xl font-body ${btnAnimation}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 mr-2">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
              </svg>

              Watch Demo
            </button>
            {/* <div className="rounded-lg"><iframe src="https://www.loom.com/embed/c9d0b8305c444fd9a5a165b7368aba43?sid=1846b728-438b-4eb6-b681-6bc46b3962ec" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen className="absolute w-[80%] h-[80%]"></iframe></div> */}
          </div>
        </div>
      </div>
      <img
        src="/images/hero-image1.jpg"
        alt="Hiring"
        className="object-cover h-60 lg:h-[400px] w-full lg:w-[560px] rounded-md shadow-lg transition-transform duration-300"
      />
    </section>
  );
}
export default Hero;
