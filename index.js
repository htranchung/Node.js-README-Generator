const inquirer = require('inquirer');
const fs = require('fs');

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
                name: 'installation',
                message: 'What command should be run to install dependencies?',
                default: 'npm i',
            },
            {
                type: 'input',
                message: 'what is the USAGE INFORMATION?',
                name: 'usageInfo',
            },
            {
                type: 'list',
                message: 'What kind of license should your project have?',
                name: 'license',
                choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None'],
            },
            {
                type: 'input',
                message: 'What is the CONTRIBUTION GUIDELINES',
                name: 'contribution',
            },
            {
                type: 'input',
                name: 'test',
                message: 'What command should be run to run tests?',
                default: 'npm test',
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
![License](https://img.shields.io/badge/License-${response.license}-blue.svg)

# Table of Contents 
[Description](#Description)
[Installation Instructions](#Installation%20Instructions)
[Usage Information](#Usage%20Information)
[Contribution Guidelines](#Contribution%20Guidelines)
[Testing](#Testing)
[Additional Questions?](#Do%20you%20have%20additional%20questions?%20You%20can%20reach%20me%20by%20GitHub%20or%20E-Mail)



## Description: 

${response.description}

## Installation Instructions: 
What command should be run to install dependencies?
${response.installation}

## Usage Information: 

${response.usageInfo}

## License: 

This project is licensed under the ${response.license} license.

## Contribution Guidelines: 

${response.contribution}

## Testing: 
What command should be run to run tests?
${response.test}


## Do you have additional questions? You can reach me by GitHub or E-Mail.
GitHub | https://github.com/${response.github}
E-Mail | (${response.email})`,
                (err) =>
                    err ? console.error(err) : console.log('README Created!')
            );
        }
        );
}

writeToFile();