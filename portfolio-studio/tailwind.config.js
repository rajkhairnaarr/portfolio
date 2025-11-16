/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero-top': '#1b1122',
        'hero-mid': '#6c86a6',
        'hero-bottom': '#eae2c5',
        'hero-bottom-soft': '#f6e8d0',
        'accent': '#f08b5a',
        'footer-deep': '#0b0404',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      },
      maxWidth: {
        'content': '1200px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #1b1122 0%, #6c86a6 35%, #eae2c5 70%, #f6e8d0 100%)',
        'cta-gradient': 'linear-gradient(180deg, rgba(240,139,90,1) 0%, rgba(238,150,100,0.8) 50%, rgba(25,10,10,1) 100%)',
      },
    },
  },
  plugins: [],
}
