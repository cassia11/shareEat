const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());

const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

module.exports = app;