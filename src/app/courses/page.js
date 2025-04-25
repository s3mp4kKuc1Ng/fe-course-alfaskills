'use client';

import { useState, useEffect } from 'react';
import CourseCard from '../../components/courses/CourseCard';
import { fetchCourses } from '../../data/courses';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true);
        // This will later be replaced with an API call with filters
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
  
  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(course => course.category === filter);
  
  // Categories derived from available courses
  const categories = ['all', ...new Set(courses.map(course => course.category))];
  
  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold mb-2">All Courses</h1>
        <p className="text-gray-600">
          Explore our comprehensive range of courses designed to enhance your professional skills.
        </p>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-card">
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm ${
                  filter === category 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {loading ? (
          <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="bg-gray-200 h-64 rounded-lg"></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-red-500 text-center py-8">
            {error}
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No courses found for the selected category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="h-full">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}