// code to define and export the Intern class. 

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email, school);
    }
  
    getSchool() {
      return 'school';
    }
    getRole() {
      return 'Intern';
    }
}

module.exports = Intern;
module.exports = school;