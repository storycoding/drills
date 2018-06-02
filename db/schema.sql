CREATE DATABASE chat;
\c chat;

CREATE TABLE users (
	user_id VARCHAR NOT NULL,
	password VARCHAR NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE connections (
	user_id VARCHAR NOT NULL,
	target_id VARCHAR NOT NULL
)

CREATE TABLE messages (
	id SERIAL PRIMARY KEY,
	content VARCHAR NOT NULL,
	author_id VARCHAR NOT NULL,
	target_id VARCHAR NOT NULL,
	date_sent TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
);

INSERT INTO users (user_id) VALUES ('nuno');
INSERT INTO users (user_id) VALUES ('jesus');

INSERT INTO connections (user_id, target_id) VALUES ('nuno', 'jesus');

INSERT INTO messages (content, author_id, target_id) VALUES ('Hey dude, how you doin?', 'nuno', 'jesus');

INSERT INTO messages (content, author_id, target_id) VALUES ('Not much bro, how about u?', 'jesus', 'nuno');