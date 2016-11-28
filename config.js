'use strict';
var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var router = express.Router();


var configuration = function (app,model) {
//config

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//middleware	
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());	
app.use('/',router);	
app.use('/assets',express.static(__dirname + '/public'));

}

module.exports = {
  configuration: configuration,
  router: router	
}