// vue.config.js

const path = require('path');

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {

    // output: ./docs
    outputDir: 'docs',

    // relative link for assets
    publicPath: process.env.NODE_ENV === 'production'
        ? '/Faquelize/'
        : '/'

};

