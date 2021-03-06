const { isNumber, isString } = require("util");
// module consists of questions and validation of answers of users after their input, 
// also 'when' allows us to ask different employees different questions
const employeeInfoArr = [
    {
        type: "list",
        message: "Please choose your position in the team.",
        choices: ["Manager", "Engineer", "Intern"],
        default: 0,
        name: "employeePosition"
    },
    {
        type: "input",
        message: "Please enter your Name.",
        name: "employeeName",
        validate: employeeName => {
            let alphaExp = /^(([A-za-z-_]+[\s]{1}[A-za-z-_]+)|([A-Za-z-_]+))$/gim;
            if (!employeeName.match(alphaExp)) {
                return "Please use letters and _-";
            } else {
                return true

            }
        }
    },
    {
        type: "input",
        message: "Please enter your employee ID.",
        name: "employeeID",
        validate: employeeID => {
            let alphaExp = /^([0-9])+$/;
            if (!employeeID.match(alphaExp)) {
                return " only  numbers";
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        message: "Enter your email address.",
        name: "email",
        validate: email => {
            let alphaExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            if (!email.match(alphaExp)) {
                return "Please enter a valid e-mail";
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        message: "Please input your Github username.",
        name: "gitHubAddress",
        validate: gitHubAddress => {
            let alphaExp = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
            if (!gitHubAddress.match(alphaExp)) {
                return "Use ABC no slashes or symbols";
            } else {
                return true;
            }
        },
        when: function (response) { return response.employeePosition === "Engineer" }
    },
    {
        type: "input",
        message: "Please input your office number.",
        name: "officeNumber",
        validate: officeNumber => {
            let alphaExp = /^([0-9])+$/;
            if (!officeNumber.match(alphaExp)) {
                return "Only #s Please";
            } else {
                return true;
            }
        },
        when: function (response) { return response.employeePosition === "Manager" }
    },
    {
        type: "input",
        message: "Please input your university.",
        name: "university",
        validate: university => {
            if (university.length < 1) {
                return "Name is too short";
            }
            else {
                return true;
            }
        },
        when: function (response) { return response.employeePosition === "Intern" }
    },
    {
        type: "confirm",
        message: " Would you like to input additional employee data?",
        name: "nextE",
    },

];
module.exports = employeeInfoArr;