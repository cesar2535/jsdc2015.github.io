var path = require('path');
var webpack = require('webpack');
var poststylus = require('poststylus');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: [ '', '.js' ]
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: [ 'babel' ],
      exclude: [ /node_modules/ ],
      include: __dirname
    }, {
      test: /\.styl$/,
      loaders: [ 'style', 'css', 'stylus' ]
    }, {
      test: /\.(png|jpg|jpeg|svg|ttf|woff|eot)$/,
      loaders: [ 'url?limit=1000000']
    }]
  },
  stylus: {
    use: [ poststylus('rucksack-css') ]
  }
};
