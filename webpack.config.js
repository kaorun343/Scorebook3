'use strict'

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'output.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'vue-template' },
      { test: /\.css$/, loaders: ['style', 'css?sourceMap'] },
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
  }
}
