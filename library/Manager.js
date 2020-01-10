const Employee = require("./Employee");

class Manager extends Employee{
   constructor (managerName, managerID, managerTitle, officeNumber) {
      this.officeNumber = officeNumber;
     super(managerName, managerID, managerTitle)
     
  };
 
getRole() {
        return "manager"
      };
};

module.exports = Manager;