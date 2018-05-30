const openSocket = require('socket.io-client');
const socket = openSocket('http://localhost:8000');

const socketAPI = {

	greet: function(cb) {
	  socket.emit('greet', "Hi y'all!");
	  cb();
	},

	getHistory: function(cb) {
	  socket.emit('getHistory', "user");
	  socket.on('sendHistory', messages => cb(messages));
	}
}

module.exports = { socketAPI : socketAPI }; 