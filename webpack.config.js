const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./client/index.tsx",
    output: {
        path: path.join(__dirname, "./public"),
        filename: "bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "awesome-typescript-loader"
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                use: {
                    loader: "source-map-loader"
                }
            },
            {
                enforce: "post",
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot)(\?[\s\S]+)?$/,
                use: [
                    {
                        loader: "file-loader?name=fonts/[name].[ext]"
                    }
                ]
            },
            {
                test: /\.(jpe|jpeg|png|svg|gif)$/i,
                use: [
                    {
                        loader: "file-loader?name=images/[name].[ext]"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./client/index.html"
        })
    ]
};
