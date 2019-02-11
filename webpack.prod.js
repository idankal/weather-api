// webpack configuration mode: 'production'
const path = require('path'),
      MCEPlugin = require("mini-css-extract-plugin"),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    // 'skycons.vendor': [
    //   path.join(__dirname, 'client', 'src', 'js', 'plugins', 'skycons.js')
    // ],
    'chart.vendor': [
      path.join(__dirname, 'client', 'src', 'js', 'plugins', 'Chart.min.js')
    ],
    'bundle.min': [
      path.join(__dirname, 'client', 'src', 'js', 'main.js')
    ]
  },

  output: {
    path: path.join(__dirname, 'client', 'dist'),
    filename: '[name].js'
  },

  plugins: [
    new MCEPlugin({
      filename: "[name].css"
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', 'index.html'),
      inject: true,
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
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
  }

}
