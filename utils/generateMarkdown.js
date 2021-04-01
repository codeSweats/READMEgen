// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== 'None'){
    return `![gitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}

// function that returns the license link
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `\n* [License](#license)\n`;
  }
  return '';
}

// function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License
    This project is licensed under the ${license} license`;
  }
  return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.Title}
${renderLicenseBadge(data.License)}
## Description

${data.Description}

## Table of Contents

* [Installation](#Installation)

* [Usage](#Usage)
${renderLicenseLink(data.License)}

* [Contributions](#Contributions)

* [Tests](#Tests)

* [Questions](#Questions)

## Installation

To install necessary dependencies, run the following command: 

\`\`\`
${data.Installation}
\`\`\`

## Usage

${data.Usage}

${renderLicenseSection(data.License)}

## Contributions

${data.Contributions}

## Tests

To run tests, run the following command:

\`\`\`
${data.Tests}
\`\`\`

## Questions

If you have any questions about the repo, contact me here: 

${data.Email}. You can find more of my work at [{data.GitHub}](https://github.com/${data.GitHub}/).

`;
}

// Makes generateMarkdown function public so as to be accessed by the index.js
module.exports = generateMarkdown;