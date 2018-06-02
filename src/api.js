const openSocket = require('socket.io-client');
const socket = openSocket('http://localhost:8000');

const socketAPI = {

	sendMessage: function(message) {
	  socket.emit('sendMessage', JSON.stringify(message) );
	},

	getHistory: function(request, cb) {
		console.log("getHistory request sent:" + JSON.stringify(request) );
	  socket.emit('getHistory', JSON.stringify(request) );
	  socket.on('sendHistory', messages => cb(JSON.parse(messages)) );
	},

	typed: function(message) {
		console.log("typed sent:" + JSON.stringify(message) );
		socket.emit('typed', JSON.stringify(message) );
	},

	getTyping: function(request, cb) {
		console.log("getTyping request sent:" + JSON.stringify(request) );
	  socket.emit('getTyping', JSON.stringify(request) );
	  socket.on('sendTyping', typing => {
	  	console.log("server sent back for getTyping: ", typing);
	  	cb(typing);
	  });
	}
}

module.exports = { socketAPI : socketAPI }; 