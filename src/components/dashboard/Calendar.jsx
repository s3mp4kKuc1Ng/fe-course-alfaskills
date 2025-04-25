'use client';

import { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { getEventsForDate } from '../../data/calendar';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    const firstDayOfMonth = startOfMonth(currentDate);
    const lastDayOfMonth = endOfMonth(currentDate);
    const daysInMonth = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });
    
    setCalendarDays(daysInMonth);
  }, [currentDate]);
  
  useEffect(() => {
    // Get events for the selected day
    const dayEvents = getEventsForDate(selectedDay);
    setEvents(dayEvents);
  }, [selectedDay]);
  
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };
  
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };
  
  const getDayClassNames = (day) => {
    const baseClasses = "calendar-day cursor-pointer";
    
    if (isSameDay(day, new Date())) {
      return `${baseClasses} today`;
    }
    
    // Check for events on this day and add appropriate highlight
    const dayEvents = getEventsForDate(day);
    if (dayEvents.length > 0) {
      // Use the color of the first event for simplicity
      const eventColor = dayEvents[0].color;
      return `${baseClasses} highlight-${eventColor}`;
    }
    
    return baseClasses;
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Monthly Programs</h3>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">
        "Stay Ahead with Our Monthly Skill-Building Programs."
      </p>
      
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        
        <h4 className="font-medium">
          {format(currentDate, 'MMMM yyyy')}
        </h4>
        
        <button onClick={nextMonth} className="p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2 text-center text-xs text-gray-500">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
          <div key={idx}>{day}</div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-4">
        {calendarDays.map((day, idx) => (
          <div 
            key={idx}
            className={getDayClassNames(day)}
            onClick={() => handleDayClick(day)}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
      
      <div className="mt-4">
        {events.length > 0 ? (
          <div className="space-y-2">
            {events.map((event) => (
              <div 
                key={event.id}
                className={`p-2 rounded text-sm ${
                  event.color === 'red' ? 'bg-secondary-light' : 'bg-accent-blue'
                }`}
              >
                <div className="font-medium">{event.title}</div>
                <div className="text-xs">
                  {format(new Date(event.startDate), 'd MMM')} - {format(new Date(event.endDate), 'd MMM')}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-3 text-gray-500 text-sm">
            No events scheduled for {format(selectedDay, 'd MMMM')}
          </div>
        )}
      </div>
    </div>
  );
}