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
var engineers = [];
var interns = [];
const htmlRender = require("./lib/htmlRenderer");
const employeeInfoArr = require("./lib/employeeInfoArr");
const managerInfoArr = require("./lib/managerInfoArr");
const engineerInfoArr = require("./lib/engineerInfoArr");
const internInfoArr = require("./lib/internInfoArr");


const jacob = new Manager('jacob', '25', 'jacob@gmail.com', '555-555-5555');
const kim = new Intern('kim', '23', 'kim@gmail.com', 'Rutgers');
const randy = new Engineer('randy', '30', 'randy@gmail', 'randy2randy@github.com');
const employeeArr = [jacob, kim, randy];


//  console.log(jacob);
//  console.log(kim);
//  console.log(randy);

// Write code to use inquirer to gather information about the development team members,
function generateTeamHtml() {
  fs.writeFile("./output/team.html", html, 'utf8', () => {
    console.log("Finished")
      .then(() => {
        htmlRender()
        console.log(teamMembers)

      });
  },
  ).catch
  { err }

}


function createManager() {
  inquirer.prompt(managerInfoArr).then(function (managerDataResponse) {
    console.log(employees, managerDataResponse, managers++);
    let employee = new Manager(managerDataResponse.name, managerDataResponse.id,
      managerDataResponse.email, managerDataResponse.officeNumber)
    teamMembers.push(managers)
    let addTeamMember = managerDataResponse.teamMembers.join('')
    switch (addTeamMember) {
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
        generateTeamHtml();
    }
  });

}
function createEngineer() {
  inquirer.prompt(engineerInfoArr).then(function (engineerDataResponse) {
    console.log(employees, engineerDataResponse.github, engineers++);
    let employee = new Engineer(engineerDataResponse.name, engineerDataResponse.id,
      engineerDataResponse.email, engineerDataResponse.github)
    teamMembers.push(engineers)
    let addTeamMember = engineerDataResponse.teamMembers.join('')
    switch (addTeamMember) {
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
        generateTeamHtml();
    }

  });
}

function createIntern() {
  inquirer.prompt(internInfoArr).then(function (internDataResponse) {
    console.log(employees, internDataResponse.university, interns++);
    let employee = new Intern(internDataResponse.name, internDataResponse.id, internDataResponse.email,
      internDataResponse.university)
    teamMembers.push(interns)
    let addTeamMember = internDataResponse.teamMembers.join('')
    switch (addTeamMember) {
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
        generateTeamHtml();
    }

  });

}

function onboard() {
  inquirer.prompt(employeeInfoArr).then(function (employeeDataResponse) {
    console.log(employees, employeeDataResponse.role);
    let newEmployeeRole = employeeDataResponse.role.join('')
    console.log(newEmployeeRole, employees++)
    teamMembers.push(employees)
    let employee = new Employee(employeeInfoArr.name, employeeInfoArr.id, employeeInfoArr.email)


    switch (newEmployeeRole) {
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

  ;
;
// }


;



// } 



;


