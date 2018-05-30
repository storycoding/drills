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

	componentDidMount() {

		setInterval(() => {
			socketAPI.getHistory( (messages) => {
				this.setState({ messages : messages });
			})}, 1000);
	}

	render() {
		return (
			<History messages={this.state.messages}></History>
		)
	}
}

export default HistoryContainer;