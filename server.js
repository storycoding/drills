const io = require('socket.io')();
const socketAPI = require('./src/api').socketAPI;

const port = process.env.port || 8000;

let history = {
	messages: [],
	typing: ""
}

io.on('connection', (client) => {

	client.on('typing', (content) => {
    history.typing = content;
  });

  client.on('sendMessage', (content) => {
  	history.messages.push(content);
  	console.log(history.messages);
  });

   client.on('disconnect', function(){
    console.log('client disconnected');
  });

   client.on('getHistory', function(){
   	console.log(history.typing);
    client.emit('sendHistory', history);
  });
});


io.listen(port);
console.log('listening on port ', port);