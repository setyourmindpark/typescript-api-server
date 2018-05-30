const path = require('path');
const webpack = require('webpack');
const prodEnv = require('./env.config.prod');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.ts'),
    target: "node", // node js environment
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'prod.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            env: JSON.stringify(prodEnv),
        })
    ],
};