import React from 'react';
import TypingContainer from './TypingContainer.js';
const History = (props) => {
	console.log("History props: ", props);
	const history = props.history
	.map( (message, index) => {
		if (message.author === "author") {
			return (
			<p key={index} className="chatBubble self">
				{message.author}: {message.content}
			</p>
			)}

		return (
			<p key={index} className="chatBubble other">
				{message.author}: {message.content}
			</p>

			);

		}
		);

	return (
		<div className="chatHistory">
			{history}
			<TypingContainer/>
		</div>
	);
}

export default History;