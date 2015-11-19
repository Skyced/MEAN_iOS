var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 8000));
require('./config/mongoose.js');

var server = app.listen(app.get('port'), function() {
  console.log('cool stuff on: 8000');
});
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
	console.log('SERVER SOCKETS')
	socket.on('NewFriendAdded', function(data){
		console.log("newFriendAdded")
		io.sockets.emit("NewFriendAddedM")
	})
	socket.on('WebFriendAdded', function(data) {
		console.log("WebFriend", data)
		io.sockets.emit("NewWebFriendAdded", data)
	})
})
require('./config/routes.js')(app);