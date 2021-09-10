// vue.config.js
// let Encrypt = require('./build_plugins/encrypt');

const path = require('path');

var WebpackObfuscator = require('webpack-obfuscator');

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {

    // webpack obfuscation plugin
    configureWebpack: {
        plugins: [
            new WebpackObfuscator({
                rotateStringArray: true,
                stringArray: true,
                stringArrayThreshold: 0.75,
                deadCodeInjection: true,
                deadCodeInjectionThreshold: 0.4,
                debugProtection: true,
                simplify: true,
                splitStrings: true,
                splitStringsChunkLength: 4,
                renameGlobals: true,
                renameProperties: true,
            })
        ]
    },

    // output: ./docs
    outputDir: 'docs',

    // relative link for assets
    publicPath: './',

};

