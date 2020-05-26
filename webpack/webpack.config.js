const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = path.join(__dirname, '../');


module.exports = {
  entry: path.join(rootDir, './src/index.tsx'),

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss']
  },

  output: {
    path: path.join(rootDir, './dist'),
    filename: 'bundle.min.js'
  },

  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin(),

    new HtmlWebpackPlugin({
      template: path.join(rootDir, './src/index.html')
    })
  ]  
}
