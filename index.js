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
//const {Employee} = require('./lib/Employee');

const team = [];

const empQuestions = [
  {
    type: 'list',
    name: 'role',
    message: 'Select employee role:',
    choices: ['Manager', 'Engineer', 'Intern'],
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
]

const addEmpQuestion = [
  {
    type: 'confirm',
    name: 'addAnother',
    message: 'Do you want to add another employee?',
    default: true,
  },
]
const managerQuestion = 
{
  type: 'input',
  name: 'officeNumber',
  message: 'Please enter your office number:',
}

const engineerQuestion = 
{
  type: 'input',
  name: 'github',
  message: 'Please enter your github username:',
}

const internQuestion = 
{
  type: 'input',
  name: 'school',
  message: 'Please enter your school name:',
}

function addManager(otherEmpInfo){
  inquirer.prompt(managerQuestion).then(answer => {
    const employee = new Manager(otherEmpInfo.name, otherEmpInfo.id, otherEmpInfo.email, answer.officeNumber)
    team.push(employee)
    promptMenu()
  })
}

function addEngineer(otherEmpInfo){
  inquirer.prompt(engineerQuestion).then(answer => {
    const employee = new Engineer(otherEmpInfo.name, otherEmpInfo.id, otherEmpInfo.email, answer.github)
    team.push(employee)
    promptMenu()
  })
}

function addIntern(otherEmpInfo){
  inquirer.prompt(internQuestion).then(answer => {
    const employee = new Intern(otherEmpInfo.name, otherEmpInfo.id, otherEmpInfo.email, answer.school)
    team.push(employee)
    promptMenu()
  })
}
function createHtml(){
  //fs.writefile(FILENAME, DATA, ERR HANDLING)
  fs.writeFile()
}

function promptMenu(){
  inquirer
        .prompt(addEmpQuestion)
        .then((answer) => {
          
          if (answer.addAnother) {
            addEmployee();
          } else {
            createHtml()
          }
        });
}

function addEmployee() {
  inquirer
    .prompt(empQuestions)
    .then((answers) => {
      switch (answers.role) {
        case 'Manager':
          addManager(answers)
        break;
        case 'Intern':
          addIntern(answers)
        break;
        case 'Engineer':
          addEngineer(answers)
        break;
      }  
    });
}

addEmployee();

