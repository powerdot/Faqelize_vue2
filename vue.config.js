const faqelize = require("./faqelize.config.js");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {

    // output: ./docs
    outputDir: 'docs',

    // relative link for assets
    publicPath: process.env.NODE_ENV === 'production'
        ? (faqelize.productionPublicPath || '/')
        : '/',

    pwa: {
        name: faqelize.title,
        themeColor: '#FFFFFF',
        msTileColor: '#FFFFFF',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'default',
        icons: {
            favicon32: './img/icons/favicon-32x32.png',
            favicon16: './img/icons/favicon-16x16.png',
            appleTouchIcon: './img/icons/apple-touch-icon.png',
            maskIcon: './img/icons/safari-pinned-tab.svg',
            msTileImage: './img/icons/mstile-150x150.png'
        },
        manifestOptions: {
            "background_color": "#FFFFFF",
            "display": "standalone",
            "name": faqelize.title,
            "short_name": faqelize.title,
            "start_url": "./",
            "theme_color": "#FFFFFF",
        }
    }
};

