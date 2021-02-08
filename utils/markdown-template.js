// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
    if (license === 'None') return '';
  
    return `![license](https://img.shields.io/badge/License-${license}-blue)`;
  };
  
  const renderLicenseSection = license => {
    if (license === 'None') return '';
  
    return `
    ## License
    This project is licensed under the ${license} license.
    `;
  }
  
  // TODO: Create a function to generate markdown for README
  function generateTemplate(data) {
    console.log(`# ${data.title}
  
    ${renderLicenseBadge(data.license)}
  
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Description
    ${data.description}
  
    ## Installation
    To install necessary dependencies, run the following command:
  
    ---
    ${data.installation}
    ---
  
    ## Usage
    ${data.usage}
    ${renderLicenseSection(data.license)}
    ## Contributing
    ${data.contribution}
  
    # Tests
    To run tests, run the following command:
  
    ---
    npm test
    ---
  
    ## Questions
    If you have any questions about the repo, open an issue or contact me directly by ![Email](${data.email}).
    You can find more of my work at my ![GitHub](https://github.com/${data.github});
    `);
  }
  
  module.exports = generateTemplate;
  