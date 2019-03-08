const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/react'
              ],
              plugins: [
                "@babel/plugin-proposal-class-properties"
              ]
            },
          }
        ],
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new Dotenv()
  ],
  node: {
    fs: 'empty'
  },
  devServer: {
    contentBase: `${__dirname}/dist`,
    compress: true,
    port: 8080
  }
};
