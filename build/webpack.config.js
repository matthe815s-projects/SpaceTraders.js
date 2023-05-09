"use strict";
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var NodemonPlugin = require('nodemon-webpack-plugin');
var DefinePlugin = require('webpack').DefinePlugin;
module.exports = {
    entry: './src/web/components/index.jsx',
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'src/web/build')
    },
    module: {
        rules: [
            // `js` and `jsx` files are parsed using `babel`
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader',
                options: {
                    esModule: false
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '!!raw-loader!./src/web/pages/index.ejs',
            filename: 'index.ejs',
            inject: true
        })
    ]
};
