var webpack = require('webpack');
var path = require('path');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: {
    bundle: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loader: 'babel',
        exclude: [nodeModulesDir] 
      }
    ]
  }
};

module.exports = config;