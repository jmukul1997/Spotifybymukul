module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      visibility: ['hover', 'focus'], 
      colors: {
        'middle' : '#121212',
        'card' : '#181818' ,
        'green': '#1DB954' , 
        // 'hover' : '#0' ,
        'spotify-light' : '#ABABAB',
        'spotify-dark' : '#000000',
        'bottom': 'hsl(0deg 0% 16%)',
        primary: '#FF6363',
        secondary: {  
          100: '#E2E2D5' , //LIGHT
          200: '#888883'  //DARK
        }
      },
      spacing: {
        '14' : '3.5rem' ,
        '22' : '5.5rem' ,
        '72' : '18rem' ,
        '200' : '30rem' 
      },
      lineHeight: {
        'extra-loose': '2.5',
      },
      fontFamily: {
        body : ['Encode Sans Semi Condensed']
      } ,
      fontSize: {
        ss: '10px',
      }
    },
  },
  variants: {},
  plugins: [],
}
