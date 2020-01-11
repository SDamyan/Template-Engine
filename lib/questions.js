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
