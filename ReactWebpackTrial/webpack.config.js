const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './wwwroot/src/app.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'allstyles.css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: [
                'popper.js',
                'default'
            ]
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.js?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    },
    mode: 'development'
};