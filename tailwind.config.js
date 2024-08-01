
module.exports = {
  content: [
    "./*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        farsi : ['Roboto Slap']
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

