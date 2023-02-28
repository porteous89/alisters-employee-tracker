drop database if exists employee_db;

create database employee_db;

use employee_db;

create table department(
    dept_id int primary key auto_increment,
    dept_name varchar(50) not null
);

create table employee(
    emp_id int primary key auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    role_id int,
    manager_id int,
    foreign key (role_id) references role(role_id),
    foreign key (manager_id) references employee(emp_id)
);

create table role(
    role_id int primary key auto_increment,
    title varchar(50) not null,
    salary decimal(10,2) not null,
    dept_id int,
    is_manager boolean,
    foreign key (dept_id) references department(dept_id)
);