// code to define and export the Manager class. 

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
    getofficeNumber() {
    return this.officeNumber;
    }
    getRole() {
      return 'manager';
    }
}

module.exports = Manager;
