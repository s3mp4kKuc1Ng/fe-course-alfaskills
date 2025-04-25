'use client';

import { useState, useEffect } from 'react';
import MentorCard from './MentorCard';
import { fetchMentors } from '../../data/mentors';

export default function MentorList({ title, showControls = true }) {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadMentors = async () => {
      try {
        setLoading(true);
        // This will later be replaced with an API call
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
  
  if (loading) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{title || 'Monthly Mentors'}</h2>
        </div>
        <div className="animate-pulse space-y-4">
          {[1, 2].map((idx) => (
            <div key={idx} className="bg-gray-200 h-24 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{title || 'Monthly Mentors'}</h2>
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
        <h2 className="text-xl font-semibold">{title || 'Monthly Mentors'}</h2>
        
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
      
      <div className="space-y-4">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}