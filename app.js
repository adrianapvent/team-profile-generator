console.log('Hello Node!');
const inquirer = require("inquirer");
const fs = require("fs");

const employees = [];

function initApp() {
    startHtml();
    addMember();
}