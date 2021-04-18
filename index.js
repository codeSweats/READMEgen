// Node packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of question objects declared as a constant
const questions = [
    {
    message: 'Project Title?',
    name: 'Title'
    },
    {
    message: 'Description?',
    name: 'Description',
    },
    {
    message: 'Installation Instructions',
    name: 'Installation',
    default: 'npm i'
    },
    {
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
    message: 'What is the command to run the test?',
    name: 'Tests',
    default: 'npm test',
    },
    {
    message: 'How can the user contribute to this project?',
    name: 'Contributions',
    },
    {
    message: 'What is your email?',
    name: 'Email',
    },
    {
    message: 'What is your GitHub username?',
    name: 'GitHub',
    },
];

// fs write file method with path method passed as argument
function writeToFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Declaring function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
    console.log('Generating README Now!');
    writeToFile('README.md', generateMarkdown({... response}))
});
}

// Function call to initialize app
init();