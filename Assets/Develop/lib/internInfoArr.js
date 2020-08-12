const internInfoArr = [
    {
        type: 'input',
        name: "name",
        message: "Please provide an Internname",

    },
    {
        type: 'input',
        name: "email",
        message: "Please provide an Intern email",

    },
    {


        type: 'input',
        name: "id",
        message: "Please provide an Intern ID",
        default: '00000'
    },
  
    {
        type: 'input',
        name: 'university',
        message: "Please provide the Intern University ",
        name: "university name",
 
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
 
 module.exports = internInfoArr;