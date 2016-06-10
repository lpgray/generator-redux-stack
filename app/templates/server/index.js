/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
<% if (requireApiServer) { %>
const WebpackDevServer = require('webpack-dev-server');
<% } else { %>
const historyApiFallback = require('connect-history-api-fallback');
<% } %>

const app = express();
const port = process.env.PORT || 3000;

var config = process.env.NODE_ENV === 'production'
  ? config = require('../webpack.config.production')
  : require('../webpack.config');

const compiler = webpack(config);

<% if (requireApiServer) { %>
var bundler = new WebpackDevServer(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
  proxy: {
    '*/api/*': {
      target: 'http://localhost:8080',
      secure: false
    }
  },
  historyApiFallback: true
});

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/test', (req, res) => {
  res.send({ test: 'test' });
});

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: process.env.PWD + '/dist' });
});

app.listen(8080);
bundler.listen(port);
<% } else { %>
app.use(historyApiFallback({
  verbose: false
}));

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: process.env.PWD + '/dist' });
});

app.listen(port);
<% } %>
