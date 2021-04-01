// Node packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of question objects declared as a constant
const questions = [
    {
    type: 'input',
    message: 'Project Title?',
    name: 'Title'
    },
    {
    type: 'input',
    message: 'Description?',
    name: 'Description',
    },
    {
    type: 'input',
    message: 'Installation Instructions',
    name: 'Installation',
    default: 'npm i'
    },
    {
    type: 'input',
    message: 'What does the user need to know about using the app?',
    name: 'Usage',
    },
    {
    type: 'list',
    message: 'What type of License does your project have?',
    name: 'License',
    choices: ['MIT', 'BSD 3', 'APACHE 2.0', 'None'],
    },
    {
    type: 'input',
    message: 'What is the comment to run the test?',
    name: 'Tests',
    default: 'npm test',
    },
    {
    type: 'input',
    message: 'How can the user contribute to this project?',
    name: 'Contributions',
    },
    {
    type: 'input',
    message: 'What is your email?',
    name: 'Email',
    },
    {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'GitHub',
    },
];

// fs write file method with path method passed as argument
function writeToFile (fileName, data) {}

// Declaring function to initialize app
function init() {}

// Function call to initialize app
init();