 
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function () {
	console.log('User connected via socket.io!');
});

http.listen(4000, function () {
	console.log('Server started!');
});




-------------------

var socket=io()

socket.on('connect',function(){
    console.log('connect to server');
})

socket.on('message',function(message){
console.log('New Message ',message.text);
})



-------

	<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="js/jquery-2.1.4.min.js"></script>
    <script src="js/socket.io-1.3.7.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
