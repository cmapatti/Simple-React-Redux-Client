var webpack = require('webpack');

var config = {
  devtool: 'source-map',
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/main.js'			
    ]
  },
  output: {
    publicPath: 'http://localhost:8080/',
    filename: '/js/[name].js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;