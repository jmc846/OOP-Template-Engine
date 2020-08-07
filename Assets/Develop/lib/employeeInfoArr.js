const employeeInfoArr = [
    {
        type: 'checkbox',
        message: "Want to create an employee?",
        name: "new employee",
        choices: ['Yes', 'No'],
    },
    {
        type: 'checkbox',
        message: "What is the employee's role",
        name: 'employee role',
        choices: ["Manager", "Engineer", "Intern"],
        

    },
    {
        type: 'input',
        message: "Please provide an Employee ID",
        name: " employee id"
    },
    {
        type: 'input',
        message: "Please provide an Employee email",
        name: "employee mail"
    },
    {
        type: 'input',
        message: "Please provide an Employee name",
        name: "employeeName",

    },

]

module.exports = employeeInfoArr;