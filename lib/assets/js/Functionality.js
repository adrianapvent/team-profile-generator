const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Manager.js");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");
const htmlTemplate = require("../../../src/htmlTemplate.js");
const teamData = [];
const managerPrompt = [
    {
        type: "input",
        name: "managerName",
        message: "What is the Manager's name?",
        validate: managerName => {
            if (managerName) {
                return true;
            } else {
                console.log ("Please enter the manager's name");
                return false;
            }
        }
    }, 
    {
        type: "input",
        name: "managerId",
        message: "What is the Team Manager's ID?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the Manager's email",
    },
    {
        type: "input",
        name: "managerNumber",
        message: "Please enter your office number?"
    },
]
const engineerPrompt = [
    {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's name?",
    }, 
    {
        type: "input",
        name: "engineerId",
        message: "what is the Team Engineer's ID?",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's email",
    },
    {
        type: "input", 
        name: "engineerGithub", 
        message: "Please enter your github username",
    },
]
const internPrompt = [
    {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
    }, 
    {
        type: "input",
        name: "internId",
        message: "What is the Team Intern's ID?",
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email",
    },
    {
        type: "input", 
        name: "internSchool", 
        message: "Please enter your school name",
    }

]

class Functionality {
    constructor() {
        //
    }
    initPrompts() {
        console.log(`
        +++++++
        My menu
        +++++++
        `)
        return inquirer
            .prompt(
                {
                    type: 'list',
                    name: 'selection',
                    message: 'Please add an employee.',
                    choices: ['Manager', 'Engineer', 'Intern', 'Done']
                }
            )
            .then(response => {
                if (response.selection === 'Manager') {
                    console.log(`
                    ++++++++
                    MANAGER
                    ++++++++
                    `)
                    inquirer.prompt(managerPrompt).then(response => {
                        const manager = new Manager (response.managerName, response.managerId, response.managerEmail, response.managerNumber);

                        teamData.push(manager);
                        return this.initPrompts();
                    })
                }
                else if (response.selection === 'Engineer') {
                    console.log(`
                    ++++++++
                    ENGINEER
                    ++++++++
                    `)

                    inquirer.prompt(engineerPrompt).then(response => {
                        console.log(response, "Here are the reponses");
                        const engineer = new Engineer (response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
                        teamData.push(engineer);
                        return this.initPrompts();
                    });
                    
                }
                else if (response.selection === 'Intern') {
                    console.log(`
                    ++++++
                    INTERN
                    ++++++
                    `)

                    inquirer.prompt(internPrompt).then(response => {
                        console.log(response, "these are the properties");
                        const intern = new Intern (response.internName, response.internId, response.internEmail, response.internSchool);
                        teamData.push(intern);
                        return this.initPrompts();
                    });
                }
                else {
                    return this.writeTemplate(teamData);
                }
            });
    }
    writeTemplate(teamData) {
        console.log(teamData, 'LOOK I RECEIVED IT...!');
        const completeHtmlTemplate = htmlTemplate(teamData);

        fs.writeFile('./dist/index.html', completeHtmlTemplate, (err) => {
            if (err) throw new Error(err);
        });
    }
}

module.exports = Functionality;