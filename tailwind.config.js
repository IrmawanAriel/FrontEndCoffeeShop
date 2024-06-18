/**  @type {import('tailwindcss').Config}  */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: { 
    
    extend: 
    {
      colors: {
        'oren': '#FF8906',
      },
      screens: {
        'sm': '640px',
  
        'md': '860px',
  
        'lg': '1024px',
  
        'xl': '1280px',
  
        '2xl': '1536px',
      },
    }, 
  },
  plugins: [],
}
