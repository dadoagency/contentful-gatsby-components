const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const nodeExternals = require("webpack-node-externals")
module.exports = {
  entry: "./index.js",
  externals: [
    nodeExternals(),
    { react: "react", reactDOM: "react-dom", gatsby: "gatsby" },
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(gatsby)\/)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "babel-plugin-remove-graphql-queries",
              "babel-plugin-react-docgen",
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
}
