var express = require('express');
var app     = express();
//var mongojs = require('mongojs');
//var db = mongojs('copypaste', ['copypaste']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());

app.get('/public', function(req,res){
console.log("Getting...💰");
});

app.listen(3000);

console.log("server...💰 ");
