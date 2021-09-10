const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {

    entry: {

        'abc': './test/input/index.js',

        'cde': './test/input/index1.js'

    },

    output: {

        path: 'dist',

        filename: '[name].js'

    },

    plugins: [

        new JavaScriptObfuscator({

            rotateUnicodeArray: true

            //  The array contains files that need to be excluded 

        }, ['abc.js'])

    ]

};
