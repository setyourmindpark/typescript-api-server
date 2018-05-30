const path = require('path');
const webpack = require('webpack');
const devEnv = require('./env.config.dev');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.ts'),
    target: "node", // node js environment
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'dev.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            env: JSON.stringify(devEnv),
        })
    ],
};