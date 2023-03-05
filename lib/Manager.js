// code to define and export the Manager class. 

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email, officeNumber);
    }
    getofficeNumber() {
    return 'officeNumber';
    }
    getRole() {
      return 'manager';
    }
}

module.exports =    Manager;
module.exports = officeNumber;