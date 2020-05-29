const path = require('path');

const Dotenv = require('dotenv-webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: path.join(__dirname, '../src/index.tsx'),

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    alias: {
      config: path.resolve(__dirname, '../src/config'),
      constants: path.resolve(__dirname, '../src/constants'),
      features: path.resolve(__dirname, '../src/features'),
      store: path.resolve(__dirname, '../src/store'),
      style: path.resolve(__dirname, '../src/style'),
      typings: path.resolve(__dirname, '../src/utils'),
      utils: path.resolve(__dirname, '../src/utils'),
    }
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),

    new Dotenv({
      path: path.join(__dirname, '../.env'),
      systemvars: true // allow to also use system env variables
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      favicon: path.join(__dirname, '../src/favicon.ico')
    }),
  ]  
}
