const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const merge = require('webpack-merge');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const common = require('./common.js');
const envFile = require('../env/dev');

const { NODE_ENV } = process.env;

module.exports = merge(common, {
  target: 'web',
  mode: 'development',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        CONFIG: JSON.stringify(envFile),
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),
    new WebpackBar({ name: 'client', color: 'orange' }),
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
            loader: 'less-loader', // compiles Less to CSS
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dgram: 'empty',
    child_process: 'empty',
  },
});
