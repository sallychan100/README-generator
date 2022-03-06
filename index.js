// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message:'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message:'Please briefly describe your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message:'Please provide installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message:'How can users utilize this project?'
    },
    {
        type: 'input',
        name: 'contributing',
        message:'How can users contribute to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message:'How can users perform testing?'
    },
    {
        type: 'list',
        choices:['MIT','ISC','None'],
        name: 'license',
        message:'What license is your project under?' 
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
    },
    {
        type: 'input',
        name: 'url',
        message: 'Please enter your deployed application URL',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => 
    {if (err) throw err;
        console.log('The file has been saved!');
        }
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data =>{
            console.log(data)
            // generate README 
            writeToFile(`${data.title}.md`,data)
        })
}
// Function call to initialize app
init();
