const { resolve } = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const SERVER_ROOT = __dirname;

module.exports = {
    mode: 'development',
    entry: resolve(SERVER_ROOT, 'src', 'index.js'),
    output: {
        path: resolve(SERVER_ROOT, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};