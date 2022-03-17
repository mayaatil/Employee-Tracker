//require packages

const inquirer = require("inquirer");
const mysql = require("mysql2");

// connect
const db = mysql.createConnection({
  host: "localhost",
  // username,
  user: "root",
  // password
  password: "admin",
  database: "employee_db",
});

//use inquirer prompt to start questions.
function startQuestions(userChoice) {
  switch (userChoice) {
    case "View all departments":
      userChoice = viewAllDepartments();
      break;

    case "View all roles":
      userChoice = viewAllRoles();
      break;

    case "View all employees":
      userChoice = viewAllEmployees();
      break;

    case "Add a role":
      userChoice = addRole();
      break;

    case "Add an employee":
      userChoice = addEmployee();
      break;

    case "Update an employee role":
      userChoice = updateRole();
      break;

    case "Delete an employee":
      userChoice = deleteEmployee();
      break;

    case "I'm done":
      userChoice = endServer();
      break;
  }
}

function viewAllEmployees() {
  //use query
  db.query("SELECT * employees", function (err, result, fields) {
    console.table(result);
  });
}

function viewAllDepartments() {
  //use query

  db.query("SELECT * from department", function (err, result) {
    console.table(result);
  });
}

function viewAllRoles() {
  //use query
  db.query("SELECT * role", function (err, result) {
    console.table(result);
  });
}

// //add department
// function addDepartment() {
//   inquirer
//     .prompt([
//       {
//         name: "department",
//         type: "input",
//         message:
//           "Please enter the name of the department you would like to add",
//       },
//     ])
//     .then((answer) => {
//       db.query("INSERT INTO department(name) values(?)", [answer.department]);
//     });
// }

//name, salary, and deparetment
function addRole() {
  inquirer
    .prompt([
      {
        name: "role",
        type: "input",
        message: "Please enter the role you would like to add",
      },
      {
        name: "salary",
        type: "input",
        message: "Please enter the salary of this role.",
      },
      {
        name: "input_department",
        type: "input",
        message:
          "Please enter the department ID for this role. Sales: 1, Accounting: 2, Human Resources: 3, Quality Assurance: 4, Warehouse: 5, Office Management: 6 ",
      },
    ])
    .then((answer) => {
      db.query("INSERT INTO role(title, salary, department_id) values(?,?,?)", [
        answer.role,
        answer.salary,
        answer.input_department,
      ]);
    });
}

//first name, last name, role, manager
function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "Please enter the first name of the employee",
      },
      {
        name: "last_name",
        type: "input",
        message: "Please enter the last name of the employee",
      },
      {
        name: "role",
        type: "input",
        message:
          "Please enter the role ID for the employee. Salesman: 1, Accountant: 2, HR Manager: 3, Quality Assurance Manager: 4, Warehouse worker: 5, Office Manager: 6 ",
      },
      {
        name: "manager",
        type: "input",
        message:
          "Please enter the integer '1' for the manager ID, as all employees report to Jim Halpert.",
      },
    ])
    .then((answer) => {
      db.query(
        "INSERT INTO employees(first_name, last_name, role_id, manager_id) values (?,?,?,?)",
        [answer.first_name, answer.last_name, role_id, manager_id]
      );
    });
}

function updateRole() {
  inquirer
    .prompt([
      {
        name: "last_name",
        type: "input",
        message: "Please type in the employee's last name",
      },
      {
        name: "role",
        type: "input",
        message:
          "Please type in the new role ID for this employee. Salesman: 1, Accountant: 2, HR Manager: 3, Quality Assurance Manager: 4, Warehouse worker: 5, Office Manager: 6  ",
      },
    ])
    .then((answer) => {
      db.query("UPDATE employees SET last_name = ? WHERE id = ? values (?,?)", [
        answer.last_name,
        answer.role_id,
      ]);
    });
}

function deleteEmployee() {
  inquirer
    .prompt([
      {
        name: "last_name",
        type: "input",
        message: "Please enter the last name of the employee",
      },
    ])
    .then((answer) => {
      db.query("DELETE FROM employees WHERE last_name = ? values (?)", [
        answer.last_name,
      ]);
    });
}

inquirer
  .prompt({
    name: "userChoice",
    type: "list",
    message: "Where would you like to start?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "I'm done",
    ],
  })
  .then((response) => {
    startQuestions(response.userChoice);
  });
