console.log('Hello Node!');
const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/assets/js/Employee");
const Manager = require("./lib/assets/js/Manager");
const Engineer = require("./lib/assets/js/Engineer");
const Intern = require("./lib/assets/js/Intern");
const { choices } = require("yargs");

const employeeQuestions = [];
let generatedHTML = '';
let spec;

inquirer.prompt([
    {
        type: "list",
        name: "teamMember",
        message: "Which type of Team Memeber would you like to add next?",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "I do not want to add anymore Team Members"
        ],
    },
]).then((response) => {
    response.choices  === "Manager"
        ? managerQuestions()
        : response.choices === "Engineer"
        ? engineerQuestions()
        : response.choices === "intern"
        ? internQuestions()
        : response.choices === "I do not want to add anymore Team Members"
        ? htmlGenerator() 
        : console.log("done");
});

function managerQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the Manager's name?",
            }, 
            {
                type: "input",
                name: "managerId",
                message: "what is the Team Manager's ID?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the Manager's email",
            },
        ])
        .then ((response) => {
            const manager = new Manager(
                response.managerName,
                response.managerId,
            )
            employeeQuestions.push(manager)
            teamMembersAnswer(response.teamMember)
        })
        .catch((error) => console.log(error))
}

function engineerQuestions {

}

function internQuestions {

}

function teamMembersAnswer(response) {

}

function initApp() {
    startHtml();
    addMember();
}