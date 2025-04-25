'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CourseCard({ course }) {
  const { id, title, thumbnail, instructor, rating, reviewCount, schedule, color } = course;
  
  const cardBgColor = color === 'pink' ? 'bg-secondary-light' : 'bg-accent-blue';
  
  return (
    <Link href={`/courses/${id}`}>
      <div className={`rounded-lg overflow-hidden ${cardBgColor} h-full`}>
        <div className="relative h-40 w-full">
          <Image
            src={thumbnail || '/images/course-thumbnails/default.jpg'}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 w-8 h-8 relative mr-2">
              <Image
                src={instructor.avatar || '/images/mentors/default-avatar.jpg'}
                alt={instructor.name}
                className="rounded-full"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <div className="font-medium text-sm">{instructor.name}</div>
              <div className="text-xs text-gray-600">{instructor.role}</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">{rating}</span>
              <span className="text-xs text-gray-600 ml-1">({reviewCount} Review)</span>
            </div>
            
            <div className="text-xs font-medium">
              {schedule}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}