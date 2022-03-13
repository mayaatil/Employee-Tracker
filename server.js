//require packages
const express = require("express");
const mysql = require("mysql2");
const console = require("console.table");
const { createConnection } = require("net");
const { Server } = require("http");
const inquirer = require("inquirer");
const { response } = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// use express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect
const db = mysql.createConnection({
  host: "localhost",
  // username,
  user: "root",
  // password
  password: "admin",
  database: "employee_db",
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//use inquirer prompt to start questions.
function startQuestions() {
  inquirer
    .prompt([
      {
        name: "questions",
        type: "list",
        choices: [
          {
            name: "View all departments",
            value: "view_departments",
          },

          {
            name: "View all roles",
            value: "view_roles",
          },

          {
            name: "View all employees",
            value: "view_employees",
          },
          {
            name: "Add a department",
            value: "add_department",
          },

          { name: "Add a role", value: "add_role" },

          { name: "Add an employee", value: "add_employee" },

          { name: "Update an employee role", value: "update_employee" },
          { name: "I am finished", value: "finished" },
        ],
        message: "Where would you like to start?",
      },
    ])
    .then((answer) => {
      if (answer.questions === "View all departments") {
        viewAllDepartments();
      } else if (answer.questions === "View all roles") {
        viewAllRoles();
      } else if (answer.questions === "View all employees") {
        viewAllEmployees();
      } else if (answer.questions === "Add a department") {
        addDepartment();
      } else if (answer.questions === "Add a role") {
        addRole();
      } else if (answer.questions === "Add an employee") {
        addEmployee();
      }
    });
}

function viewAllEmployees() {
  //use query
  db.query("SELECT * employees", function (err, result, fields) {
    console.table(results);
  });
  startQuestions();
}

function viewAllDepartments() {
  //use query
  db.query("SELECT * department", function (err, result, fields) {
    console.table(results);
  });
}

function viewAllRoles() {
  //use query
  db.query("SELECT * role", function (err, result, fields) {
    console.table(results);
  });
}

//add department
function addDepartment(answer) {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message:
          "Please enter the name of the department you would like to add",
      },
    ])
    .then((answer) => {
      db.query(
        "INSERT INTO department(name)",
        values({
          name: answer.department,
        })
      );
    });
}

//name, salary, and deparetment
function addRole(answer) {
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
          "Please enter the name of the department that is attached to this new role",
      },
    ])
    .then((answer) => {
      db.query("INSERT INTO role(title, salary, department_id");
      values({
        title: answer.role,
        salary: answer.salary,
        department_id: department_id,
      });
    });
}

//first name, last name, role, manager
function addEmployee(answer) {
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
        message: "Please enter the role of the employee",
      },
      {
        name: "manager",
        type: "input",
        message: "Please enter the name of the employee's manager",
      },
    ])
    .then((answer) => {
      db.query(
        "INSERT INTO employees(first_name, last_name, role_id, manager_id"
      );
      values({
        first_name: answer.first_name,
        last_name: answer.last_name,
        role_id: role_id,
        manager_id: manager_id,
      });
      startQuestions();
    });
}

// function updateEmployee() {
//   inquirer
//     .prompt([
//       {
//         name: "update",
//         type: "input",
//         message: "Type 'Yes' or 'No' if you would like to add an employee",
//       },
//     ])
//     .then(function (response) {
//       if (response.update === "Yes") {
//         db.query("UPDATE employees SET name = ? WHERE id = ?");
//       } else if (response.update === "No") {
//         endServer();
//       }
//     });
// }

// //update employee
// updateEmployee();

//start questions
startQuestions();

// //end Server
// function endServer() {
//   Server.destroy();
// }
