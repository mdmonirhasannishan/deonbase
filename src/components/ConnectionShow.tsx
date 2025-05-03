import React from 'react';

interface PMSElement {
  id: number;
  x: number;
  y: number;
  label: string;
}

const ConnectionShow: React.FC = () => {
  const pmsElements: PMSElement[] = [
    { id: 0, x: 0, y: -350, label: 'Firebase' },
    { id: 1, x: 0, y: -260, label: 'Email Automation' },
    { id: 2, x: -120, y: -180, label: 'PMS' },
    { id: 3, x: 120, y: -180, label: 'CRM' },
    { id: 4, x: 0, y: -180, label: 'HRM' },
    { id: 5, x: 0, y: -100, label: 'Task' },
    { id: 6, x: 0, y: -20, label: 'Finance' },
    { id: 7, x: -130, y: -50, label: 'Files' },
    { id: 8, x: 130, y: -50, label: 'Chats' },
    { id: 9, x: -130, y: 40, label: 'Invoices' },
    { id: 10, x: 130, y: 40, label: 'Analytics' },
    { id: 11, x: 0, y: 100, label: 'Dashboard' },
    { id: 12, x: 0, y: 170, label: 'Employees Portal' },
    { id: 13, x: 0, y: 240, label: 'Client Portal' },
  ];

  const connections: [number, number][] = [
    [0, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4],
    [4, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [6, 9],
    [6, 10],
    [6, 11],
    [9, 11],
    [10, 11],
    [11, 12],
    [11, 13],
    [12, 13],
    [4, 5],
  ];

  const renderConnection = (fromId: number, toId: number, index: number) => {
    const from = pmsElements.find(el => el.id === fromId);
    const to = pmsElements.find(el => el.id === toId);

    if (!from || !to) {
      console.warn(`Invalid connection: ${fromId} -> ${toId}`);
      return null;
    }

    const controlX1 = from.x + (to.x - from.x) * 0.5;
    const controlY1 = from.y;
    const controlX2 = to.x - (to.x - from.x) * 0.5;
    const controlY2 = to.y;

    const pathId = `path-${fromId}-${toId}-${index}`;
    const isFirebaseConnection = fromId === 0 || toId === 0;

    return (
      <g key={`connection-${pathId}`}>
        <defs>
          {/* Subtle glow effect */}
          <filter id={`glow-${pathId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Elegant gradient */}
          <linearGradient id={`gradient-${pathId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#069af0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0052d9" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Base path - subtle and smooth */}
        <path
          d={`M ${from.x} ${from.y} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${to.x} ${to.y}`}
          fill="none"
          stroke={`url(#gradient-${pathId})`}
          strokeWidth={isFirebaseConnection ? '8' : '6'}
          strokeOpacity="0.3"
          filter={`url(#glow-${pathId})`}
          className="transition-all duration-300"
        />

        {/* Main animated path - sleek data flow */}
        <path
          d={`M ${from.x} ${from.y} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${to.x} ${to.y}`}
          fill="none"
          stroke={`url(#gradient-${pathId})`}
          strokeWidth={isFirebaseConnection ? '3' : '2'}
          strokeLinecap="round"
          className="opacity-90 hover:opacity-100 transition-opacity"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0, 500; 150, 500; 0, 500"
            dur="2s"
            repeatCount="indefinite"
            keyTimes="0; 0.5; 1"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          />
          <animate
            attributeName="stroke-width"
            values={isFirebaseConnection ? '3;4;3' : '2;3;2'}
            dur="3s"
            repeatCount="indefinite"
          />
        </path>

        {/* Sophisticated highlight */}
        <path
          d={`M ${from.x} ${from.y} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${to.x} ${to.y}`}
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth={isFirebaseConnection ? '1.5' : '1'}
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-opacity"
            values="0.5; 0.8; 0.5"
            dur="2.5s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    );
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <svg
          width="1000"
          height="1000"
          viewBox="-500 -500 1000 1000"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          {connections.map(([from, to], index) => renderConnection(from, to, index))}
        </svg>

        {pmsElements.map(element => (
          <div
            key={`pms-${element.id}`}
            className="absolute cursor-pointer z-20"
            style={{
              left: `${element.x}px`,
              top: `${element.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#069af0] to-[#069af0] rounded-lg blur-[4px] group-hover:blur-[8px] transition-all duration-300 opacity-70" />
              <h1 className="relative bg-gray-900 font-medium text-primary text-lg px-4 py-2 rounded-lg border-2 border-primary   transition-all whitespace-nowrap  hover:scale-[1.09]">
                {element.label}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectionShow;
