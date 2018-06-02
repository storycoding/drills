import React from 'react';

const History = (props) => {
	console.log("History props: ", props);
	const history = props.history
	.map( (message, index) => (
			<p key={index}>
				{message.author}: {message.content}
			</p>)
		);

	return history;
}

export default History;