
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  # ${data.title} 
  ![License](https://img.shields.io/static/v1?label=License&message=${data.license}&color=green)
  [Description](#description)
    [Installation](#installation)
    [Usage](#usage)
    [Contributions](#contributions)
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

  ### Contributions:
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
