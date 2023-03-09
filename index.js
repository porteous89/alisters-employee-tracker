const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./connection/connection');

db.connect(err => {
    if (err) throw err;
    console.log('Connected to the employees_db database.');
    start();
});

function start(){
    inquirer.prompt({
        name: 'options',
        type: 'list',
        message: 'What would you like to view?',
        choices: [
            'View all employees',
            'View all departments',
            'View all roles',
            'Add employee',
            'Add department',
            'Add role',
            'Update employee role',
            'Exit'
        ]}).then((answer) => {
            switch (answer.options) {
                case 'View all employees':
                    viewAllEmployees();
                    break;
                case 'View all departments':
                    viewAllDepartments();
                    break;
                case 'View all roles':
                    viewAllRoles();
                    break;
                case 'Add employee':
                    addEmployee();
                    break;
                case 'Add department':
                    addDepartment();
                    break;
                case 'Add role':
                    addRole();
                    break;
                case 'Update employee role':
                    updateEmployeeRole();
                    break;
                case 'Exit':
                    db.end();
                    break;
            }
        })
}


//view all departments
function viewAllDepartments(){
db.query('SELECT * FROM department', (err, results) => {
    if (err) throw err;
    console.table(results);
    start();
    })
};

//view all roles
function viewAllRoles(){
    db.query('SELECT * FROM role', (err, results) => {
        if (err) throw err;
        console.table(results);
        start();
    })
};

//view all employees
function viewAllEmployees(){
    db.query('SELECT * FROM employee', (err, results) => {
        if (err) throw err;
        console.table(results);
        start();
    })
};

//add Department
function addDepartment(){
    inquirer.prompt({
        name: 'department',
        type: 'input',
        message: 'What department would you like to add?'
    }).then((answer) => {
        db.query('INSERT INTO department SET ?', {dept_name: answer.department}, (err, results) => {
            if (err) throw err;
            console.log("Dept added successfully!");
            start();
        })
    })
};

//add role
function addRole(){
    db.query('SELECT * FROM department', (err, results) => {
        if (err) throw err;
        const deptArray = results.map(({id, dept_name}) => ({name: dept_name, value: id}));
        inquirer.prompt([
            {
                name: 'title',
                type: 'input',
                message: 'What role would you like to add?'
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is the salary for this role?'
            },
            {
                name: 'department',
                type: 'list',
                message: 'What department does this role belong to?',
                choices: deptArray
            }]).then((answer) => {
            db.query('INSERT INTO role SET ?', {title: answer.title, salary: answer.salary, dept_id: answer.department}, (err, results) => {
                if (err) throw err;
                console.log("Role added successfully!");
                start();
            })
        })
    })
};

//add employee
function addEmployee(){
    db.query ('SELECT * FROM role', (err, results) => {
        if (err) throw err;
        const roleArray = results.map(({id, title}) => ({name: title, value: id}));
        db.query ('SELECT * FROM employee', (err, employeeRes) => {
            if (err) throw err;
            const empArray = employeeRes.map(({id, first_name, last_name}) => ({name: `${first_name} ${last_name}`, value: id}));

            inquirer.prompt([
                {
                    name: 'first_name',
                    type: 'input',
                    message: 'What is the first name of the employee?'
                },
                {
                    name: 'last_name',
                    type: 'input',
                    message: 'What is the last name of the employee?'
                },
                {
                    name: 'role',
                    type: 'list',
                    message: 'What is the role of the employee?',
                    choices: roleArray
                },
                {
                    name: 'manager',
                    type: 'list',
                    message: 'Who is the manager of the employee?',
                    choices: empArray
                }]).then((answer) => {
                db.query('INSERT INTO employee SET ?', {first_name: answer.first_name, last_name: answer.last_name, role_id: answer.role, manager_id: answer.manager}, (err, results) => {
                    if (err) throw err;
                    console.log("Employee added successfully!");
                    start();
                })
            })
        })
    })
}

//update employee role
function updateEmployeeRole(){
    db.query ('SELECT * FROM role', (err, results) => {
        if (err) throw err;
        const roleArray = results.map(({id, title}) => ({name: title, value: id}));
        db.query ('SELECT * FROM employee', (err, employeeRes) => {
            if (err) throw err;
            const empArray = employeeRes.map(({id, first_name, last_name}) => ({name: `${first_name} ${last_name}`, value: id}));
            inquirer.prompt([
                {
                    name: 'employee',
                    type: 'list',
                    message: 'Which employee would you like to update?',
                    choices: empArray
                },
                {
                    name: 'role',
                    type: 'list',
                    message: 'What is the new role of the employee?',
                    choices: roleArray
                }]).then((answer) => {
                db.query('UPDATE employee SET role_id = ? WHERE id = ?', [answer.role, answer.employee], (err, results) => {
                    if (err) throw err;
                    console.log("Employee updated successfully!");
                    start();
                })
            })
        })
    })
}