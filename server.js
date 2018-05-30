const io = require('socket.io')();
const socketAPI = require('./src/api').socketAPI;

const port = process.env.port || 8000;

let state = {
	messages: [],
	count: 0
}

io.on('connection', (client) => {

  client.on('greet', (content) => {
  	state.messages.push(state.count++)
  	client.emit('broadcastGreeting', content);
  });

   client.on('disconnect', function(){
    console.log('client disconnected');
  });

   client.on('getHistory', function(){
  	console.log(state.messages);
    client.emit('sendHistory', state.messages);
  });
});


io.listen(port);
console.log('listening on port ', port);