const managerInfoArr = [
    {
        type: 'input',
        name: "name",
        message: "Please provide a Manager name",

    },
    {
        type: 'input',
        name: "email",
        message: "Please provide a Manager email",

    },
    {


        type: 'input',
        name: "id",
        message: "Please provide a Manager ID",
        default: '00000'
    },

    {
        type: 'input',
        name: 'officenumber',
        message: "Please provide the Manager Office Number",
        officeNumber: 'officeNumber',

    },
    {

        type: 'checkbox',
        name: 'team members',
        message: "Do you want to create additional Team members? if so, what Role",
        choices: ['Engineer',
            'Manager',
            'Intern',
            'finish team']

    }


]

module.exports = managerInfoArr;