//linking my html templates

const Manager = require("./Manager");
const engineer = require("./Engineer");
const intern = require("./Intern");
//requiring my dependencies
const inquirer = require("inquirer");
const jest = require("jest");

//questions for user input to populate card information
let questions = [
    {
    type: "input",
    name: "managerConfirm",
    message: 'Please enter your manager information first, by typing in "manager"'
    },

    {
    type: "input",
    name: "managerName",
    message: "What is your manager's name?"   
    },  

    {
    type: "input",
    name: "managerID",
    message: "What is your manager's ID?" 
    },

    {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is your manager's office number?" 
    },

    {
    type: "list",
    name: "employerTitle",
    message: 'What type of employee do you want to enter?',
    choices: ['Engineer', 'Intern'],
    },

    {
    type: "input",
    name: "githubUName",
    message: "What is your engineer's Github username?" 
    },
    
    {
    type: "input",
    name: "school",
    message: "What is your intern's school?" 
    },

    ];
 
function getmanagerHTML (answers) {
    var managerhtml = `<div class="card">
    <div class="card-body">
        <h5 class="card-title nameManager">Name</h5>
      <h5 class="card-title manager">
        <i class="fas fa-tasks">  Manager</i></h5>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
      </ul> 
    </div>
  </div>`
    return html;
}
var manager = new Manager(WORK HERE NEXT!!!!); 
//upon receiving user information from questions, the answers will be populated to the html
inquirer.prompt(questions).then(answers => {
 
    var html = getmanagerHTML(answers);
    console.log(html);
    fs.writeFileSync("./index.html", html);
    });