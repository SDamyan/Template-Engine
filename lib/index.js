//linking my html templates
const questions = require("./questions");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
//requiring my dependencies
const inquirer = require("inquirer");
const jest = require("jest");

//function to initalize the program
init();

//begin first by prompting the user with questions about their team through inquirer
async function init() {

  var managerAnswers = await inquirer.prompt(questions.managerQuestions);
  console.log(managerAnswers);

  var teamNumAnswers = await inquirer.prompt(questions.teamNumQuestions);
  console.log(teamNumAnswers);

    for (var i = 0; i < teamNumAnswers.teamNumber; i++) {
      var teamAnswers = await inquirer.prompt(questions.teamQuestions);
      console.log(teamAnswers);
        if (teamAnswers.employerTitle === "Engineer") {
        var engineerAnswers = await inquirer.prompt(questions.engineerQuestions);
        console.log(engineerAnswers);
        }

        else {
        var internAnswers = await inquirer.prompt(questions.internQuestions);
        console.log(internAnswers);
        };
    };
  }

//upon receiving user information from questions, the answers will be populated to the html
    // var html = getmanagerHTML(answers);
    
    // fs.writeFileSync("./index.html", html);
    //});

    // var html = getmanagerHTML(answers);
    // console.log(html);
    // fs.writeFileSync("./index.html", html);
  ;
  // }
/* //Manager
function getManagerHTML (answers) {
    var managerhtml = `<div class="card">
    <div class="card-body">
        <h5 class="card-title managerName">${answers.getName()}</h5>
      <h5 class="card-title managerTitle">
        <i class="fas fa-tasks">Manager</i></h5>
      <ul class="list-group list-group-flush">
          <li class="list-group-item managerID">${answers.getID()}</li>
          <li class="list-group-item managerEmail">${answers.getEmail()}</li>
          <li class="list-group-item officeNumber">${answers.getOfficeNumber()}</li>
      </ul> 
    </div>
  </div>`

    return html;
}


  var engineer = new Engineer(engineerName, engineerID, engineerTitle, enginnerGithub); 
    //upon receiving user information from questions, the answers will be populated to the html
    inquirer.prompt(engineerQuestions).then(answers => {
        
        var html = getengineerHTML(answers);
        console.log(html);
        fs.writeFileSync("./index.html", html);
        });

//Engineer
    function getengineerHTML (answers) {
      var engineerhtml = `<div class="card">
      <div class="card-body">
          <h5 class="card-title engineerName">${answers.getName()}</h5>
        <h5 class="card-title engineerTitle">
          <i class="fas fa-cogs">  Engineer</i></h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item engineerID">${answers.getID()}</li>
            <li class="list-group-item engineerEmail">${answers.getEmail()}</li>
            <li class="list-group-item engineerGithub">${answers.getGithub()}</li>
        </ul> 
      </div>
    </div>`
      return html;
  }

var intern = new Intern (internName, internID, internTitle, internNumber); 
//upon receiving user information from questions, the answers will be populated to the html
inquirer.prompt(internQuestions).then(answers => {
     
    var html = getinternHTML(answers);
    console.log(html);
    fs.writeFileSync("./index.html", html);
    });

//Intern
function getInternHTML(answers) {
  var internhtml = `<div class="card">
  <div class="card-body">
    <h5 class="card-title internName">${answers.getName()}</h5>
    <h5 class="card-title internTitle">
        <i class="fas fa-user-graduate">  Intern</i></h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item internID">${answers.getID()}</li>
        <li class="list-group-item internEmail">${answers.getEmail()}</li>
        <li class="list-group-item internSchool">${answers.getSchool()}</li>
    </ul> 
  </div>
</div>`
  return html; }*/
