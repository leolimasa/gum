var path = require("path");
module.exports = {
  entry: ['webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
    "./src/main.js"
  ],
    devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
  loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {presets:['es2015']}}
  ]
}
};
