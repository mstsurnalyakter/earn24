module.exports = {
  content: [
    './index.html', 
    './src/**/*.{js,jsx,ts,tsx}',  // Ensure your paths are correct
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};
