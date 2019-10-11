var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var connect = require('connect');
var config = require('./Utils/config');
var setupController = require('.//Controllers/setupController');
var appController = require('.//Controllers/appController');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var Port = process.env.Port || 6200;

mongoose.connect(config.getConnectionstring(),{useNewUrlParser:true,useUnifiedTopology:true});

// setupController(app);
appController(app);

app.listen(Port);


