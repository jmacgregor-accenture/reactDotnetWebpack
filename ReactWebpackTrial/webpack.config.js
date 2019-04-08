const path = require('path');

module.exports = {
    entry: './wwwroot/src/app.js',
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: 'bundle.js'
    },
    mode: 'development'
};