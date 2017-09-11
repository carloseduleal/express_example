'use strict';

const express = require('express');
const load = require('express-load');
const app = express();

load('controllers').then('routes').into(app);

app.listen(3000, function() {
  console.log('listening on 3000')
})
