
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  # ${data.title} 
  (https://img.shields.io/badge/License-${data.license}-green)
  [Description](#description)
    [Installation](#installation)
    [Usage](#usage)
    [Contributing](#contribution guidelines)
    [Tests](#tests)
    [License](#license)
  [Questions](#questions)
    [GitHub](#github)
    [Email](#email)
    
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

  [Common License source](https://opensource.org/licenses)
  ## Questions.
  ### GitHub:
  [Adumbcoder](${data.github})

  ### Email:
  ${data.email}

  -[Back to Top](#)
`;
}

module.exports = generateMarkdown;
