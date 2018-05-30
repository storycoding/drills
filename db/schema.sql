CREATE DATABASE chitchat;
\c chitchat;

CREATE TABLE users (
	user_id VARCHAR NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE messages (
	id SERIAL PRIMARY KEY,
	user_id VARCHAR NOT NULL,
	content VARCHAR NOT NULL
);

INSERT INTO users (user_id) VALUES ('nuno');

INSERT INTO messages (user_id, content) VALUES ('nuno', 'hello world');