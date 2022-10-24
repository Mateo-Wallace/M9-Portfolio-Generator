// Modules and Packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');

// Questions
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "Where do you live?",
        name: "location"
    },
    {
        type: "input",
        message: "Write a short description of yourself",
        name: "bio"
    },
    {
        type: "input",
        message: "What is your linkedin url?",
        name: "linkedin"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github"
    }
];

// Write to file function
function writeToFile(data) {
    fs.writeFile('index.html', data, (err) =>
        err ? console.error(err) : console.log('Portfolio file saved as index.html')
    )
}

// Init function
function init( ) {
    inquirer
        .prompt(questions)
        .then((responses) => writeToFile(generateHTML(responses)));
}

init()