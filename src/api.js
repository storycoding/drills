const openSocket = require('socket.io-client');
const socket = openSocket('http://localhost:8000');

const socketAPI = {

	sendMessage: function(text) {
	  socket.emit('sendMessage', text);
	},

	getHistory: function(cb) {
	  socket.emit('getHistory', "user");
	  socket.on('sendHistory', messages => cb(messages));
	},

	typing: function(text) {
		socket.emit('typing', text);
	}
}

module.exports = { socketAPI : socketAPI }; 