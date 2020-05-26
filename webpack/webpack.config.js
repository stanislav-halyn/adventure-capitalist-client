const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = path.join(__dirname, '../');


module.exports = {
  entry: path.join(rootDir, './src/index.tsx'),

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
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
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(rootDir, './src/index.html')
    })
  ]  
}
