'use strict';
var path = require('path');
var route = require('./config');
var router = route.router;
var fs = require("fs");
var dateTime = require("node-datetime");

var basicRoute = function (model) {
	router.get("/",function(req,res){
		model.update({email: 'ede.obinna27@gmail.com',firstname: "Ede",lastname:"Obinna"},function(err,info){
			console.log(info)
		})
		res.sendFile(path.join(__dirname + "/index.html"))
	});

	router.get("/assets",function(req,res){
		res.send("css");
		res.send("js");
		res.send("images");
	}); 
}

module.exports = basicRoute;
