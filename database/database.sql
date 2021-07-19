CREATE DATABASE contactaro;

CREATE TABLE user (
    user_id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password TEXT NOT NULL,
    creationDate date NOT NULL 
)

CREATE TABLE contact (
    contact_id SERIAL PRIMARY KEY NOT NULL,
    name 
)