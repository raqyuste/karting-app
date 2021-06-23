const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname + "/src",
  mode: "development",
  entry: "/index.js",
  resolve: {
    alias: {
      "@": "src/",
    },
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "/dist/",
    port: 3000,
    hotOnly: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "index.html",
      filename: "index.html",
    }),
    new webpack.EnvironmentPlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
