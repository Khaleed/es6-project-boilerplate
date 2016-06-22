var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // app entry point
    entry: path.resolve(__dirname, 'app', 'index.js'),

    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },

    // define module loaders
    module: {
        loaders: [
            // Babel loader
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0']
                }
            },

            // JSON loader
            {
                test: /\.json$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'json'
            },
            // CSS Loader
            {
                test: /\.css$/,
                // load css file into it's own file
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
        ]
    },
    // resolution
    resolve: {
        extensions: ['.js', '.json', '']
    },

    plugins: [
        // Extract CSS files
        new ExtractTextPlugin("style.css"),
        // Avoid duplicated stuff
        new webpack.optimize.DedupePlugin(),
        // Optimise occurence order
        new webpack.optimize.OccurenceOrderPlugin(),
        // only for production
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // minimise output chunks of scripts/css
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ]
};
