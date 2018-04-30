import Config from "webpack-config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export default new Config().merge({
  entry: "./app/index.js",
  output: {
    path: __dirname + "/../public"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      inject: "body"
    })
  ]
});
