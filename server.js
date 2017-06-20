const port = 9000;

// Express
const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const path = require('path');
const routes = require('./routes');
var app = express();


const static = path.resolve(__dirname, 'static');

app
  .use(compression())
  .use(bodyParser.json())
  .use(express.static(static))
  .use(routes)
  .listen(port, function () {
      console.log('Listening on port: ' + port);
  });
