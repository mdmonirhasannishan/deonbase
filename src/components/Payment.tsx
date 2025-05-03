'use client';
import Link from 'next/link';
import { useState } from 'react';

const PricingTable = () => {
  const [includeClientPortal, setIncludeClientPortal] = useState(false);
  const basePrice = 999;
  const clientPortalPrice = 200;

  const features = [
    'Task Management System',
    'PMS (Project Management)',
    'HRM System',
    'CRM Platform',
    'Real-time Chat',
    'Invoice Generation',
    'Financial Tools',
    'Analytics Dashboard',
    'File Storage',
    'Payment Methods',
    'Email Automation',
    'PDF Generator',
    'Custom Dashboard',
    'Employee Portal',
    '1 Month Help Support',
    'Firebase Backend',
  ];

  const toggleClientPortal = () => {
    setIncludeClientPortal(!includeClientPortal);
  };



  const handleBookMeeting = () => {
    alert('Redirecting to meeting booking page');
  };

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-200 mb-2">
            Complete Solution <span className="text-primary">License</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            All business tools - one payment, no subscriptions
          </p>
        </header>

        <div className="bg-background rounded-lg border border-primary shadow-md overflow-hidden">
          <div className="p-6 text-center border-b border-primary">
            <h3 className="text-xl font-bold text-primary mb-1">Business Suite</h3>
            <div className="flex justify-center items-baseline my-3">
              <span className="text-4xl font-extrabold text-slate-200">
                ${includeClientPortal ? basePrice + clientPortalPrice : basePrice}
              </span>
              <span className="ml-2 text-gray-400 text-sm">one-time</span>
            </div>
            <div className="bg-blue-900/20 border border-blue-700 rounded p-2 mt-2">
              <p className="text-blue-300 text-xs">
                First 10 companies get free setup (worth $199)!
              </p>
            </div>
          </div>

          <div className="p-4 border-b border-primary">
            <h4 className="font-semibold text-dark mb-3">Includes:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-4 w-4 text-dark mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-medium text-dark">Client Portal</h4>
                <p className="text-gray-400 text-xs">Dedicated client access</p>
              </div>
              <button
                onClick={toggleClientPortal}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  includeClientPortal
                    ? 'bg-primary text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {includeClientPortal ? 'Added (+$200)' : 'Add $200'}
              </button>
            </div>

            <div className=" pt-2 pb-4 mt-6">
              <Link href="/contact">
                <button
                  
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-md transition-colors text-sm"
                >
                  Book a Meeting
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default PricingTable;
