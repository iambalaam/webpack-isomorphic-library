const { resolve } = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const LIB_ROOT = __dirname;

module.exports = {
    mode: 'development',
    entry: resolve(LIB_ROOT, 'src', 'index.js'),
    output: {
        path: resolve(LIB_ROOT, 'dist'),
        // BOTH OF THESE ARE NEEDED (LIBRARY IS NOT)
        libraryTarget: 'umd',
        globalObject: 'typeof self !== \'undefined\' ? self : this',
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};