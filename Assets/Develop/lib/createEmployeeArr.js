const createEmployeeArr = [
    {   type: 'checkbox',
        message: "Want to create an employee?",
        choices: ['Yes','No']
    },
    { type: 'checkbox',  
    message: "What is the employee's role",
    choices: ["Manager","Engineer","Intern"],
    name: 'employeeRole'
      
  },
     {   type: 'input',
        message: "Please provide an Employee ID",
        name: "id"
    },
    {  
      type: 'input',  
      message: "Please provide an Employee email",
        name: "email"
    },
    {    type: 'input',
    message: "Please provide an Employee name",
    name: "employeeName",
      
    },
   
  ]

  module.exports = createEmployeeArr;