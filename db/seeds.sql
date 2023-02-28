insert into department (dept_name)
 values ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');

insert into role (title, salary, dept_id, is_manager)
    values ('Sales Lead', 100000.00, 1, true),
            ('Salesperson', 80000.00, 1, false),
            ('Lead Engineer', 120000.00, 2, true),
            ('Software Engineer', 100000.00, 2, false),
            ('Accountant', 125000.00, 3, false),
            ('Legal Team Lead', 130000.00, 4, true),
            ('Lawyer', 120000.00, 4, false);

insert into employee (first_name, last_name, role_id, manager_id)
    values ('Homer', 'Simpson', 1, null),
            ('Barney', 'Gumble', 2, 1),
            ('Clancy', 'Wiggum', 3, null),
            ('Edna', 'Krabappel', 4, 3),
            ('Kent', 'Brockman', 5, null),
            ('Ned', 'Flanders', 6, null),
            ('Seymour', 'Skinner', 7, 6),
            ('Marge', 'Simpson', 8, null),
            ('Waylon', 'Smithers', 9, 6),
            ('Nelson', 'Muntz', 2, 1),
            ('Milhouse', 'Van Houten', 2, 1),
            ('Apu', 'Nahasapeemapetilon', 2, 1),
            ('Moe', 'Szyslak', 2, 1),
            ('Ralph', 'Wiggum', 2, 1),
            ('Montgomery', 'Burns', 5, null),
            ('Waylon', 'Smithers', 5, 18);

 
    