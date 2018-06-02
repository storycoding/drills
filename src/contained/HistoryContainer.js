import React, { Component } from 'react';
import { socketAPI } from '../api.js';
import History from './History.js';

class HistoryContainer extends Component {
	constructor() {
		super();
		this.state = {
			author: "author",
			target: "target",
			messages : [],
			typing: ""
		}
	}

	componentWillMount() {
		setInterval(() => {
			const request = {
				author: this.state.author,
				target: this.state.target
			}
			socketAPI.getHistory( request, (messages) => {
				if(this.state.messages.length !== messages.length ) { this.setState( messages: messages ) }
			});
		}, 3000);
	}

	render() {
		return (	
			<History messages={this.state.messages}></History>
		)
	}
}

export default HistoryContainer;