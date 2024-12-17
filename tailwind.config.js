/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        ck_blue: "#083a4b",
        ck_grey: "#555555",
        ck_light_grey: "#aaaaaa",
        ck_red: "#e9496f",
        ck_yellow: "#fed169",
      },
      width: {
        "half-minus-2.5": "calc(50% - 2.5rem)",
      },
      fontFamily: {
        dmm: ["DMM", "sans-serif"],
        dmr: ["DMR", "sans-serif"],
        mi: ["MI", "sans-serif"],
        mm: ["MM", "sans-serif"],
      },
    },
  },
  plugins: [],
};
