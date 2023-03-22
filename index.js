// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a detailed description of your project.'
    },
    {
        type: 'list',
        name: 'Table of Contents',
        message: 'Select a link in the Table of Content to navigate to your desired section'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Installation Instructions'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Usage Information'
    },
    {
        type: 'list',
        name: 'License',
        message: 'Select a license for your application from the following list of options',
        choices: [1, 2, 3, 4]
    },
    {
        type: 'iput',
        name: 'Contributing',
        message: 'Contribution Guidlines'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Test Instructions'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Enter your Github Username'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Enter your Email Address'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = generateMarkdown(data);

    fs.writeFile('README.md', fileName, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md file!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => writeFile('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
 }

// Function call to initialize app
init();
