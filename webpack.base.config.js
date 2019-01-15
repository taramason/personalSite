var path = require ('path');
var HtmlWebpackPlugin = require ('html-webpack-plugin');
var combineLoaders = require ('webpack-combine-loaders');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader?classPrefix'
      // },
      {
        test: /\.(js)$/,
        use:'babel-loader'
      },
      { test: /\.ts$/, use: 'ts-loader' },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ])
      }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}
