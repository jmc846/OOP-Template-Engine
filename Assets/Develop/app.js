const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const htmlRender = require("./lib/htmlRenderer");
const createEmployeeArr = require("./lib/createEmployeeArr");

  

const jacob = new Manager('jacob', '25', 'jacob@gmail.com', '555-555-5555');
const kim = new Intern('kim','23','kim@gmail.com','Rutgers');
const randy = new Engineer('randy', '30', 'randy@gmail','randy2randy@github.com');
const employeeArr = [jacob, kim, randy];
htmlRender(employeeArr);
console.log(htmlRender(employeeArr))
console.log(jacob);
console.log(kim);
console.log(randy);

// Write code to use inquirer to gather information about the development team members,

function init () {
  // let employeeData = ();
    inquirer.prompt(createEmployeeArr)
    .then((response) => {   
      
        console.log("html generation has begun, wait one moment");
        const finishedMarkdown = createEmployeeArr.Employee();
        fs.writeFile("team.html",finishedMarkdown, err =>{
          if(err){
            console.log(err);
          } else{
            console.log("YAY!!!")
          }
        });
    })
    .catch((err) => {
        console.log(err);
    }
    )
    ;
}
 
init();




// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
render();