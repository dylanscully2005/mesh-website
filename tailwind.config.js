/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mesh: {
          brand: '#1800ad',       // Your official logo color
          brandHover: '#290df2',  // Slightly lighter for button hovers
          bg: '#1E1F22',          // Discord-style deep dark background
          panel: '#2B2D31',       // Discord-style elevated panel color
          text: '#F2F3F5',        // Crisp off-white for headings
          muted: '#B5BAC1',       // Soft grey for paragraphs
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}