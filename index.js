// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?(Required)',
        validate: github => {
            if (github) return true;

            console.log('Please enter your GitHub username!')
            return false;
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?(Required)',
        validate: email => {
            if (email) return true;

            console.log('Please enter your email address!')
            return false;
        },
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s name?(Required)',
        validate: title => {
            if (title) return true;

            console.log('Please enter your project\'s name!');
            return false;
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:(Required)',
        validate: description => {
            if (description) return true;

            console.log('Please enter a description of your project!');
            return false;
        },
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        message: 'What kind of license should your project have?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependenciues?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does user need to know about using the repo?(Required)',
        validate: usage => {
            if (usage) return true;

            console.log('Answer the question dude!!')
            return false;
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?(Required)',
        validate: contribution => {
            if (contribution) return true;

            console.log('Please enter what user need to know...');
            return false;
        }
    }
];

inquirer.prompt(questions)
    .then(data =>  generateMarkdown(data));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
