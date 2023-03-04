// code to define and export the Manager class. 

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email) {
      super(name, id, email);
    }
  
    getRole() {
      return 'Manager';
    }
}

module.exports = Manager;