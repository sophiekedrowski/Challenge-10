const employees = require("./lib/Employees");
const inquirer = require("inquirer")
const fs = require('fs');
const path = require("path");
var team = [];

function starting() {
    function makeTeam() {
        inquirer.prompt([
            {
                type: 'list',
                message: 'Pick your employee',
                name: 'type',
                choices: ['Manager', 'Engineer', 'Intern', 'No other team members to add'],
            }
        ])
            .then((data) => {

                if (data.type === 'Manager') {
                    managerIdentity();
                }
                else if (data.type === 'Engineer') {
                    engineerIdentity();
                }
                else if (data.type === 'Intern') {
                    internIdentity();
                }
                else {
                    console.log("\nTeam complete")
                    fs.writeFile("index.html", generateHtml(genDivs(team)), (err) =>
                        err ? console.log(err) : console.log('Success!')
                    );

                }
                // console.log(team)
            })
    }

    function managerIdentity() {
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
            const manager = new employees.Manager(data.name, data.ID, data.email, data.officeNumber);
            team.push(manager);
            makeTeam();
        })
    }

    function engineerIdentity() {
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
            const engineer = new employees.Engineer(data.name, data.ID, data.email, data.github);
            team.push(engineer);
            makeTeam();
        });
    }

    function internIdentity() {
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
            const intern = new employees.Intern(data.name, data.ID, data.email, data.school);
            team.push(intern);


            makeTeam();
        });

    }


    makeTeam();


}

starting();

function generateHtml(profiles) {
    return ` <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <link rel="stylesheet" type="text/css" href="./style.css">
        </head>
        <body>
        ${profiles}
        </body>
        </html>  `
}


function genDiv(employee) {
    // console.log(employee)
    if (employee.getRole() === "Manager") {
        return `
        <div class="profile">Role: ${employee.getRole()}, Name: ${employee.getName()}, ID: ${employee.getID()}, Email: <a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a>, Office Number: ${employee.officeNumber} </div>
        `}
    if (employee.getRole() === "Engineer") {
        return `
        <div class="profile">Role: ${employee.getRole()}, Name: ${employee.getName()}, ID: ${employee.getID()}, Email: <a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a>, Github: <a href="https://github.com/${employee.github}" target="_blank"> ${employee.github} </div>
        `}
    if (employee.getRole() === "Intern") {
        return `
            <div class="profile">Role: ${employee.getRole()}, Name: ${employee.getName()}, ID: ${employee.getID()}, Email: <a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a>, school: ${employee.getSchool}</div>
            `}
}


function genDivs(team) {
    let divs = ""
    for (let index = 0; index < team.length; index++) {
        const employee = team[index];
        divs += genDiv(employee)
        // console.log(employee)
    }
    return divs
}
