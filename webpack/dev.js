const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const common = require('./common.js');
const envFile = require('../env/dev');

const { NODE_ENV} = process.env;

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: ['./public/'],
    historyApiFallback: {
      disableDotRule: true,
    },
    disableHostCheck: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        CONFIG: JSON.stringify(envFile),
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: true,
              modules: {
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
    ],
  },
});
