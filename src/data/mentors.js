// Dummy data for mentors
// This will be replaced with actual API calls later

export const mentors = [
    {
      id: 1,
      name: 'Jodi Kusumandita',
      avatar: '/images/mentors/jodi-kusumandita.jpg',
      role: 'Cybersecurity Expert',
      bio: 'Experienced cybersecurity professional with over 10 years in the field.',
      courses: [1],
      rating: 4.5,
      reviewCount: 1200,
      totalCourses: 8,
      availability: ['Monday', 'Wednesday', 'Friday'],
      contact: {
        email: 'jodi.k@example.com',
        linkedin: 'linkedin.com/in/jodi-kusumandita'
      }
    },
    {
      id: 2,
      name: 'Han Alyasa Nugroho',
      avatar: '/images/mentors/han-alyasa.jpg',
      role: 'Web Dev Expert',
      bio: 'Full-stack developer specializing in modern web technologies.',
      courses: [4],
      rating: 4.5,
      reviewCount: 1200,
      totalCourses: 12,
      availability: ['Tuesday', 'Thursday', 'Saturday'],
      contact: {
        email: 'han.alyasa@example.com',
        linkedin: 'linkedin.com/in/han-alyasa'
      }
    },
    {
      id: 3,
      name: 'PT PP Management',
      avatar: '/images/mentors/pp-management.jpg',
      role: 'Management Training',
      bio: 'Corporate training specialists with expertise in leadership development.',
      courses: [2],
      rating: 4.5,
      reviewCount: 980,
      totalCourses: 15,
      availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      contact: {
        email: 'training@pp-management.com',
        website: 'pp-management.com'
      }
    },
    {
      id: 4,
      name: 'Business Expert',
      avatar: '/images/mentors/business-expert.jpg',
      role: 'Business Consultant',
      bio: 'Expert in business strategy and management practices.',
      courses: [3],
      rating: 4.7,
      reviewCount: 850,
      totalCourses: 9,
      availability: ['Wednesday', 'Thursday', 'Friday'],
      contact: {
        email: 'contact@businessexpert.com',
        website: 'businessexpert.com'
      }
    }
  ];
  
  // Function to simulate fetching mentors from API
  export async function fetchMentors() {
    // This will be replaced with actual API call
    // Example:
    // const response = await fetch('/api/mentors');
    // const data = await response.json();
    // return data;
    
    // For now, just return the dummy data with a delay to simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mentors);
      }, 500);
    });
  }
  
  export async function fetchMentorById(id) {
    // This will be replaced with actual API call
    // Example:
    // const response = await fetch(`/api/mentors/${id}`);
    // const data = await response.json();
    // return data;
    
    // For now, just return the matching mentor from dummy data
    return new Promise((resolve) => {
      setTimeout(() => {
        const mentor = mentors.find(m => m.id === Number(id));
        resolve(mentor || null);
      }, 300);
    });
  }