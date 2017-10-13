const webpack = require('webpack');

module.exports = [
    {
    devtool: 'source-map',

    context: __dirname + '/resources',
    entry: {
        "main.js": "./js/main.js",
        "test.js": "./js/test.js",
        "test.css": "./sass/test.sass"
    },
    output: {
        path: __dirname + '/public',
        filename: '[name]'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css"
            },
            {
                test: /\.sass$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ],

    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true
    }
}
]
