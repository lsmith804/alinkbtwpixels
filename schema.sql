### Schema
DROP DATABASE IF EXISTS profile_db;

CREATE DATABASE profile_db;

USE profile_db;

CREATE TABLE userProfile
(
	id int NOT NULL AUTO_INCREMENT,
	realname varchar(50) NULL,
	username varchar(50) NULL,
	favoriteGame varchar(100),
	aboutMe varchar(500),
	PRIMARY KEY (id)
);

SELECT * FROM userProfile;


