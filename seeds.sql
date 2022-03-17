USE employee_db;

INSERT INTO department (name)
VALUES ("Sales"),
("Accounting"),
("Human Resources"),
("Quality Assurance"),
("Warehouse"),
("Office Management"),

INSERT INTO role (title, salary, role_id, department_id)
VALUES ("Salesman", 150000, 1),
("Accountant", 200000, 2),
("HR Manager", 250000, 3),
("Quality Assurance Manager", 25000, 4),
("Warehouse worker", 400000, 5),
("Office Manager", 2000000, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jim", "Halpert", 1, 1),
("Oscar", "Martinez", 2, 1),
("Toby", "Flenderson", 3, 1),
("Creed", "Bratton", 4, 1),
("Daryl" "Philbin", 5, 1),
("Michael", "Scott", 6, 1);


