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

	client.author = "author"; // temp
	client.target = "target"; // temp
	server.history[client.author][client.target].messages = [];
	server.typing[client.author][client.target].content = "";

	client.on('addUser', (author) => {
		if (addedUser) { return }
		console.log("client.author on connection: " + author);
		
		server.connections++;
		client.addedUser = true;
	});

	client.on('connect', (usernames) => {
		usernames = JSON.parse(usernames);
		client.author = usernames.author || "author";
		client.target = usernames.target || "target";
		client.emit("connectionResponse", `connected ${client.author} with ${client.target}`);
	});

  client.on('sendMessage', (message) => {
  	message = JSON.parse(message);
  	const { content } = message;

  	server.history[client.author][client.target].messages.push(
  		{
	  		author: client.author,
	  		content: client.content
  		});
  	console.log("======================================");
  	console.log("sendMessage message: " + message);
  	console.log("server.history[author][target]messages:", server.history[client.author][client.target].messages);
  	console.log("======================================");
  });

  client.on('getHistory', (request) => {
  	console.log("getHistory request: " + request);
  	request = JSON.parse(request);

   	console.log("server.history[author][target].messages:", server.history[client.author][client.target].messages);

    client.emit( 'sendHistory',
    	JSON.stringify(server.history[client.author][client.target].messages));
  });

	client.on('typed', (message) => {

		message = JSON.parse(message);
		const { content } = message;

	  server.typing[client.author][client.target].content = content;
	  
	});

  client.on('getTyping', (request) => {
  	console.log("getTyping request: " + request);
  	request = JSON.parse(request);

  	//const { author, target } = request;
   	console.log("server.typing.author.target.content: " + server.typing[client.author][client.target].content);
    client.emit('sendTyping', server.typing[client.author][client.target].content);
  });

  client.on('disconnect', function(){
  	server.connections--;
  	delete server.typing[client.author];
    console.log('client disconnected');
  });
});


io.listen(port);
console.log('listening on port ', port);