var express     = require('express');
var app         = require('express')();
var http        = require('http').Server(app);
var io          = require('socket.io')(http);
var mongojs     = require('mongojs');
var db          = mongojs('copypaste', ['copypaste']);
var bodyParser  = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());

app.get('/', function(req,res){
    console.log("GET 💰");
    res.sendFile(__dirname + '/index.html');
  });

io.on('connection', function(socket){
  console.log('a 😀  connected!');

  socket.on('disconnect', function(){
  console.log('a 😀  disconnected');
  });

  socket.on('chat message', function(msg){
  console.log('message: ' + msg);
  });

});


http.listen(3000);
console.log("Server 👟 👟  on port 3000");
