// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'None'){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {return ''}
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'None'){
      return `[${license}](https://opensource.org/licenses/${license})`
  }else {return ''}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None'){
    return ' ## License'
}else {return ''}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)} \n
  Description: ${data.description} 

## Table of content 
[Installation](#installation) \n
[Usage](#usage) \n
[License](#license)\n
[Contributing](#contributing) \n
[Tests](#tests)\n
[Questions](#questions)\n

## Installation
Please use the following commands to install this project:
${data.installation}

## Usage
In order to utilize this project, use the following commands:
${data.usage}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing
If you would like to contribute to this project, you can do the following:
${data.contributing}

## Tests
To perform testing, please use the following commands:
${data.tests}

## Questions
If you have any questions, please reach out to me at [My email](${data.email}) or at [github](https://github.com/${data.github})

## Walkthrough 
[video](https://github.com/sallychan100/README-generator/blob/85d75b58536d4dbf8ac292ea11ba660502c67f3e/README%20generator%20walkthrough_Trim.mp4)
`;
}

module.exports = generateMarkdown;
