
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# alisters-employee-tracker

## Description
Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). This assignment is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

### User Story
```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```
### Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```
## Demo Link
https://drive.google.com/file/d/1YdmTAhWT2ft1hSZR0Xfe0uUSWRkJfwqG/view

## Link to Repo
https://github.com/porteous89/alisters-employee-tracker

## Screen Shots

Using Inquirer prompts

<img src="assets\using-inquirer-prompts.png" width= 45% >

App running in terminal

<img src="assets\app-running-in-terminal.png" width= 45% >

## Built Using
- Node.js
- Dotenv
- Mysql2
- Inquirer
- Console.table

## Usage
To run: npm start

Follow prompts to view Employees, Departments or Roles
Use prompts to add Employees, Departments or Roles
Use prompt to Update Employees Role


## License
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 
This project is licensed under the MIT license. See the [LICENSE](https://opensource.org/licenses/MIT) file for details.


## Credits
MySql Tutorial
https://www.youtube.com/watch?v=7S_tz1z_5bA

MySql Cheat Sheet
https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/

CRUD in sql server
https://www.sqlshack.com/crud-operations-in-sql-server/

## contribution
PLease checkout my github link for contributions -  [https://github.com/porteous89](https://github.com/porteous89).

## Questions
If you have any questions about the repo, open an issue or contact me directly at alisterporteous@hotmail.com. You can find more of my work at [https://github.com/porteous89](https://github.com/porteous89).
