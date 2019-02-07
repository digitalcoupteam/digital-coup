DROP DATABASE IF EXISTS gamesLobbies_db;
CREATE DATABASE gamesLobbies_db;

USE gamesLobbies_db;

CREATE TABLE games (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    player_1 VARCHAR(30) NOT NULL,
    player_2 VARCHAR(30) NOT NULL,
    player_3 VARCHAR(30) NOT NULL,
    player_4 VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

