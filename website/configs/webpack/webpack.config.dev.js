/* eslint-disable global-require, comma-dangle */

import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import paths from '../paths';

export default (entry => ({
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    alias: {
      'app-config': `${paths.appConfigs}/app/dev.js`,
      'videojs-flash': `${paths.appNodeModules}/videojs-flash/dist/videojs-flash.min.js`,
      'videojs-contrib-hls': `${paths.appNodeModules}/videojs-contrib-hls/dist/videojs-contrib-hls.min.js`,
      webworkify: 'webworkify-webpack-dropin'
    },
  },
  // more info:https://webpack.js.org/guides/development/#using-source-maps and https://webpack.js.org/configuration/devtool/
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // must be first entry to properly set public path
    './configs/webpack/webpack-public-path',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, `../../src/entrypoints/${entry}/index.jsx`) // Defining path seems necessary for this to work consistently on Windows machines.
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'assets/img', to: 'img/' },
    ]),
    new webpack.DefinePlugin({
      // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // Create HTML file that includes references to bundled CSS and JS.
    new HtmlWebpackPlugin({
      title: entry.toUpperCase() + ' dev',
      template: `src/entrypoints/${entry}/index.ejs`,
      favicon: `src/entrypoints/${entry}/favicon.ico`,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: ['file-loader']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff'
            }
          }
        ]
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/octet-stream'
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml'
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')
              ],
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'src', 'scss')],
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
}))
