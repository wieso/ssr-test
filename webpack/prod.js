const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./common.js');
const envFile = require('../env/prod');
const { NODE_ENV } = process.env;

module.exports = merge(common, {
  mode: 'production',

  optimization: {
    minimizer: [new TerserPlugin()],
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
    new MiniCssExtractPlugin({ filename: '[hash].bundle.css' }),
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
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
