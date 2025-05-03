'use client';
import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';

const FloatingButtons = (): ReactElement => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop positions (larger distances)
  const desktopElements = [
    { id: 1, x: 0, y: -180, label: 'Automation' },
    { id: 2, x: -140, y: -110, label: 'PMS' },
    { id: 3, x: 140, y: -120, label: 'CRM' },
    { id: 4, x: 0, y: 190, label: 'Finance' },
    { id: 5, x: -140, y: 110, label: 'Files' },
    { id: 6, x: 140, y: 110, label: 'Chats' },
    { id: 7, x: -190, y: 0, label: 'HRM' },
    { id: 8, x: 170, y: 0, label: 'Task' },
  ];

  // Mobile positions (smaller distances)
  const mobileElements = [
    { id: 1, x: 0, y: -160, label: 'Automation' },
    { id: 2, x: -100, y: -90, label: 'PMS' },
    { id: 3, x: 100, y: -100, label: 'CRM' },
    { id: 4, x: 0, y: 170, label: 'Finance' },
    { id: 5, x: -100, y: 100, label: 'Files' },
    { id: 6, x: 100, y: 90, label: 'Chats' },
    { id: 7, x: -130, y: 0, label: 'HRM' },
    { id: 8, x: 140, y: 0, label: 'Task' },
  ];

  // Choose which array to use based on window width
  const getPositionElements = () => {
    if (!isMounted) return []; // Return empty array before hydration
    return windowWidth >= 540 ? desktopElements : mobileElements;
  };

  const pmsElements = getPositionElements();

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {/* Central Logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="relative">
          <div className="absolute inset-0 bg-primary rounded-full blur-lg opacity-30 animate-pulse-slow" />
          <div className="relative rounded-full p-1 bg-gray-900 border-2 border-primary shadow-xl">
            <Image src="/logo.png" alt="Logo" width={80} height={80} className="rounded-full" />
          </div>
        </div>
      </div>

      {/* Connecting Lines - drawn from each element to center */}
      <svg className="absolute top-0 left-0 w-full h-full z-10" xmlns="http://www.w3.org/2000/svg">
        {pmsElements.map(element => {
          const centerX = '50%';
          const centerY = '50%';
          const elementX = `calc(50% + ${element.x}px)`;
          const elementY = `calc(50% + ${element.y}px)`;

          return (
            <line
              key={`line-${element.id}`}
              x1={centerX}
              y1={centerY}
              x2={elementX}
              y2={elementY}
              stroke="rgba(59, 130, 246, 0.7)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-dash"
            />
          );
        })}
      </svg>

      {/* PMS Elements */}
      <div className="absolute inset-0 z-20">
        {pmsElements.map((element, index) => (
          <div
            key={`pms-${element.id}`}
            className="absolute cursor-pointer"
            style={{
              left: `calc(50% + ${element.x}px)`,
              top: `calc(50% + ${element.y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className={`relative group ${`animate-float-${(index % 3) + 1}`}`}>
              <div className="absolute inset-0 bg-primary rounded-md blur-xs group-hover:blur-sm transition-all duration-300" />
              <h1 className="relative bg-gray-900 font-medium  text-primary text-xl px-4 py-1 rounded-md border-2 border-primary shadow-lg group-hover:shadow-xl transition-all">
                {element.label}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Add this to your global CSS */}
    </div>
  );
};

export default FloatingButtons;
