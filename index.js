// Modules and Packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');

// Questions
const questions = [
    {
        type: 'input',
        message: 'What is your PROJECT TITLE?',
        name: 'title',
    },
];

// Write to file function
function writeToFile(data) {
    fs.writeFile('index.html', data, (err) =>
        err ? console.error(err) : console.log('README file saved as USERREADME.md')
    )
}

// Init function
function init( ) {
    inquirer
        .prompt(questions)
        .then((responses) => writeToFile(generateHTML(responses)));
}

init()