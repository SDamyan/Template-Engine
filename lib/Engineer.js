//Extension for Engineer

const Employee = require("./Employee");

class Engineer extends Employee{
   constructor (engineerName, engineerID, engineerEmail, engineerGithub) {
      super(engineerName, engineerID, engineerEmail)
      this.github = engineerGithub;
   }

   getGithub() {
      return this.github;
   }
 
   getRole() {
      return "Engineer"
   }
}

module.exports = Engineer;