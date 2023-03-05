const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// Code to gather information about the development team members, and render the HTML file.
const {Employee} = require('./lib/Employee');

const team = [];

function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Select employee role:',
        choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter employee name:',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter employee email:',
      },
    ])
    .then((answers) => {
      let employee;
      switch (answers.role) {
        case 'Employee':
          employee = new Employee(answers.name, answers.id, answers.email);
          break;
      }
      team.push(employee);
      console.log(`${answers.name} added to team!`);
      inquirer
        .prompt([
          {
            type: 'confirm',
            name: 'addAnother',
            message: 'Do you want to add another employee?',
            default: true,
          },
        ])
        .then((answers) => {
          if (answers.addAnother) {
            addEmployee();
          } else {
            console.log('Team:', team);
          }
        });
    });
}

addEmployee();