'use client';

import React from 'react';

interface ScrollToProps {
  children: React.ReactNode;
  targetId: string; // The ID of the element to scroll to
}

const ScrollTo = ({ children, targetId }: ScrollToProps) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {children}
    </div>
  );
};

export default ScrollTo;
