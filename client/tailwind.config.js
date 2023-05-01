module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'nav': '#075AAA',
        'bg': '#01295C',
      },
      textColor: {
        'title': '#EFE9E5',
      },
      fontFamily: {
        'microsoft-yahei': ["Microsoft YaHei", "微软雅黑", "sans-serif"],
      },
      fontSize: {
        '32': '32px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
}
