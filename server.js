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

app.listen(3000, function() {
  console.log('listening on 3000')
})
