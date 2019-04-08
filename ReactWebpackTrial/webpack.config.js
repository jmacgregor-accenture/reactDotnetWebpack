const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './wwwroot/src/app.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'bundle.js'
    },
    plugins: [
      new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
      })  
    ],
    mode: 'development'
};