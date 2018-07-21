'use strict';

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "production",
    entry: './entry.js',
    context: path.resolve(__dirname,'../src'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test : /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:['babel-loader']
            },
            {
                test : /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/,
                use: [
                    {
                        loader : "url-loader",
                        options:{
                            limit : 9000
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
    },
    plugins: [
        new CleanWebpackPlugin(['./dist'],{
            root: path.resolve(__dirname,'../')
        }),
        new HtmlWebpackPlugin({
            title : "Ops",
            template: "./index.html"
        }),
    ]
};
