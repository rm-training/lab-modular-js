const path = require('path');

module.exports = {
  entry: './public/js/app.js',
  output: {
    filename: 'all.js',
    path: path.resolve(__dirname, 'generated/js')
  }
};
