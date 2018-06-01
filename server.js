const io = require('socket.io')();
const socketAPI = require('./src/api').socketAPI;

const port = process.env.port || 8000;

let state = {
	messages: []
}

io.on('connection', (client) => {

  client.on('sendMessage', (content) => {
  	state.messages.push(content);
  	console.log(state.messages);
  });

   client.on('disconnect', function(){
    console.log('client disconnected');
  });

   client.on('getHistory', function(){
    client.emit('sendHistory', state.messages);
  });
});


io.listen(port);
console.log('listening on port ', port);