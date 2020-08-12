const engineerInfoArr = [
    {
        type: 'input',
        name: "name",
        message: "Please provide an Engineer name",

    },
    {
        type: 'input',
        name: "email",
        message: "Please provide an Engineer email",

    },
    {


        type: 'input',
        name: "id",
        message: "Please provide an Engineer ID",
        default: '00000'
    },

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