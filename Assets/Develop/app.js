const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const employeeInfoArr = ('./lib/employeeInfoArr');

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

function inputEmployeeInfo() {
  let employeeData = {};
  inquirer.prompt(employeeInfoArr).then(response => {
      if (response.employeePosition === "Manager") {
          employeeData = new Manager(response.employeeName, response.employeeID, response.email, response.officeNumber);
          isManager = true
      } else if (response.employeePosition === "Engineer") {
          employeeData = new Engineer(response.employeeName, response.employeeID, response.email, response.gitHubAddress);
          isEngineer = true;
      } else {
          employeeData = new Intern(response.employeeName, response.employeeID, response.email, response.school);
      }
      employees.push(employeeData);
      if (response.nextE) {
          inputEmployeeInfo();
      } else {

          if (isManager === false) {
              console.log("There is no manager on team");
              inputEmployeeInfo();
          } else if (isEngineer === false) {
              console.log("There is no engineers on team");
              inputEmployeeInfo();
          } else {
              fs.writeFile(outputPath, render(employees, teamName), (er) => {
                  if (er) return console.log(er);
                  console.log(`team.html completed...Look for ${outputPath}`);
              });
              return
          }
      }


  });
};
// getting the name of the team and validate it
function getTeamName() {
  inquirer.prompt([
      {
          type: "input",
          message: "Please input your team name.",
          name: "teamName",
          validate: teamName => {
              if (teamName.length < 1) {
                  return "Team name is too short";
              }
              else {
                  return true;
              }
          },
      },
  ]).then(response => {
      teamName = response.teamName;
      inputEmployeeInfo();
  });
}
getTeamName();


