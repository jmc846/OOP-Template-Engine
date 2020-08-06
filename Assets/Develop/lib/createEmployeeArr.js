const createEmployeeArr = [
    {
        type: 'checkbox',
        message: "Want to create an employee?",
        name: "new employee",
        choices: ['Yes', 'No']
    },
    {
        type: 'checkbox',
        message: "What is the employee's role",
        name: 'employeeRole',
        choices: ["Manager", "Engineer", "Intern"],
        

    },
    {
        type: 'input',
        message: "Please provide an Employee ID",
        name: "id"
    },
    {
        type: 'input',
        message: "Please provide an Employee email",
        name: "email"
    },
    {
        type: 'input',
        message: "Please provide an Employee name",
        name: "employeeName",

    },

]

module.exports = createEmployeeArr;