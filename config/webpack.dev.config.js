'use strict';

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode: "development",
    entry: ['webpack-hot-middleware/client?noInfo=true&reload=true','./entry.tsx'],
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
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test : /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:[{
                    loader: "babel-loader",
                    options:{
                        presets:["react","env"]
                    }
                }]
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
        extensions : [".ts",".tsx",".js",".json"]
    },
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin(['./dist'],{
            root: path.resolve(__dirname,'../')
        }),
        new HtmlWebpackPlugin({
            title : "Ops",
            template: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
