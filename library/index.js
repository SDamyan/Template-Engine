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
    var managerhtml = ``
    return html;
}
var manager = new Manager(WORK HERE NEXT!!!!); 
//upon receiving user information from questions, the answers will be populated to the html
inquirer.prompt(questions).then(answers => {
 
    var html = getmanagerHTML(answers);
    console.log(html);
    fs.writeFileSync("./index.html", html);
    });