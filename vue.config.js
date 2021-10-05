const faqelize = require("./faqelize.config.js");

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {

    // output: ./docs
    outputDir: 'docs',

    // relative link for assets
    publicPath: process.env.NODE_ENV === 'production'
        ? '/Faqelize/'
        : '/',

    pwa: {
        name: faqelize.title,
        themeColor: '#FFFFFF',
        msTileColor: '#FFFFFF',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'default',
        iconPaths: {
            favicon32: './icons/favicon-32x32.png',
            favicon16: './icons/favicon-16x16.png',
            appleTouchIcon: './icons/apple-touch-icon.png',
            maskIcon: './icons/safari-pinned-tab.svg',
            msTileImage: './icons/mstile-150x150.png'
        },
        manifestOptions: {
            "background_color": "#FFFFFF",
            "display": "standalone",
            "icons": [
                {
                    "src": "./icons/android-chrome-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "./icons/android-chrome-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                },
                {
                    "src": "./icons/android-chrome-maskable-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png",
                    "purpose": "any maskable"
                },
                {
                    "src": "./icons/android-chrome-maskable-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "any maskable"
                },
                {
                    "src": "./icons/apple-touch-icon.png",
                    "sizes": "180x180",
                    "type": "image/png"
                },
                {
                    "src": "./icons/favicon-16x16.png",
                    "sizes": "16x16",
                    "type": "image/png"
                },
                {
                    "src": "./icons/favicon-32x32.png",
                    "sizes": "32x32",
                    "type": "image/png"
                },
                {
                    "src": "./icons/mstile-150x150.png",
                    "sizes": "150x150",
                    "type": "image/png"
                },
                {
                    "src": "./icons/safari-pinned-tab.svg",
                    "sizes": "512x512",
                    "type": "image/svg+xml"
                }
            ],
            "name": faqelize.title,
            "short_name": faqelize.title,
            "start_url": "/",
            "theme_color": "#FFFFFF",
        }
    }
};

