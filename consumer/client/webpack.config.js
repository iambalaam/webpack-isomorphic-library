const { resolve } = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const CLIENT_ROOT = __dirname;

module.exports = {
    mode: 'development',
    entry: resolve(CLIENT_ROOT, 'src', 'index.js'),
    output: {
        path: resolve(CLIENT_ROOT, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};