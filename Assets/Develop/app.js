const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const employeeInfoArr = require("./lib/employeeInfoArr");
const managerInfoArr = require("./lib/managerInfoArr");
const engineerInfoArr= require("./lib/engineerInfoArr");
const internInfoArr= require("./lib/internInfoArr");
const render = require("./lib/htmlRenderer");

var teamMembers = [];
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

 const jacob = new Manager('jacob', '25', 'jacob@gmail.com', '555-555-5555');
 const kim = new Intern('kim','23','kim@gmail.com','Rutgers');
 const randy = new Engineer('randy', '30', 'randy@gmail','randy2randy@github.com');
 const employeeArr = [jacob, kim, randy];

 
//  console.log(jacob);
//  console.log(kim);
//  console.log(randy);

// Write code to use inquirer to gather information about the development team members,
// function generateTeamHtml(){
//   fs.writeFile("./output/team.html", html, 'utf8', () => {
//     console.log("Finished")
//     .then(() => {    
//       htmlRender()
//       console.log(teamMembers)
  
//     });
// }, 
//   )

// }
render(teamMembers)


function createManager (){
inquirer.prompt(managerInfoArr).then(function(managerDataResponse){
  console.log(teamMembers,managerDataResponse);
  let employee= new Manager(teamMembers ++ )
  // teamMembers.push(employee)
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
      case 'finish team':
        render()
    }
   }
)
  }
 
function createEngineer (){
  inquirer.prompt(engineerInfoArr).then(function(engineerDataResponse){
    console.log(teamMembers,engineerDataResponse);
    let employee= new Engineer (teamMembers ++ )
    // teamMembers.push(employee)
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
       
      case 'finish team':
        render();
      }

  });
  }

  function createIntern (){
    inquirer.prompt(internInfoArr).then(function(internDataResponse){
      console.log(teamMembers, internDataResponse);
      let employee = new Intern (teamMembers ++ )
      // teamMembers.push(employee)
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

      case 'finish team':
        render();

      };
    })
  }


function onboard() {
   inquirer.prompt(employeeInfoArr).then(function(employeeDataResponse) {   
       let newEmployeeRole = employeeDataResponse.role.join('')
      console.log(newEmployeeRole, teamMembers)
      let employee= new Employee (teamMembers ++)
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
   };    
  }            
  ) ;         
          
}; 


onboard()
