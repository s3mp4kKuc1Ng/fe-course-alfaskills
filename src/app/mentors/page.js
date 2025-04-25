'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchMentors } from '../../data/mentors';

export default function MentorsPage() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const loadMentors = async () => {
      try {
        setLoading(true);
        // This will later be replaced with an API call with search
        const mentorsData = await fetchMentors();
        setMentors(mentorsData);
      } catch (err) {
        console.error('Error loading mentors:', err);
        setError('Failed to load mentors');
      } finally {
        setLoading(false);
      }
    };
    
    loadMentors();
  }, []);
  
  const filteredMentors = searchTerm 
    ? mentors.filter(mentor => 
        mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.role.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : mentors;
  
  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Our Mentors</h1>
        <p className="text-gray-600">
          Connect with industry experts who will guide you through your learning journey.
        </p>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-card">
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search mentors by name or expertise..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-3 top-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        {loading ? (
          <div className="animate-pulse space-y-4">
            {[1, 2, 3, 4].map((idx) => (
              <div key={idx} className="bg-gray-200 h-24 rounded-lg"></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-red-500 text-center py-8">
            {error}
          </div>
        ) : filteredMentors.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No mentors found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMentors.map((mentor) => (
              <div key={mentor.id} className="bg-white rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 h-20 relative mr-4">
                    <Image
                      src={mentor.avatar || '/images/mentors/default-avatar.jpg'}
                      alt={mentor.name}
                      className="rounded-full"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg">{mentor.name}</h3>
                    <p className="text-gray-600 mb-2">{mentor.role}</p>
                    
                    <p className="text-sm text-gray-700 mb-3">{mentor.bio}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {mentor.availability.map((day, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded-full">{day}</span>
                      ))}
                    </div>
                    
                    <div className="flex items-center mt-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium">{mentor.rating}</span>
                      <span className="text-xs text-gray-600 ml-1">({mentor.reviewCount} Reviews)</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm">{mentor.totalCourses} Courses</span>
                    </div>
                  </div>
                  
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}