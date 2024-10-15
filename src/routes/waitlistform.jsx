import React, { useState } from 'react';

const WaitlistForm = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [website, setWebsite] = useState('');
  const [hasDevopsTeam, setHasDevopsTeam] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ name, email, companyName, website, hasDevopsTeam });
  };

  const nextStep = () => setStep(step + 1);

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Welcome to SuperServerAI&apos;s waitlist! We&apos;re revolutionizing cloud deployment with AI-powered simplicity.</h1>
            <p className="mb-4">Join our waitlist to be among the first to experience effortless cloud deployment, regardless of your DevOps expertise.</p>
            <button onClick={nextStep} className="bg-pink-500 text-white px-4 py-2 rounded">
              Start
            </button>
            <p className="mt-2 text-sm text-gray-600">Takes 1 minute 30 seconds</p>
          </div>
        );
      case 1:
        return (
          <div>
            <h2 className="text-xl mb-4">Please Enter your Personal Information</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Type your answer here..."
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="name@example.com"
              />
            </div>
            <button onClick={nextStep} className="bg-pink-500 text-white px-4 py-2 rounded">
              OK
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-xl mb-4">Please enter your company name</h2>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full p-2 border rounded mb-4"
            />
            <button onClick={nextStep} className="bg-pink-500 text-white px-4 py-2 rounded">
              OK
            </button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-xl mb-4">Please enter your Company Website</h2>
            <input
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full p-2 border rounded mb-4"
              placeholder="https://www.example.com"
            />
            <button onClick={nextStep} className="bg-pink-500 text-white px-4 py-2 rounded">
              OK
            </button>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-xl mb-4">Do you have a dedicated devops team for your company?</h2>
            <div className="mb-4">
              <button
                onClick={() => { setHasDevopsTeam(true); handleSubmit(new Event('submit')); }}
                className={`mr-2 px-4 py-2 rounded ${hasDevopsTeam ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                Yes
              </button>
              <button
                onClick={() => { setHasDevopsTeam(false); handleSubmit(new Event('submit')); }}
                className={`px-4 py-2 rounded ${!hasDevopsTeam ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                No
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      <form onSubmit={handleSubmit}>
        {renderStep()}
      </form>
    </div>
  );
};

export default WaitlistForm;