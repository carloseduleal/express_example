'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const load = require('express-load');
const app = express();
const db = require('./database_config/database.js');

app.use(bodyParser.json());

db.ConnectWithDB(function (err) {
  if(err){
    console.log(err);
  }
  load('dao').then('controllers').then('routes').into(app);
});

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('listening on %s', port)
})
module.exports = server;
