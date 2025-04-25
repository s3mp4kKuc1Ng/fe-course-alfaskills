'use client';

import { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import { fetchCourses } from '../../data/courses';

export default function CourseList({ title, showControls = true }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        // This will later be replaced with an API call
        const coursesData = await fetchCourses();
        setCourses(coursesData);
      } catch (err) {
        console.error('Error loading courses:', err);
        setError('Failed to load courses');
      } finally {
        setLoading(false);
      }
    };
    
    loadCourses();
  }, []);
  
  if (loading) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{title || 'Monthly Course'}</h2>
        </div>
        <div className="animate-pulse space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((idx) => (
              <div key={idx} className="bg-gray-200 h-64 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{title || 'Monthly Course'}</h2>
        </div>
        <div className="text-red-500 text-center py-8">
          {error}
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{title || 'Monthly Course'}</h2>
        
        {showControls && (
          <div className="flex space-x-2">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="h-full">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}