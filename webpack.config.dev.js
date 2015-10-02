var path = require('path');
var webpack = require('webpack');
var poststylus = require('poststylus');
var publicPath = '';

module.exports = {
  devtool: 'eval',
  entry: {
    index: [],
    schedule: []
  },
  output: {
    path: path.join(__dirname, 'build', 'static'),
    filename: '[name].bundle.js',
    publicPath: publicPath
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: ['', '.js'],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.styl$/,
      loaders: ['style', 'css', 'stylus'],
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|svg)$/,
      loaders: ['url?limit=1000000'],
      exclude: /node_modules/
    }]
  },
  stylus: {
    use: [ poststylus(['postcss-import', 'rucksack-css']) ]
  }
};
