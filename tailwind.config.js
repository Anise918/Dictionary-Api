/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {

      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px', 
        
      },
      fontFamily: {
        custom: ['CustomFont', 'sans'],
        inter: ['Inter', 'sans'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        custom: {
          lightText: '#2D2D2D',
        darkText: '#FFF',

          'A445ED': '#A445ED',
          '1F1F1F': '#1F1F1F',
          '757575': '#757575',
          'F4F4F4': '#F4F4F4',
          '2D2D2D': '#2D2D2D',
          'FFF'  : '#FFF',
        },
      },
    },
  },
  plugins: [],
}
