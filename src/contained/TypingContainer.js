import React, { Component } from 'react';
import { socketAPI } from '../api.js';
import Typing from './Typing';

class TypingContainer extends Component {
	constructor() {
		super();
		this.state = {
			author: "author",
			target: "target",
			content: "hello"
		}
	}

	componentWillMount() {
		setInterval(() => {
			socketAPI.getTyping( this.state, (typing) => {
				console.log("getTyping result: ", typing);
				if(this.state.content !== typing) {
					this.setState({ content: typing });

					console.log("this.state: ", this.state);
					console.log("typing: ", typing);
				}
			});
		}, 3000);
	}

	render() {
		return (
			<div>
				<Typing typing={this.state}/>
			</div>
		);
	}
}

export default TypingContainer;