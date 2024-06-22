/** 
 * @type {import('tailwindcss').Config} 
 */
module.exports = {
  content: ["./pages/*.{html,js}","*.html"],
  theme: { 
    
    extend: 
    {
      colors: {
        'oren': '#FF8906',
        'gradblack' : 'linear-gradient(180deg, #000000 0%, #000000 100%)',
      },
      screens: {
        'sm': '640px',
  
        'md': '860px',
  
        'lg': '1076px',
  
        'xl': '1280px',
  
        '2xl': '1536px',
      },
    }, 
  },
  plugins: [],
}
