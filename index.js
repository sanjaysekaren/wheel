var express = require('express');
var mongoose = require('mongoose');

var config = require('./Utils/config');
var setupController = require('.//Controllers/setupController');
var appController = require('.//Controllers/appController');

var app = express();
var Port = process.env.Port || 6200;

mongoose.connect(config.getConnectionstring(),{useNewUrlParser:true,useUnifiedTopology:true});

// setupController(app);
appController(app);

app.listen(Port);


