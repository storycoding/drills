import React, { Component } from 'react';
import { socketAPI } from './api';

class Chatbox extends Component {
	constructor() {
		super();
		this.state = {
			author: "author",
			target: "target",
			content: ""
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		socketAPI.sendMessage(this.state);
		this.setState( { content: "" } );
	}

	handleInput = (event) => {
		console.log("handleInput event.target.value: ", event.target.value);
		this.setState( {content : event.target.value} );
		console.log("handleInput this.state: ", this.state );
	}

	handleKeyPress = (event) => {
		if(event.key == "Enter") {
			socketAPI.sendMessage(this.state);
			this.setState( { content: "" } );
		}
	}

	componentDidUpdate() {
		console.log("componentDidUpdate state: ", this.state);
		socketAPI.typed(this.state);
	}

	render() {
		return <div className="chatBox">
			<form onSubmit={this.handleSubmit}>
				<textarea className="chatInput" type="content" value={this.state.content} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
			</form>
		</div>
	}
}

export default Chatbox;