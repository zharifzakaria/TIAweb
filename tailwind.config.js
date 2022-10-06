/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "2260px",
        xl: "2260px",
        "2xl": "2260px",
      },
    },
    fontFamily: {
      Poppins: 'Poppins, sans-serif',
      Verdana: 'Verdana, sans-serif'
    },
    extend: {
      colors: {
        "tia-red": "#F54135",
        "tia-blue": "#1E397E",
        "tia-lightblue": "#6CA7FF",
        "tia-orange": "#FFAB2E",
        "tia-green": "#C8D288",
        "tia-grey": "#FAFAFA",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slidein: {
          "0%": {
            opacity: "0",
            transform: "translateY(250px)",
          },
          "60%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadein: "fadein 1s ease-in-out",
        slidein: "slidein 1s ease",
        slideindelay: "slidein 1.2s ease",
        slideindelay2: "slidein 1.4s ease"
      },
    },
  },
  plugins: [],
};
