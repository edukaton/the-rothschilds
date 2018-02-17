// More info on Webpack's Node API here: https://webpack.js.org/api/node/
// Allowing console calls below since this is a build file.

/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

import webpack from 'webpack';
import webpackConfig from './webpack/webpack.config.prod';

const ENTRY = process.env.ENTRY || null

if (ENTRY) {
  const config = webpackConfig(ENTRY);

  process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

  webpack(config).run((error, stats) => {
    if (error) { // so a fatal error occurred. Stop here.
      console.log(error);
      return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
      return jsonStats.errors.map(err => console.log(err));
    }

    if (jsonStats.hasWarnings) {
      console.log('Webpack generated the following warnings: ');
      jsonStats.warnings.map(warning => console.log(warning));
    }

    console.log(`Webpack stats: ${stats}`);

    // if we got this far, the build succeeded.
    console.log(`Your app is compiled in production mode in /dist/${ENTRY}. It's ready to roll!`);

    return 0;
  });
} else {
  console.log('You must specify webpack entry in \'ENTRY\' env variable');
}
