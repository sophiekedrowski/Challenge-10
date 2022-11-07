const employees = require("./lib/Employees");
const inquirer = require("inquirer")
const fs = require("fs");
const path = require("path");
team = [];

function starting () {
function makeTeam(){
inquirer.prompt([
        {
            type: 'list',
            message: 'Pick your employee',
            name: 'type',
            choices: ['Employee', 'Manager', 'Engineer', "Intern"],
        }
    ])
    .then((data) => {
        //Need help with if statement so it selects correct prompt

})

    function managerIdentity (){
        inquirer.prompt([
                {
                    type: 'input',
                    message: 'What is your name?',
                    name: 'name',
                },
                {
                    type: 'input',
                    message: 'What is your ID?',
                    name: 'ID',
                },
                {
                    type: 'input',
                    message: 'What is your email?',
                    name: 'email',
                },
                {
                type: 'input',
                message: 'What is your office number?',
                name: 'officeNumber',
                },
        ]).then(data => {
            const manager = new managerIdentity(answers.name, answers.ID, answers.email, answers.officeNumber);
            team.push(manager);
            makeTeam();
          });
    }

    function engineerIdentity (){
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is your ID?',
                name: 'ID',
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is your github username?',
                name: 'github',
            },
        ]).then(data => {
            const engineer = new engineerIdentity(answers.name, answers.ID, answers.email, answers.github);
            team.push(engineer);
            makeTeam();
          });
    }

    function internIdentity (){
        inquirer.prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is your ID?',
                name: 'ID',
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email',
            },
            {
                type: 'input',
                message: 'What school do you attend?',
                name: 'school',
            },
        ]).then(data => {
            const intern = new internIdentity(answers.name, answers.ID, answers.email, answers.school);
            team.push(intern);
            makeTeam();
          });
    }}

makeTeam();

}

    starting();