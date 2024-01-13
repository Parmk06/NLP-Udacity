const webpack = require("webpack"),
    path = require("path"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: "./src/client/index.js",
    devtool: "source-map",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "var",
        library: "Client",
        clean: true,
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use:["style-loader", "css-loader", "sass-loader"]
            }
        ],
    },

    plugins: [new HtmlWebpackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html"
    }
    ),
    new CleanWebpackPlugin({
        dry: true,
        verbose: false,
        cleanStaleWebpackAssets: true,
        protectWebpackAssets: false,
    }),
],

}



