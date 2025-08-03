// tailwind.config.js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
       animation: {
         'spin-fast': 'spin 0.5s linear infinite', // 0.5s মানে দ্রুত স্পিন
      },
    },
  },
  plugins: [],
};
