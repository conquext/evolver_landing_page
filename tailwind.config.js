/**
 * We add all .html files to the purge array here.
 * When NODE_ENV is set to 'production', tailwind will
 * automatically purge these files and removed unused css
 */

module.exports = {
  purge: ['./**/*.html'],
  theme: {
    extend: {
      width: {
        '15rem': '15rem',
        '26rem': '26rem'
      }
    }
  },
  variants: {},
  plugins: []
};
