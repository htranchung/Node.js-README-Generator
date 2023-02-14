// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the TITLE of the project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the DESCRIPTION of project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'what are the INSTALLATION INSTRUCTIONS?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'what is the USAGE INFORMATION?',
            name: 'usageInfo',
        },
        {
            type: 'input',
            message: 'What is the CONTRIBUTION GUIDELINES',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'What are the TESTING INSTRUCTIONS',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your E-Mail Address?',
            name: 'email',
        },
        
    ])
    .then((response) => {
fs.appendFile('README.md', `# Title: ${response.title}

## Description: 

${response.description}

## Installation Instructions: 

${response.installation}

## Usage Information: 

${response.usageInfo}

## Contribution Guidelines: 

${response.contribution}

## Testing Instructions: 

${response.test}


## Do you have additional questions? You can reach me by GitHub or E-Mail.
[GitHub Link](https://github.com/${response.github})
[E-Mail](${response.email})`,
            (err) =>
                err ? console.error(err) : console.log('README Created!')
        );
    }
    );
 }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
writeToFile();