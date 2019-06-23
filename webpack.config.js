const path = require("path");

module.exports = {
  entry: "./js/api.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-api.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/
      }
    ]
  }
};
