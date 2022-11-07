const employees = require("./lib/Employees");
const inquirer = require("inquirer")
const fs = require("fs");
const path = require("path");
team = [];

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
                }
                console.log(team)
            })}

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
            })}

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
