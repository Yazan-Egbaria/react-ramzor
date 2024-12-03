/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        custom: "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
};
