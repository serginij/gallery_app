const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const env = dotenv.config().parsed

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'linaria/loader',
            options: { sourceMap: dev }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: dev
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: dev
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '../src/components/')
    },
    extensions: ['.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      title: 'Gallery app'
    }),
    new webpack.DefinePlugin(envKeys),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
}
