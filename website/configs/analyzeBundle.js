/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpackConfig from './webpack/webpack.config.prod';

const ENTRY = process.env.ENTRY || null

if (ENTRY) {
  const config = webpackConfig(ENTRY);

  config.plugins.push(new BundleAnalyzerPlugin());

  process.env.NODE_ENV = 'production';

  const compiler = webpack(config);

  compiler.run((error, stats) => {
    if (error) {
      throw new Error(error);
    }
    console.log(stats);
  });
} else {
  console.log('You must specify webpack entry in \'ENTRY\' env variable');
}
