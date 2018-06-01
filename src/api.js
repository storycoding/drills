const openSocket = require('socket.io-client');
const socket = openSocket('http://localhost:8000');

const socketAPI = {

	sendMessage: function(text) {
	  socket.emit('sendMessage', text);
	},

	getHistory: function(cb) {
	  socket.emit('getHistory', "user");
	  socket.on('sendHistory', messages => cb(messages));
	}
}

module.exports = { socketAPI : socketAPI }; 