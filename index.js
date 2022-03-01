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
        type: 'list',
        choices:['MIT','ISC','None'],
        name: 'license',
        message:'What license is your project under?' 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');})
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data =>{
            console.log(data)
            // generate README 
            writeToFile('answers.md',data)
        })
}
// Function call to initialize app
init();
