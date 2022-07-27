let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/js.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/src/js',
  },
  watch: true,
  devtool: 'source-map',
  module:{}
};