DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
	id INT NOT NULL AUTO_INCREMENT,
	burger VARCHAR(30) NOT NULL,
	ate BOOLEAN,
	PRIMARY KEY(Id)
);