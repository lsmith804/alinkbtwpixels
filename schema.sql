### Schema
DROP DATABASE IF EXISTS profile_db;

CREATE DATABASE profile_db;

USE profile_db;

CREATE TABLE userProfile
(
	id int NOT NULL AUTO_INCREMENT,
	subject varchar(50) NULL,
	username varchar(50) NULL,
	game varchar(100) NULL,
	entry varchar(1000) NULL,
    photo varchar(1000) NULL,
	PRIMARY KEY (id)
);

SELECT * FROM userProfile;


