/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        darkBlue: "hsl(233, 26%, 24%)",
        grayishBlue: "hsl(233, 8%, 62%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",
      },
    },
  },
  plugins: [],
};
