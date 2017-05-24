const express = require('express');
const open = require('open');
const path = require('path');
const app = express();

const PORT = process.env.PORT || (process.argv[2] || 8080);

const baseurlDisplay = () => {
  const baseurl = 'http://localhost:' + PORT + '/';
  console.log('Connection with URL %s', baseurl);
  open(baseurl);
};

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/html/index.html'));
});

app.listen(PORT, (err) => {
  (err) ? console.log(err) : baseurlDisplay();
});
