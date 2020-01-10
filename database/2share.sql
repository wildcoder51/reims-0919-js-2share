CREATE DATABASE toshare;

USE toshare;

DROP TABLE if exists family;
DROP TABLE if exists event;
DROP TABLE if exists user;
DROP TABLE if exists user_family;

CREATE TABLE family 
(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
name VARCHAR (100)
);

CREATE TABLE event
(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
date_start DATETIME,
date_end DATETIME,
family_id INT NOT NULL,
FOREIGN KEY (family_id) REFERENCES family (id)
);

CREATE TABLE user

(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR (30) NOT NULL,
  lastname VARCHAR (30) NOT NULL,
  birthdate DATE NOT NULL,
  email VARCHAR (320) NOT NULL , /* Penser à rajouter un uniq sur l'email */
  password VARCHAR (256) NOT NULL ,
  phone_number VARCHAR (15),
  profile_picture VARCHAR (255)
);

CREATE TABLE user_family
(
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user (id),
  family_id INT NOT NULL,
  FOREIGN KEY (family_id) REFERENCES family (id)
);