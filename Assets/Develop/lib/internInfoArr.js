const internInfoArr = [
  
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