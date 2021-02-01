// TODO: Include packages needed for this application
const { writeFile } = require('fs');
const { prompt }= require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const userInformation = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description of your project. '
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install this project? '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project? '
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution guidelines? '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test instructions? '
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is this under? ',
        choices: [
            'MIT',
            'Apache',
            'lgpl_2_1',
            'MIT/Apache',
            'GPL',
            'Apache 2',
            'BSD',
            'none'
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Your GitHub.  '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email. '
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if(err) {
            throw err;
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    prompt(userInformation).then(responses => {
        const answers = generateMarkdown(responses)

        writeToFile('README.md', answers);
    })
}

// Function call to initialize app
init();
