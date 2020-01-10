//extension for Intern information
const Employee = require("./Employee");

class Intern extends Employee{
   constructor (internName, internID, internTitle, internNumber) {
      this.internSchool = internSchool;
     super(internName, internID, internTitle)
     
  };
 
getRole() {
        return "intern"
      };
};

module.exports = Intern;