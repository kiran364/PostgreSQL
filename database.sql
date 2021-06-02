create database movies_database;

create table movies(
    id serial primary key,
    title varchar(20),
    description varchar(255)
);
