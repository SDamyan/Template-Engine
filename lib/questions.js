//questions for user input to populate card information

let managerQuestions = [ 
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
]

let teamQuestions = [ 
   /*  {
    type: "input",
    name: "teamNumber",
    message: 'How many people are in your team total (besides the manager)?',
    },
 */
    {
    type: "list",
    name: "employerTitle",
    message: 'What team would you like to enter next?',
    choices: ['Engineer', 'Intern'],
    },
]
    
let engineerQuestions = [
    {
    type: "number",
    name: "engineerTeamNum",
    message: "How many engineers are on your team?" 
    },
    
    {
    type: "input",
    name: "engineerName",
    message: "What is your engineer's name?"   
    },  
    
    {
    type: "input",
    name: "engineerID",
    message: "What is your engineer's ID?" 
    },

    {
    type: "input",
    name: "githubUName",
    message: "What is your engineer's Github username?" 
    }, 
]

let internQuestions = [
    {
    type: "number",
    name: "internTeamNum",
    message: "How many interns are on your team?" 
    },
    
    {
    type: "input",
    name: "internName",
    message: "What is your intern's name?"   
    },  
    
    {
    type: "input",
    name: "internID",
    message: "What is your intern's ID?" 
    },
    
    {
    type: "input",
    name: "school",
    message: "What is your intern's school?" 
    }, 
]

module.exports= {
    internQuestions,
    managerQuestions,
    teamQuestions,
    engineerQuestions
}

