// require('dotenv/config');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const { resolve } = require('path');

const publicPath = process.env.PUBLIC_PATH || '/';

const context = resolve(__dirname, 'src');

module.exports = {
  target: ['web', 'es5'],
  output: {
    publicPath,
    path: resolve(__dirname, 'dist/'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: context,
        options: {
          presets: ['@babel/preset-react'],
          plugins: [
            [
              '@babel/transform-runtime',
              {
                regenerator: true,
              },
            ],
          ],
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          publicPath,
        },
      },
    ],
  },
  plugins: [
    new DotenvPlugin(),
    new HtmlPlugin({
      inject: true,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      title: 'Weather App',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    progress: true,
    compress: true,
  },
};
