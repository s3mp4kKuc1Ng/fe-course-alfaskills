'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [notificationCount] = useState(1);
  const [username] = useState('Smartfren');
  
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-semibold">Hi, "{username}"</h1>
        <p className="text-gray-600 mt-1">
          Explore our range of training programs and find the perfect fit
          for your professional development needs.
        </p>
      </div>
      
      <div className="flex items-center">
        {/* Notification Bell */}
        <div className="relative mr-6">
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>
          {notificationCount > 0 && (
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </div>
        
        {/* User Profile */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-md overflow-hidden border-2 border-primary">
            <Image 
              src="/logos/smartfren-logo.svg" 
              alt="Smartfren" 
              width={40} 
              height={40} 
            />
          </div>
        </div>
      </div>
    </header>
  );
}