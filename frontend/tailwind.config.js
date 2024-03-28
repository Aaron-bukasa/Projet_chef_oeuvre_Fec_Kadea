/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#051433',
        'secondary-blue': '#00194C',
        'sky-blue': '#0055ff',
      },
      screens : {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px"
      },
      backgroundImage: {
        'bg_temoignages': "url('/src/assets/images/bg_temoignages.jpg')",
      },
      fontFamily: {
        // 'lora': 'Lora, serif',
        // 'roboto': 'Roboto, sans-serif'
      },
    },
  },
  plugins: [],
}

