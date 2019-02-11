// webpack configuration mode: 'production'
const path = require('path'),
      MCEPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'client', 'src', 'js', 'main.js'),

  output: {
    path: path.join(__dirname, 'client', 'src'),
    filename: 'bundle.js'
  },

  devtool: 'cheap-eval-source-map',

  plugins: [
    new MCEPlugin({
      filename: "bundle.css"
    })
  ],

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MCEPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },

  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 600
  }

}
