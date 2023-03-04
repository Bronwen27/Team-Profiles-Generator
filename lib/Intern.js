// code to define and export the Intern class. 

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email) {
      super(name, id, email);
      this.github = github;
    }
  
    getGithub() {
      return this.github;
    }
  
    getRole() {
      return 'Intern';
    }
}

module.exports = Intern;