const employeeInfoArr = [
     {
         type: 'list',
         name: "new",
         message:"Want to create an employee?",      
         choices: ['Yes', 'No'],
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
    
    {
        type: 'input',
        name: "id",
        message: "Please provide an Employee ID",    
        default: '00000'
    },
    {
        type: 'input',
        name: "email",
        message: "Please provide an Employee email",
        
    },
    {
        type: 'input',
        name: "name",
        message: "Please provide an Employee name",
  

    },
    

]

module.exports = employeeInfoArr;