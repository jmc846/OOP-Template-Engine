const employeeInfoArr = [
    {
        type: 'list',
        name: "new team",
        message: "Please Create an Engineering Team",
        choices: ['Yes', 'Maybe later'],
    },
    {
        type: 'list',
        name: "new",
        message: "Want to create an employee?",
        choices: ['Yes', 'No'],
    },

    {
        type: 'input',
        name: "name",
        message: "Please provide an Employee name",

    },
    {
        type: 'input',
        name: "email",
        message: "Please provide an Employee email",

    },
    {


        type: 'input',
        name: "id",
        message: "Please provide an Employee ID",
        default: '00000'
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


]

module.exports = employeeInfoArr;