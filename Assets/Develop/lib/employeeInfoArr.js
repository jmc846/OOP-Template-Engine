const employeeInfoArr = [
    {
        type: 'list',
        name: "new team",
        message: "Please Create an Engineering Team",
        choices: ['Yes', 'Maybe later'],
    },
   

    
    {
        type: 'checkbox',
        name: 'role',
        message: "What is the employee's role",
        choices: [
            'Manager',
            'Engineer',
            'Intern'
        ],
    },

// Example question obj of obj
// const employee prompt = {
// type: 'input',
// name: 'example',
// message: 'what is an exmple',
// forcePoints: 300
// };

]

module.exports = employeeInfoArr;