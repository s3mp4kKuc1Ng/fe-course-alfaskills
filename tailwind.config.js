/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#00E9C0', // Main turquoise color from the logo
            light: '#B2F5E8',
            dark: '#00C4A2'
          },
          secondary: {
            DEFAULT: '#FF6B6B', // Light red color for calendar highlights
            light: '#FFD1D1',
          },
          accent: {
            blue: '#7EC8FF', // Light blue for calendar highlights
            red: '#FF6B6B'
          },
          neutral: {
            background: '#F8F9FB',
            card: '#FFFFFF',
            dark: '#333333',
            gray: '#666666',
            light: '#EEEEEE',
          }
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        boxShadow: {
          card: '0 4px 10px rgba(0, 0, 0, 0.05)',
        }
      },
    },
    plugins: [],
  }