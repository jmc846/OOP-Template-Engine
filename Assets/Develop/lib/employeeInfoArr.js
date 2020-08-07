const employeeInfoArr = [
     {
         type: 'list',
         name: "new employee",
         message:"Want to create an employee?",      
         choices: ['Yes', 'No'],
     },
     {
         type: 'checkbox',
         name: 'employee role',
         message: "What is the employee's role",        
         choices: [                  
                 'Manager',          
                 'Engineer',
                 'Intern'             
         ],      
     },
    {
        type: 'input',
        message: "Please provide an Employee ID",
        name: " employee id",
        default: '00000'
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