// vue.config.js
// let Encrypt = require('./build_plugins/encrypt');

const path = require('path');

var WebpackObfuscator = require('webpack-obfuscator');

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {

    // output: ./docs
    outputDir: 'docs',

    // relative link for assets
    publicPath: './',

};

