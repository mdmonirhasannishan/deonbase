'use client';
import Link from 'next/link';
import { useState } from 'react';
import Onclick from './Onclick';

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
    "easy to scale",
    "ready to go setup"
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
               $1999
              </span>
              <span className="ml-2 text-gray-400 text-sm">one-time</span>
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


            <div className=" pt-2 pb-4 mt-6">
              <a href="/contact">
                <button className="w-full h-14 font-semibold rounded-md bg-primary text-black text-lg flex justify-center items-center relative z-10 hover:bg-black hover:text-primary border border-primary transition all cursor-pointer">
                  Book a Order
                </button>
              </a>
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
