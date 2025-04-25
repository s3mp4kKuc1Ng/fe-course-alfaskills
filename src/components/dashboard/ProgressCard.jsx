'use client';

import React from 'react';

export default function ProgressCard({ title, current, total, percentage }) {
  const strokeWidth = 8;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="bg-black text-white rounded-lg p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      
      <div className="progress-circle w-32 h-32 mb-4">
        <svg width="100%" height="100%" viewBox="0 0 120 120">
          <circle 
            className="progress-circle-bg"
            cx="60" 
            cy="60" 
            r={radius}
            strokeWidth={strokeWidth} 
          />
          <circle 
            className="progress-circle-value"
            cx="60" 
            cy="60" 
            r={radius}
            strokeWidth={strokeWidth} 
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90, 60, 60)"
          />
          <text 
            x="60" 
            y="60" 
            textAnchor="middle" 
            dominantBaseline="middle" 
            fontSize="24"
            fontWeight="bold"
            fill="white"
          >
            {percentage}%
          </text>
        </svg>
      </div>
      
      <div className="flex items-center text-lg">
        <span className="font-bold text-primary">{current}</span>
        <span className="mx-2">/</span>
        <span>{total}</span>
        <span className="ml-2">{title}</span>
      </div>
    </div>
  );
}