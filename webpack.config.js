const webpack = require('webpack');
const path = require('path');

const srcPath  = path.join(__dirname, `/src/app`);
const distPath = path.join(__dirname, '/www');

const defaultApiBase = "http://localhost:3000";
const defaultWebsocketBase = "ws://localhost:28080";

module.exports = {
  devtool: '#source-map',
  context: srcPath,
  entry: ["babel-polyfill", "./index.js"],
  output: {
    path: distPath,
    filename: `app.bundle.js`,
  },
  resolve: {
    modules: ["node_modules"],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'API_BASE': JSON.stringify(process.env.API_BASE||defaultApiBase),
        'WEBSOCKET_BASE': JSON.stringify(process.env.WEBSOCKET_BASE||defaultWebsocketBase),
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
           loader: 'babel-loader'
        }
      }
    ]
  }
};
