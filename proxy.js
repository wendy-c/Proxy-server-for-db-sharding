var express = require('express');
var app = express();
var requiest = require('request');

//requests arrive in app with the fbid appended
app.get('/',function(req,res){
	var hash = function(fbid){
		return fbid % dbs.length;
	}

	var dbs = [];

	var db = hash(req.params.fbid);

	request(db).then(function(response){
		res.end(response);
	})

})

function adddb(){

}

function rehash(){

}
//based onfbidea we hash into the array of databases
//and send the response onward

app.listen('8080');