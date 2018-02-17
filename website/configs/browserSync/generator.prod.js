// This file configures a web server for testing the production build
// on your local machine.

/* eslint-disable import/no-extraneous-dependencies */

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import httpProxy from 'http-proxy-middleware'

/* eslint-disable no-console */

// Run Browsersync
browserSync({
  port: 4400,
  ui: {
    port: 4401,
  },
  server: {
    baseDir: '../static/generator',
  },

  files: [
    'src/*.html',
  ],
});
