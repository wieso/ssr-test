const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const merge = require('webpack-merge');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const common = require('./common.js');
const envFile = require('../env/prod');
const { NODE_ENV } = process.env;

module.exports = merge(common, {
  target: 'node',
  externals: [nodeExternals()],
  mode: 'development',

  entry: './src/server/index.ts',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'index.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        CONFIG: JSON.stringify(envFile),
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),
    new MiniCssExtractPlugin({ filename: '[hash].bundle.css' }),
    new WebpackBar({ name: 'server', color: 'green' }),
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
          'isomorphic-style-loader',
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
});
