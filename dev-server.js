const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.development.config.js');

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot: true,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  proxy: {
    '/api': {
      target: 'https://rubygems.org',
      changeOrigin: true,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Access-Control-Allow-Credentials": true
      },
    }
  }
});
server.listen(8080, 'localhost', function() {});