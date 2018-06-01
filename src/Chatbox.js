import React, { Component } from 'react';
import { socketAPI } from './api';

class Chatbox extends Component {
	constructor() {
		super();
		this.state = {
			text:""
		};
	}

	handleSubmit = (event) => {
		console.log(this.state.text);
		socketAPI.sendMessage(this.state.text);
		event.preventDefault();
	}

	handleInput = (event) => {
		this.setState( {text : event.target.value} );
		socketAPI.typing(event.target.value);
	}

	render() {
		return <div>
			<form onSubmit={this.handleSubmit}>
				<input type="text" value={this.state.text} onChange={this.handleInput}/>
				<input type="submit" value="Submit"/>
			</form>
		</div>
	}
}

export default Chatbox;