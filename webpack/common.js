const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[hash].bundle.js',
    publicPath: '/',
  },

  resolve: {
    modules: ['./src', './node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  plugins: [
    new MomentLocalesPlugin({ localesToKeep: ['ru'] }),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: [
          path.resolve(__dirname, '../src'),
        ],
        use: [
          {
            loader: 'ts-loader',
            options: { allowTsInNodeModules: true },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader',
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=10000&mimetype=image/png',
      },
      {
        test: /\.css$/,
        include: [/node_modules/],
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
