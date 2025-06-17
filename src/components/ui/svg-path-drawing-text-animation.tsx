'use client'

import React, { useState } from 'react';

const PathAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex justify-center items-center min-h-[60px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
            <feGaussianBlur stdDeviation={isHovered ? "3" : "2"} result="coloredBlur">
              <animate 
                attributeName="stdDeviation" 
                values={isHovered ? "2;3;2" : "2"} 
                dur="0.3s" 
                fill="freeze"
              />
            </feGaussianBlur>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Animated background pattern */}
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="url(#pathGradient)" opacity="0.2">
              <animate attributeName="r" values="1;2;1" dur="3s" repeatCount="indefinite" />
            </circle>
          </pattern>
        </defs>

        {/* Background decoration */}
        <rect x="0" y="0" width="320" height="50" fill="url(#grid)" opacity={isHovered ? 0.5 : 0} className="transition-opacity duration-300" />
        
        {/* Main text path */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth={isHovered ? "2.5" : "2"}
          fontSize="24"
          fontWeight="800"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="-0.02em"
          filter="url(#glow)"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="select-none transition-all duration-300"
          transform={isHovered ? "scale(1.05)" : "scale(1)"}
          style={{ transformOrigin: "center" }}
        >
          Entertainment Connect
          <animate
            attributeName="stroke-dashoffset"
            values="1000;0;0;0;1000"
            dur={isHovered ? "4s" : "6s"}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.42 0 0.58 1;0 0 1 1;0 0 1 1;0.42 0 0.58 1"
            keyTimes="0;0.3;0.6;0.85;1"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;1;0"
            dur={isHovered ? "4s" : "6s"}
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
          opacity={isHovered ? "0.2" : "0.1"}
          className="select-none transition-opacity duration-300"
          transform={isHovered ? "scale(1.05)" : "scale(1)"}
          style={{ transformOrigin: "center" }}
        >
          Entertainment Connect
        </text>

        {/* Decorative particles on hover */}
        {isHovered && (
          <g>
            <circle cx="40" cy="25" r="2" fill="url(#pathGradient)" opacity="0">
              <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
              <animate attributeName="cy" values="25;15;25" dur="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="280" cy="25" r="2" fill="url(#pathGradient)" opacity="0">
              <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0.5s" />
              <animate attributeName="cy" values="25;35;25" dur="1s" repeatCount="indefinite" begin="0.5s" />
            </circle>
          </g>
        )}
      </svg>
    </div>
  );
};

export default PathAnimation;