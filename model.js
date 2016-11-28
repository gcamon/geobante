"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModel = function(){
	var userSchema = Schema({
		firstname: String,
		lastNamw: String,
		email: String
	},{
		collection:"traveller"
	});

	return mongoose.model('traveller', userSchema);
}

module.exports = userModel
