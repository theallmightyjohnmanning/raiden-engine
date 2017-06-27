var webpack = require('webpack');
module.exports = {
    context: __dirname,
    entry: __dirname+"/src/main.js",
    output: {
        path: __dirname+"/dist",
        filename: "raiden.js",
        libraryTarget: "commonjs-module"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/(node_modules)/, /utils\/array.js/],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};