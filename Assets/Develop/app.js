// Dependencies
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const employeeInfoArr = require('./lib/employeeInfoArr');
// Global Varibles
var teamMembers = [];
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// Examples of each employee position
 const jacob = new Manager('jacob', '25', 'jacob@gmail.com', '555-555-5555');
 const kim = new Intern('kim','23','kim@gmail.com','Rutgers');
 const randy = new Engineer('randy', '30', 'randy@gmail','randy2randy@github.com');
 const employeeArr = [jacob, kim, randy];

 

// Function to input each employee's informatioin
function inputEmployeeInfo() {
  let employeeData = [];
  console.log(employeeInfoArr)
  inquirer.prompt(employeeInfoArr).then(response => {
      if (response.employeePosition === "Manager") {
          manager = new Manager(response.employeeName, response.employeeID, response.email, response.officeNumber);
          isManager = true
          employeeData.push(manager)
      } else if (response.employeePosition === "Engineer") {
          engineer = new Engineer(response.employeeName, response.employeeID, response.email, response.gitHubAddress);
          isEngineer = true;
          employeeData.push(engineer)
      } else {
          intern = new Intern(response.employeeName, response.employeeID, response.email, response.university);
          employeeData.push(intern)
      }
            if (response.nextE) {
          inputEmployeeInfo();
      } else {
          //     // the criteria states each team has a manager an engineer
          // if (isManager === false) {
          //     console.log("There is no manager on team");
          //     inputEmployeeInfo();
          // } else if (isEngineer === false) {
          //     console.log("There is no engineers on team");
          //     inputEmployeeInfo();
          // } else {
            // FS write renders all input by user to the HTML
              fs.writeFile(outputPath, render(employeeData, teamName), (er) => {
                console.log(employeeData)
                  if (er) return console.log(er);
                  console.log(`team.html completed...Look for ${outputPath}`);
              });
              return
          }
      }

)
  };
// }
  ;
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


