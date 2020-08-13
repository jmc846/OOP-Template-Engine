const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
var teamMembers = [];
var employees = [];
var managers = [];
var engineers =[];
var interns = [];
const htmlRender = require("./lib/htmlRenderer");
const employeeInfoArr = require("./lib/employeeInfoArr");
const managerInfoArr = require("./lib/managerInfoArr");
const engineerInfoArr= require("./lib/engineerInfoArr");
const internInfoArr= require("./lib/internInfoArr");


 const jacob = new Manager('jacob', '25', 'jacob@gmail.com', '555-555-5555');
 const kim = new Intern('kim','23','kim@gmail.com','Rutgers');
 const randy = new Engineer('randy', '30', 'randy@gmail','randy2randy@github.com');
 const employeeArr = [jacob, kim, randy];
 
 
//  console.log(jacob);
//  console.log(kim);
//  console.log(randy);

// Write code to use inquirer to gather information about the development team members,
function generateTeamHtml(){
  let finishTeam = managerInfoArr.teamMembers.join('')
  .then(() => {
    let html = render(teamMembers);
    fs.writeFile("./output/team.html", html, 'utf8', () => {
      console.log("Finished")
    });
}
  )

}

function createManager (){
inquirer.prompt(managerInfoArr).then(function(managerDataResponse){
  console.log(employees,managerDataResponse, managers ++);
  let employee= new Manager(managerDataResponse.name, managerDataResponse.id,
     managerDataResponse.email, managerDataResponse.officeNumber)
     teamMembers.push(managers)
  let officeNumber = managerDataResponse.officeNumber
  let addTeamMember = managerDataResponse.teamMembers.join('')
      switch (addTeamMember){
        case 'Manager':    
        createManager();   
      break;
        
        case 'Engineer':
       createEngineer();   
      break;
    
        case 'Intern':     
        createIntern();
      break;
      case 'Finish Team':
        htmlRender(teamMembers);
      }
});

}
function createEngineer (){
  inquirer.prompt(engineerInfoArr).then(function(engineerDataResponse){
    console.log(employees,engineerDataResponse.github, engineers ++);
    let employee= new Engineer(engineerDataResponse.name, engineerDataResponse.id,
       engineerDataResponse.email, engineerDataResponse.github)
       teamMembers.push(engineer)
    let github = engineerDataResponse.github
    let addTeamMember = engineerDataResponse.teamMembers.join('')
      switch (addTeamMember){
        case 'Manager':    
        createManager();   
      break;
        
        case 'Engineer':
       createEngineer();   
      break;
    
        case 'Intern':     
        createIntern();
      break;
       
      case 'Finish Team':
         htmlRender(teamMembers);
      }

  });
  }

  function createIntern (){
    inquirer.prompt(internInfoArr).then(function(internDataResponse){
      console.log(employees, internDataResponse.university, interns ++);
      let employee= new Intern(internDataResponse.name, internDataResponse.id, internDataResponse.email,
         internDataResponse.university)
         teamMembers.push(interns)
      let university = internDataResponse.university
      let addTeamMember = internDataResponse.teamMembers.join('')
      switch (addTeamMember){
        case 'Manager':    
        createManager();   
      break;
        
        case 'Engineer':
       createEngineer();   
      break;
    
        case 'Intern':     
        createIntern();
      break;

      case 'Finish Team':
        generateHtml();
      }

    });

    }

function onboard() {
   inquirer.prompt(employeeInfoArr).then(function(employeeDataResponse) {   
     console.log(employees, employeeDataResponse.role);   
       let newEmployeeRole = employeeDataResponse.role.join('')
      console.log(newEmployeeRole, employees ++)
      teamMembers.push(employees)
      let employee= new Employee(employeeInfoArr.name, employeeInfoArr.id, employeeInfoArr.email)
    

    switch (newEmployeeRole){
     case 'Manager':    
    createManager();   
  break;
    
    case 'Engineer':
   createEngineer();   
  break;

    case 'Intern':     
    createIntern();
  break;
   }

}   
  
   );            
 
   ;     

          console.log("html generation has begun, wait one moment");
      
 

    };

    onboard() 


//   ;
//      ;
// // // and to create objects for each team member (using the correct classes as blueprints!)

// // // After the user has input all employees desired, call the `render` function (required
// // // above) and pass in an array containing all employee objects; the `render` function will
// // // generate and return a block of HTML including templated divs for each employee!

// // // After you have your html, you're now ready to create an HTML file using the HTML
// // // returned from the `render` function. Now write it to a file named `team.html` in the
// // // `output` folder. You can use the variable `outputPath` above target this location.
// // // Hint: you may need to check if the `output` folder exists and create it if it
// // // does not.

// // // HINT: each employee type (manager, engineer, or intern) has slightly different
// // // information; write your code to ask different questions via inquirer depending on
// // // employee type.

// // // HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// // // and Intern classes should all extend from a class named Employee; see the directions
// // // for further information. Be sure to test out each class and verify it generates an
// // // object with the correct structure and methods. This structure will be crucial in order
// // // for the provided `render` function to work! ```
// // // render();
//    ;  
  
;
            ;
            // }
  

   ;
   

  
            // } 
            
          
    
          ;
         
          
