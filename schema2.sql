### Schema
DROP DATABASE IF EXISTS entries_db;

CREATE DATABASE entries_db;

USE entries_db;

CREATE TABLE userSubmission
(
	id int NOT NULL AUTO_INCREMENT,
	subject varchar(50) NULL,
	username varchar(50) NULL,
	game varchar(100) NULL,
	entry varchar(1000) NULL,
    photo varchar(1000) NULL,
	PRIMARY KEY (id)
);

SELECT * FROM userSubmission;


