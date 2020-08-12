const managerInfoArr = [
  
   {
       type: 'input',
       name: 'officenumber',
       message: "Please provide the Manager Office Number",
       officeNumber: 'officeNumber',

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

module.exports = managerInfoArr;