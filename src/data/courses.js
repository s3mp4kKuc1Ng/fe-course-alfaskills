// Dummy data for courses
// This will be replaced with actual API calls later

export const courses = [
    {
      id: 1,
      title: 'Cybersecurity Analyst',
      description: 'Learn to identify and protect against cyber threats',
      thumbnail: '/images/course-thumbnails/cybersecurity.jpg',
      schedule: '11 - 13 Nov',
      instructor: {
        id: 1,
        name: 'Jodi Kusumandita',
        avatar: '/images/mentors/jodi-kusumandita.jpg',
        role: 'Cybersecurity Expert'
      },
      rating: 4.5,
      reviewCount: 1200,
      totalLessons: 100,
      progress: 50,
      category: 'cybersecurity',
      color: 'pink'
    },
    {
      id: 2,
      title: 'Communication for Executives',
      description: 'Master effective communication strategies for leadership',
      thumbnail: '/images/course-thumbnails/communication.jpg',
      schedule: '13 - 14 Nov',
      instructor: {
        id: 3,
        name: 'PT PP Management',
        avatar: '/images/mentors/pp-management.jpg',
        role: 'Management Training'
      },
      rating: 4.5,
      reviewCount: 1200,
      totalLessons: 100,
      progress: 0,
      category: 'communication',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Business Essential for Managers',
      description: 'Essential business skills for modern managers',
      thumbnail: '/images/course-thumbnails/business.jpg',
      schedule: '18 - 20 Nov',
      instructor: {
        id: 4,
        name: 'Business Expert',
        avatar: '/images/mentors/business-expert.jpg',
        role: 'Business Consultant'
      },
      rating: 4.5,
      reviewCount: 950,
      totalLessons: 85,
      progress: 0,
      category: 'business',
      color: 'blue'
    },
    {
      id: 4,
      title: 'Developing Web Applications',
      description: 'Learn to build modern web applications',
      thumbnail: '/images/course-thumbnails/web-dev.jpg',
      schedule: '4 Nov',
      instructor: {
        id: 2,
        name: 'Han Alyasa Nugroho',
        avatar: '/images/mentors/han-alyasa.jpg',
        role: 'Web Dev Expert'
      },
      rating: 4.7,
      reviewCount: 1350,
      totalLessons: 120,
      progress: 0,
      category: 'development',
      color: 'pink'
    }
  ];
  
  // Function to simulate fetching courses from API
  export async function fetchCourses() {
    // This will be replaced with actual API call
    // Example:
    // const response = await fetch('/api/courses');
    // const data = await response.json();
    // return data;
    
    // For now, just return the dummy data with a delay to simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(courses);
      }, 500);
    });
  }
  
  export async function fetchCourseById(id) {
    // This will be replaced with actual API call
    // Example:
    // const response = await fetch(`/api/courses/${id}`);
    // const data = await response.json();
    // return data;
    
    // For now, just return the matching course from dummy data
    return new Promise((resolve) => {
      setTimeout(() => {
        const course = courses.find(c => c.id === Number(id));
        resolve(course || null);
      }, 300);
    });
  }