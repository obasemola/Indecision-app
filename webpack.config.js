const path = require('path');


module.exports = {
  entry: './src/some.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
}