'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src/js/app.jsx'),
  output: {
    path: path.join(__dirname, '/out'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: path.join(__dirname, 'src/js/components')
    }
  },
  watch: true,
  plugins: [new HtmlWebpackPlugin({ filename: 'index.html', template : './src/index.html', inject: 'head' })],
  module: {
    loaders: [
      {
        test : /\.jsx|js$/,
        loader : 'babel',
        query : {
          cacheDirectory: true,
          presets: ['es2015', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}