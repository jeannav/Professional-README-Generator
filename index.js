// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;
const util = require('util');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a detailed description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your application from the following list of options',
        choices: ["MIT", "Apache", "Boost", "BSD 3-Clause", "None"]
    },
    {
        type: 'iput',
        name: 'contributing',
        message: 'Enter all contributors to the project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test Instructions'
    },
    {
        type: 'input',
        name: 'repoLink',
        message: 'Enter your Github profile link:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email Address:'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.fstat.writeFileSync(path.json(process.cwd(), fileName), data);
};

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((responses) => writeFile('generatedREADME.md', generateMarkdown(responses)))
    .then(() => console.log('Sucessfully wrote to generateREADME.md!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
