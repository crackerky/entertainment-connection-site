import React from 'react';

const PathAnimation = () => {
  return (
    <div className="flex justify-center items-center min-h-[60px]">
      <svg width="320" height="50" viewBox="0 0 320 50" className="max-w-full">
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6">
              <animate attributeName="stop-color" values="#8B5CF6;#3B82F6;#06B6D4;#8B5CF6" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#3B82F6">
              <animate attributeName="stop-color" values="#3B82F6;#06B6D4;#8B5CF6;#3B82F6" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#06B6D4">
              <animate attributeName="stop-color" values="#06B6D4;#8B5CF6;#3B82F6;#06B6D4" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main text path */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="2"
          fontSize="24"
          fontWeight="800"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="-0.02em"
          filter="url(#glow)"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="select-none"
        >
          Entertainment Connect
          <animate
            attributeName="stroke-dashoffset"
            values="1000;0;0;0;1000"
            dur="6s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.42 0 0.58 1;0 0 1 1;0 0 1 1;0.42 0 0.58 1"
            keyTimes="0;0.3;0.6;0.85;1"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;1;0"
            dur="6s"
            repeatCount="indefinite"
          />
        </text>
        
        {/* Background text for depth */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="url(#pathGradient)"
          fontSize="24"
          fontWeight="800"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="-0.02em"
          opacity="0.1"
          className="select-none"
        >
          Entertainment Connect
        </text>
      </svg>
    </div>
  );
};

export default PathAnimation;