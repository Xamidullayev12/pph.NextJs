








module.exports = {
    purge: [],
    darkMode: false, 
    theme: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      extend: {},
      colors: {
        'blue' : '#2E57EA',
        'dark-blue' : '1E3896',
        'light' : '#fff',
        'dark' : '1F1F1F',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }