//linking my html templates
const questions = require("./questions");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
//requiring my dependencies
const inquirer = require("inquirer");
const jest = require("jest");


//Manager
function getManagerHTML (answers) {
    var managerhtml = `<div class="card">
    <div class="card-body">
        <h5 class="card-title managerName">${answers.getName()}</h5>
      <h5 class="card-title managerTitle">
        <i class="fas fa-tasks">Manager</i></h5>
      <ul class="list-group list-group-flush">
          <li class="list-group-item managerID">ID: </li>
          <li class="list-group-item managerEmail">Email: </li>
          <li class="list-group-item officeNumber">Office Number: </li>
      </ul> 
    </div>
  </div>`

    return html;
}

var manager = new Manager(managerName, managerID, managerTitle, officeNumber); 
//upon receiving user information from questions, the answers will be populated to the html
inquirer.prompt(questions).then(answers => {
 
    var html = getmanagerHTML(answers);
    console.log(html);
    fs.writeFileSync("./index.html", html);
    });


//Engineer
    function getengineerHTML (answers) {
      var engineerhtml = `<div class="card">
      <div class="card-body">
          <h5 class="card-title engineerName">Name</h5>
        <h5 class="card-title engineerTitle">
          <i class="fas fa-cogs">  Engineer</i></h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item engineerID">ID: </li>
            <li class="list-group-item engineerEmail">Email: </li>
            <li class="list-group-item engineerGithub">Github: </li>
        </ul> 
      </div>
    </div>`
      return html;
  }

    var engineer = new Engineer(engineerName, engineerID, engineerTitle, enginnerGithub); 
//upon receiving user information from questions, the answers will be populated to the html
inquirer.prompt(questions).then(answers => {
     
    var html = getengineerHTML(answers);
    console.log(html);
    fs.writeFileSync("./index.html", html);
    });


//Intern
function getInternHTML(answers) {
  var internhtml = `<div class="card">
  <div class="card-body">
    <h5 class="card-title internName">Name</h5>
    <h5 class="card-title internTitle">
        <i class="fas fa-user-graduate">  Intern</i></h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item internID">ID: </li>
        <li class="list-group-item internEmail">Email: </li>
        <li class="list-group-item internSchool">School: </li>
    </ul> 
  </div>
</div>`
  return html;
}

var intern = new Intern (internName, internID, internTitle, internNumber); 
//upon receiving user information from questions, the answers will be populated to the html
inquirer.prompt(questions).then(answers => {
     
    var html = getinternHTML(answers);
    console.log(html);
    fs.writeFileSync("./index.html", html);
    });