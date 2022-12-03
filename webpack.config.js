/* eslint-disable no-undef */
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  loader: "sass-loader",
  options: {
    includePaths: [require("path").resolve(__dirname, "node_modules")],
  },
  entry: "./src/js/main.js",
  plugins: [new ESLintPlugin()],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
