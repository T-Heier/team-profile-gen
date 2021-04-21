const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');


const manQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the manager's name",
        // validation
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's team id number?",
        // validation
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
        // validation
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        // validation
    },
    
]

const engQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the engineer's name",
        // validation
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineers's id number?",
        // validation
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
        // validation
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?"

    }
]

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter the manager's name",
        // validation
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's team id number?",
        // validation
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
        // validation
    },
    {
        type: "input",
        name: "school",
        message: "What school does this intern attend?"

    }
]

const addTeamMember = [
    {
        type: "list",
        name: "teamMemberList",
        message: "Add a team member?",
        choices: ["Engineer", "Intern", "No more team members."]
    }
]

















// App Start
menu = () => {
    createManager = () => {
        inquirer.prompt(manQuestions).then(({name, id, email, officeNumber}) => {
            const manager = new Manager(name, id, email, officeNumber)
            console.log(manager);
            newTeamMember();
        })
    }
    createEngineer = () => {
        inquirer.prompt(engQuestions).then(({name, id, email, github}) => {
            const engineer = new Engineer(name, id, email, github);
            console.log(engineer);
        })
    }

    createIntern = () => {
        inquirer.prompt(internQuestions).then(({name, id, email, school}) => {

        })
    }

    newTeamMember = () => {
        inquirer.prompt(addTeamMember)
        if (addTeamMember == "Engineer") {
            createEngineer();
        } else if (addTeamMember == "Intern") {
            createIntern();
        }
    }


    createManager();
    
}


menu();