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

let teamNumQuestions = [
    {
        type: "number",
        name: "teamNumber",
        message: 'How many more team members would you like to enter?',
    },
]

let teamQuestions = [ 
    {
    type: "list",
    name: "employerTitle",
    message: 'Which type of employee would you like to enter next?',
    choices: ['Engineer', 'Intern'],
    },
]

let engineerQuestions = [
    
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
    engineerQuestions,
    teamNumQuestions
}

