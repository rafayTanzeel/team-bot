const express = require('express');
const open = require('open');
const path = require('path');
const nconf = require('./lib/config/nconfConfig');
const winston = require('./lib/config/winstonConfig');
const rootPath = require('app-root-path');

const app = express();

const PORT = nconf.get('http:port');

const baseurlDisplay = () => {
  const baseurl = 'http://localhost:' + PORT + '/';
  winston.info('Listening on port: %s', PORT);
  winston.info('Connection with URL %s', baseurl);
  open(baseurl);
};

app.get('/', (req, res) => {
  res.sendFile(rootPath + '/src/public/html/index.html');
});

app.listen(PORT, (err) => {
  (err) ? winston.error(err) : baseurlDisplay();
});
