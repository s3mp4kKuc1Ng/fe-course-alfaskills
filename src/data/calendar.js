// Calendar events data
// This will be replaced with actual API calls later

export const calendarEvents = [
    {
      id: 1,
      title: 'Cybersecurity Analyst',
      startDate: '2024-11-11',
      endDate: '2024-11-13',
      type: 'course',
      color: 'red'
    },
    {
      id: 2,
      title: 'Communication for Executives',
      startDate: '2024-11-13',
      endDate: '2024-11-14',
      type: 'course',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Business Essential for Managers',
      startDate: '2024-11-18',
      endDate: '2024-11-20',
      type: 'course',
      color: 'blue'
    },
    {
      id: 4,
      title: 'Developing Web Applications',
      startDate: '2024-11-04',
      endDate: '2024-11-04',
      type: 'course',
      color: 'red'
    }
  ];
  
  // Function to simulate fetching calendar events
  export async function fetchCalendarEvents(year, month) {
    // This will be replaced with actual API call
    // Example:
    // const response = await fetch(`/api/calendar?year=${year}&month=${month}`);
    // const data = await response.json();
    // return data;
    
    // For now, just return the dummy data with a delay to simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // Filter events for the specified month if needed
        const events = calendarEvents.filter(event => {
          const eventDate = new Date(event.startDate);
          return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
        });
        
        resolve(events);
      }, 300);
    });
  }
  
  // Function to get events for a specific date
  export function getEventsForDate(date) {
    // Convert date strings to Date objects for comparison
    const dateToCheck = new Date(date);
    dateToCheck.setHours(0, 0, 0, 0);
    
    return calendarEvents.filter(event => {
      const startDate = new Date(event.startDate);
      startDate.setHours(0, 0, 0, 0);
      
      const endDate = new Date(event.endDate);
      endDate.setHours(0, 0, 0, 0);
      
      return dateToCheck >= startDate && dateToCheck <= endDate;
    });
  }