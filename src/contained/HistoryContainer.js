import React, { Component } from 'react';
import { socketAPI } from '../api.js';
import History from './History.js';

class HistoryContainer extends Component {
	constructor() {
		super();
		this.state = {
			messages : []
		}
	}

	componentWillMount() {
		setInterval(() => {
			socketAPI.getHistory( (messages) => {
				if(this.state.messages !== messages) {
					this.setState( {messages: messages} );
				}
			});
		}, 100);
	}

	render() {
		return (	
			<History messages={this.state.messages}></History>
		)
	}
}

export default HistoryContainer;