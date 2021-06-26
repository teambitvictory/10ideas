const path = require('path');
const webpack = require('webpack');

const appDirectory = path.resolve(__dirname);

const babelLoaderConfiguration = {
  test: /\.jsx?$/,
  include: [
    path.resolve(appDirectory, 'node_modules/react-native-elements'),
    path.resolve(appDirectory, 'node_modules/react-native-vector-icons'),
    path.resolve(appDirectory, 'node_modules/react-native-ratings'),
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets: ['module:metro-react-native-babel-preset'],
      plugins: ['react-native-web'],
    },
  },
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg|ttf)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
      esModule: false,
    },
  },
};

module.exports = {
  entry: [
    path.resolve(appDirectory, 'index.web.jsx'),
  ],

  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'dist'),
  },

  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
    ],
  },

  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.jsx', '.jsx', '.web.js', '.js'],
  },
};
