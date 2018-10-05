### Schema
DROP DATABASE IF EXISTS bot_learning;

CREATE DATABASE bot_learning;

USE bot_learning;

CREATE TABLE greetings
(
	id int NOT NULL AUTO_INCREMENT,
	words varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE goodbyes
(
	id int NOT NULL AUTO_INCREMENT,
	words varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM greetings;
SELECT * FROM goodbyes;


