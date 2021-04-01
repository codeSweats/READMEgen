// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
}

// function that returns the license link
function renderLicenseLink(license) {
}

// function that returns the license section of README
function renderLicenseSection(license) {
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

`;
}

// Makes generateMarkdown function public so as to be accessed by the index.js
module.exports = generateMarkdown;