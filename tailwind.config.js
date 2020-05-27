module.exports = {
  purge: [
    './site/**/*.njk'
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Spinnaker', 'sans-serif']
      },
      height: {
        '80/100': '80vh'
      },
      maxHeight: {
        '3/4': '75vh'
      },
      minHeight: {
        '1/2': '50vh'
      },
      colors: {
        'beige-100': '#fff9f4',
        'beige-200': '#f5ede5',
        'beige-300': '#eae0d6',
        'beige-400': '#e2d3c3',
        'beige-500': '#d0c0af',
        'beige-600': '#ad9d8c'
      }
    }
  }
}
