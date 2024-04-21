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
        'focus-color': '#ff764c',
        'secondary-color': '#f8f9fa',
        "btn-color": '#003366'
      },
      screens : {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1386px"
      },
      backgroundImage: {
        'bg_temoignages': "url('/src/assets/images/bg_temoignages.jpg')",
        'bg_blog': "url('/src/assets/images/bg_blog.jpg')",
        'bg_banner': "url('/src/assets/images/bg_banner.jpg')",
        'bg_services': "url('src/assets/images/bg_services.png')"
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)',
      },
      fontFamily: {
        // 'lora': 'Lora, serif',
        // 'roboto': 'Roboto, sans-serif'
      },
    },
  },
  plugins: [],
}

