CREATE DATABASE burger_db;
USE burger_db;
drop table burgers;
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar (255) NOT NULL,
	eaten boolean DEFAULT false,
	PRIMARY KEY(id)
);

select * from burgers;