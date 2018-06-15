// let webpack = require('webpack')
let resolve = require('path').resolve

module.exports = {
  mode: 'production',

  watch: true,

  entry: resolve(__dirname, './src/index.js'),

  output: {
    filename: 'main.js',
    path: resolve(__dirname, './dist/')
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }]
    }]

  }

}