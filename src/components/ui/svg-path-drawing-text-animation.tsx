import React from 'react';

const PathAnimation = () => {
  return (
    <div className="flex justify-center items-center min-h-[60px]">
      <svg width="400" height="60" viewBox="0 0 400 60" className="max-w-full">
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="1.5"
          fontSize="28"
          fontWeight="bold"
          fontFamily="Inter, sans-serif"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          Entertainment Connect
          <animate
            attributeName="stroke-dashoffset"
            values="1000;0;0;0;1000"
            dur="6s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.25 0.1 0.25 1;0 0 1 1;0 0 1 1;0.25 0.1 0.25 1"
            keyTimes="0;0.4;0.6;0.9;1"
          />
        </text>
      </svg>
    </div>
  );
};

export default PathAnimation;