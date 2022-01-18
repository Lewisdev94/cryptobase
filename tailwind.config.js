module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"

  ],
  theme: {
    backgroundImage: {
      'test-img': "url('/src/images/test-img.jpg')",
      'tiles-pattern': "url('/src/images/oriental-tiles.png')",
      'dark-web': "url('/src/images/webb-dark.png')",
      'light-web': "url('/src/images/webb.png')",
      'bars': "url('/src/images/bars.jpg')",
      'blender-edit': "url('/src/images/blender-edit.jpg')",
    },
    extend: {
      colors: {
        "primary-col": "var(--primary-col)",
        "secondary-col": "var(--secondary-col)",
        "accent-col": "var(--accent-col)"
      },
      transitionProperty: {
        'width': 'width'
      }

    },
  },
  plugins: [],
}
