const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }]
    },
    {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      },

      {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true,
          localIdentName: '[name]_[local]_[hash:base64:5]'
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }
      ]
    }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}
