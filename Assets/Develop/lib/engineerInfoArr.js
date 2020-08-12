const engineerInfoArr = [

    {
        type: 'input',
        name: 'github',
        message: "Please provide the Engineer GitHub username ",


    },
    {
        type: 'checkbox',
        name: 'team members',
        message: "Do you want to create additional Team members? if so, what Role",
        choices: ['Engineer',
            'Manager',
            'Intern']

    }

]

module.exports = engineerInfoArr;