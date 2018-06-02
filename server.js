const io = require('socket.io')();
const socketAPI = require('./src/api').socketAPI;

const port = process.env.port || 8000;

server = {};

server.history = {
		author: {
			target: {
				messages: [
					{
						author: "author",
						content: "Hello World!"
					}
				]
			}
		}
};

server.typing = {
	author: {
		target: {
			content: "hello"
		}
	}
}


server.connections = 0;

io.on('connection', (client) => {
	console.log("a client has connected");
	client.addedUser = false;

	client.on('addUser', (author) => {
		if (addedUser) { return }

		console.log("client.author on connection: " + author);
		client.author = author;

		server.connections++;
		client.addedUser = true;
	});


  client.on('sendMessage', (message) => {
  	message = JSON.parse(message);

  	const { author, target, content } = message;

  	server.history[author][target].messages.push(
  		{
	  		author: author,
	  		content: content
  		});
  	console.log("======================================");
  	console.log("sendMessage message: " + message);
  	console.log("server.history[author][target]messages:", server.history[author][target].messages);
  	console.log("======================================");
  });

  client.on('getHistory', (request) => {
  	console.log("getHistory request: " + request);
  	request = JSON.parse(request);
  	const { author, target } = request;

   	console.log("server.history[author][target].messages:", server.history[author][target].messages);

    client.emit( 'sendHistory',
    	JSON.stringify(server.history[author][target].messages));
  });

	client.on('typed', (message) => {

		message = JSON.parse(message);
		const { author, target, content } = message;

	  server.typing[author][target].content = content;
	  
	});

  client.on('getTyping', (request) => {
  	console.log("getTyping request: " + request);
  	request = JSON.parse(request);
  	const { author, target } = request;
   	console.log("server.typing.author.target.content: " + server.typing.author.target.content);
    client.emit('sendTyping', server.typing[author][target].content);
  });

  client.on('disconnect', function(){
  	server.connections--;
  	delete server.typing[client.author];

    console.log('client disconnected');
  });
});


io.listen(port);
console.log('listening on port ', port);