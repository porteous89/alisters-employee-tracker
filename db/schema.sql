drop database if exists employee_db;

create database employee_db;

use employee_db;

create table department(
    id int primary key auto_increment,
    dept_name varchar(50) not null
);

create table role(
    id int primary key auto_increment,
    title varchar(50) not null,
    salary decimal(10,2) not null,
    dept_id int,
    foreign key (dept_id) references department(id)
);

create table employee(
    id int primary key auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    role_id int,
    foreign key (role_id) references role(id),
    manager_id int null,
    foreign key (manager_id) references employee(id)
);

