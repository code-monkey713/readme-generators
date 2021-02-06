const buildREADMEmd = (data, color) => `# ${data.title}

License: ![License](https://img.shields.io/badge/license-${data.license}-${color})

## Description 

${data.description}

## Table of Contents

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage 

${data.usage}

## License

${data.license}

## Contributing

${data.contribution}

## Tests

${data.testing}

## Questions

If you have any questions, feel free to contact me and listed below are my contact informations. 

GitHub profile: ${data.github}

Email: ${data.email}

`;

module.exports = buildREADMEmd;