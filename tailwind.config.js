/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '42': '46rem', 
      },
      width : {
        '42' : '38rem',
      },
      boxShadow: {
        'shadow1': 'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px',
        'shadow2': 'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px',
        'shadow3': 'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px',
      },
      animation: {
        swirl: 'swirl 2s infinite',
      },
      keyframes: {
        swirl: {
          '0%': {
            color: 'rgb(244 114 182)',
          },
          '50%': {
            color: 'rgb(14 116 144)', 
          },
          '100%': {
            color: 'rgb(244 114 182)', 
          },
        },
      },
    },
  },
  plugins: [],
};
