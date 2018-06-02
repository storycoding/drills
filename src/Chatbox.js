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
		socketAPI.sendMessage(this.state);
		this.setState( { content: "" } );
		event.preventDefault();
	}

	handleInput = (event) => {
		console.log("handleInput event.target.value: ", event.target.value);
		this.setState( {content : event.target.value} );
		console.log("handleInput this.state: ", this.state );
	}

	componentDidUpdate() {
		console.log("componentDidUpdate state: ", this.state);
		socketAPI.typed(this.state);
	}

	render() {
		return <div>
			<form onSubmit={this.handleSubmit}>
				<input type="content" value={this.state.content} onChange={this.handleInput}/>
				<input type="submit" value="Submit"/>
			</form>
		</div>
	}
}

export default Chatbox;