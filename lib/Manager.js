const Employee = require("./Employee");

class Manager extends Employee {
   constructor (managerName, managerID, managerEmail, officeNumber) {
      super(managerName, managerID, managerEmail)
      this.officeNumber = officeNumber;
   };

   getOfficeNumber() {
      return this.officeNumber;
   }
 
   getRole() {
      return "Manager"
   }
}

module.exports = Manager;