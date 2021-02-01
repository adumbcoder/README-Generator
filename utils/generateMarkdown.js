
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = url(`https://img.shields.io/badge/License-${response.license}-green`)
  return badge;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  # ${data.title} 
  ${renderLicenseBadge}
  -[Description](#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[Contributing](#contribution guidelines)
    *[Tests](#tests)
    *[License](#license)
  -[Questions](#questions)
    *[GitHub](#github)
    *[Email](#email)
    
  ## Description:
  ${data.description}

  ### Installation:
  ${data.install}

  ### Usage:
  ${data.usage}

  ### Contribution guidelines:
  ${data.contributing}

  ### Tests:
  ${data.tests}

  ### License:

  [Common License source]('https://opensource.org/licenses')
  ## Questions.
  ### GitHub:
  ${data.github}

  ### Email:
  ${data.email}

  -[Back to Top](#)
`;
}

module.exports = generateMarkdown;
