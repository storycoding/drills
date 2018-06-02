import React from 'react';

const History = (props) => {
	const history = props.messages
		.map( (message, index) => (
			<p key={index}>
				{message.author}: {message.content}
			</p>)
		);

	return history;
}

export default History;