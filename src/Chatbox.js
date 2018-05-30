import React, { Component } from 'react';
import { socketAPI } from './api';

class Chatbox extends Component {

	sayHi() {
		socketAPI.greet( () => console.log("greeting sent") );
	}

	render() {
		return <div>
			<button onClick ={this.sayHi}>
				Say Hi
			</button>
		</div>
	}
}

export default Chatbox;