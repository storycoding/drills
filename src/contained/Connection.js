import React, { Component } from 'react';
import { socketAPI } from '../api.js';

class Connection extends Component {
	constructor() {
		super();

		this.state = {
			author: "author",
			target: "target"
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
		socketAPI.connect(this.state);
		//trigger username and target change
	}

	authorChange = (event) => {
		this.setState( {author: event.target.value} );
	}

	targetChange = (event) => {
		this.setState( {target: event.target.value} );
	}

	render () {

		return (
			<form className="connection" onSubmit={this.handleSubmit}>
				<input
					type="text"
					value={this.state.author}
					placeholder="your username"
					onChange={this.authorChange}
				/>
				<input
					type="text"
					value={this.state.target}
					placeholder="another username"
					onChange={this.targetChange}
				/>
				<input className="connect" type="submit" value="connect"/>
			</form>
		);
	}
}

export default Connection;