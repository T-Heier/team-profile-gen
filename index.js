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

















// App Start
menu = () => {
    createManager = () => {
        inquirer.prompt(manQuestions).then(({name, id, email, officeNumber}) => {
            const manager = new Manager(name, id, email, officeNumber)
            console.log(manager);
        })
    }
    createManager();
}


menu();