const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./dist/generateHTML')
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const { create } = require('domain');


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
        message: "Enter the interns's name",
        // validation
    },
    {
        type: "input",
        name: "id",
        message: "What is the interns's team id number?",
        // validation
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
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


// this is the array of data where the employee's should get pushed into?
const employees = [];



// App Start
menu = () => {
    // creates a manager with the prompt of manager questions
    createManager = () => {
        inquirer.prompt(manQuestions).then(({name, id, email, officeNumber}) => {
            const manager = new Manager(name, id, email, officeNumber)
            employees.push(manager)
            console.log(manager);
            newTeamMember();
        })
    }
    // creates a new teammember with the engineer or intern prompts
    newTeamMember = () => {
        inquirer.prompt(addTeamMember)
        .then(({teamMemberList}) => {
            if (teamMemberList == "Engineer") {
                createEngineer();
            } else if (teamMemberList == "Intern") {
                createIntern();
            } else {
                teamMemberList == "No more team members"
                // run generate html script
            }
        })
    }
    // creates an engineer using the prompt questions
    createEngineer = () => {
        inquirer.prompt(engQuestions).then(({name, id, email, github}) => {
            const engineer = new Engineer(name, id, email, github);
            console.log(engineer);
            employees.push(engineer)
            newTeamMember();
        })
    }
    // creates an intern using the prompt questions
    createIntern = () => {
        inquirer.prompt(internQuestions).then(({name, id, email, school}) => {
            const intern = new Intern(name, id, email, school);
            console.log(intern)
            employees.push(intern)
            newTeamMember();
        })
    }
    createManager();

}

menu()


function writeHTML () {
    fs.writeFile(index.html, (generateHTML(employees)), (err) => {
        if (err) {
            console.error(err)
        }
    });
}
