const path = require('path');
const merge = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common');


module.exports = merge(common, {
  mode: 'development',

  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].min.js'
  },

  watch: true,

  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    open: true
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
});
