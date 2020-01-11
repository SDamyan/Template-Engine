//extension for Intern information
const Employee = require("./Employee");

class Intern extends Employee{
   constructor (internName, internID, internTitle, internSchool) {
      super(internName, internID, internTitle)
      this.school = internSchool;
   };

   getSchool() {
      return this.school;
   }

   getRole() {
      return "Intern"
   }
}

module.exports = Intern;