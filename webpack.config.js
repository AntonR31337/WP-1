const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MinCssPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: '/dateDiff/js/main.js',
    mode: 'development',
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|gif|mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.css$/i,
                use: [MinCssPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlPlugin({ template: resolve(__dirname, '/dateDiff/index.html') }),
        new MinCssPlugin({ 
            filename: '[name][contenthash].css'
         })
    ]
}