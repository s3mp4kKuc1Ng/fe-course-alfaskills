'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  
  const menuItems = [
    { id: 'overview', label: 'Overview', path: '/', icon: 'grid' },
    { id: 'courses', label: 'Courses', path: '/courses', icon: 'book' },
    { id: 'mentors', label: 'Mentors', path: '/mentors', icon: 'users' }
  ];

  return (
    <aside className="bg-white w-64 min-h-screen shadow-lg flex flex-col">
      <div className="p-5">
        <Link href="/">
          <div className="flex items-center">
            <Image 
              src="/logos/alfaskills-logo.svg" 
              alt="AlfaSkills Academy" 
              width={180} 
              height={40} 
              priority
            />
          </div>
        </Link>
      </div>
      
      <nav className="mt-8 flex-1">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link 
                href={item.path}
                className={`flex items-center p-4 text-gray-600 hover:bg-neutral-background hover:border-l-4 hover:border-primary
                  ${pathname === item.path ? 'bg-neutral-background border-l-4 border-primary text-primary font-medium' : ''}`}
              >
                <span className="w-6 h-6 mr-3">
                  {renderIcon(item.icon)}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-5 text-xs text-gray-500">
        <p>© 2025 AlfaSkills Academy</p>
        <p>"Where Learning Knows No Limits"</p>
      </div>
    </aside>
  );
}

// Simple icon renderer (in production you'd use a proper icon library)
function renderIcon(name) {
  switch (name) {
    case 'grid':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      );
    case 'book':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      );
    case 'users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      );
    default:
      return null;
  }
}