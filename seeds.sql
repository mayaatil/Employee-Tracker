USE employee_db;

INSERT INTO department (name)
VALUES ("Sales"),
("Accounting"),
("Human Resources"),
("Quality Assurance")
("Warehouse")
("Office Management")

INSERT INTO role (title, salary, role_id, department_id)
VALUES ("Salesman", 150000, 1),
("Accountant", 200000, 2)
("HR Manager", 250000, 3),
("Quality Assurance Manager", 25000, 4)
("Warehouse worker", 400000, 5)
("Office Manager", 2000000, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jim", "Halpert", 1, 6)
("Oscar", "Martinez", 2, 6)
("Toby", "Flenderson", 3, 3)
("Creed", "Bratton", 4, 4)
("Daryl" "Philbin", 5, 5)
("Michael", "Scott", 6, 6);


