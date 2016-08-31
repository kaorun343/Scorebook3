'use strict'

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/assets',
    publicPath: './assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'vue-template' },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: { limit: 10000, mimetype: 'application/font-woff' }
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: { limit: 10000, mimetype: 'application/font-woff' }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: { limit: 10000, mimetype: 'application/octet-stream' }
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url',
        query: { limit: 10000, mimetype: 'image/svg+xml' }
      }
    ]
  },
  target: 'electron-renderer'
}
