'use client';

import ProgressCard from '../components/dashboard/ProgressCard';
import ActivityChart from '../components/dashboard/ActivityChart';
import Calendar from '../components/dashboard/Calendar';
import CourseList from '../components/courses/CourseList';
import MentorList from '../components/mentors/MentorList';

export default function Home() {
  return (
    <main className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <ProgressCard 
            title="Running Course"
            current={50}
            total={100}
            percentage={50}
          />
        </div>
        
        <div className="md:col-span-2">
          <ActivityChart />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <MentorList title="Monthly Mentors" />
        </div>
        
        <div>
          <Calendar />
        </div>
      </div>
      
      <CourseList title="Monthly Course" />
    </main>
  );
}