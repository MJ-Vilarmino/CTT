/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        primary: "#51e9ef",
        secondary: "#39b0a8",
        darkGreen: "#2a4745",
        darkGray: "#1c1c1c",
        whiteLight: "#ffffff",
        lightGray: "#5c5b5b",
        lighterGray: "#f5f5f5",
      },

      gradientColorStopPositions: {
        33: '30%',
      },

      fontFamily: {
        poppins: ['Poppins', 'san-serif'],
      },

      fontSize: {
        huge: 'clamp(2.5rem, 6vw, 4.5rem)',
        medium: 'clamp(1.5rem, 4vw, 3.5rem)',
      },
    },

    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    }
  },
  plugins: [],
}

