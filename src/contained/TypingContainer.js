import React, { Component } from 'react';
import { socketAPI } from '../api.js';
import Typing from './Typing';

class TypingContainer extends Component {
	constructor() {
		super();
		this.state = {
			typing: ""
		}
	}

	componentWillMount() {
		setInterval(() => {
			socketAPI.getHistory( (state) => {
				console.log(this.state.typing);
				if(this.state.typing !== state.typing ) {
						this.setState( {typing: state.typing} )
				}
			});
		}, 100);
	}

	render() {
		return (
			<div>
				<p>poo</p>
				<Typing typing={this.state.typing}/>
			</div>
		);
	}
}

export default TypingContainer;