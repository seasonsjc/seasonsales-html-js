'use strict';

var express     = require('express')
  , app         = express()
  , bodyParser  = require('body-parser')
  , server      = require('http').Server(app)
  , port        = process.env.PORT || 3001;


app.use(express.static(__dirname + '/web'));
app.use(bodyParser.urlencoded({ extended: false }));
server.listen(port, function() {
  console.log('App Running on port ' + port);
});

module.exports = app;
