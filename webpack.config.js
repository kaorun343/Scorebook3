'use strict'

const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/renderer/app/app.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.html$/, loader: 'vue-template-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract(['css-loader']) },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']) },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: { limit: 10000, mimetype: 'application/font-woff' }
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: { limit: 10000, mimetype: 'application/font-woff' }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: { limit: 10000, mimetype: 'application/octet-stream' }
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: { limit: 10000, mimetype: 'image/svg+xml' }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HTMLWebpackPlugin({
      template: './src/renderer/app/template.ejs'
    })
  ],
  target: 'electron-renderer'
}
