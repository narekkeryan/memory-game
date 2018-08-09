const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
            test: /\.js?/,
            include: path.resolve(__dirname, './src'),
            loader: 'babel-loader',
            query: {
                presets: ['react']
            }
        },
        {
            test: /\.(png|jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
            use: [
                {
                    loader: 'file-loader',
                    options: {}
                }
            ]
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};