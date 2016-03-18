/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const historyApiFallback = require('connect-history-api-fallback');
const port = process.env.PORT || 3000;

var config = require('./webpack.config');

if (process.env.NODE_ENV === 'production') {
  config = require('./webpack.config.production');
}

const app = express();
const compiler = webpack(config);

app.use(historyApiFallback({
  verbose: false
}));

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: process.env.PWD + '/dist' });
});

app.listen(port);
