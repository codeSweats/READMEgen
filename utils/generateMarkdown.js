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
    This project license under ${license} license`;
  }
  return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

`;
}

// Makes generateMarkdown function public so as to be accessed by the index.js
module.exports = generateMarkdown;