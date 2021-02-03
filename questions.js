const questions = [
  {
    type: 'input',
    message: 'What is title of the project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter the description of your project!',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the installation instructions?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Define how to use the application.',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'What is the license for this application?',
    name: 'license',
    choices: ['1 - MIT', '2 - ISC', '3 - Apache', '4 - GNU GPLv3', '5 - No License']
  },
  {
    type: 'input',
    message: 'Please provide contributing instructions for this project.',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'What are the testing instructions?',
    name: 'testing',
  },
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
];

const license = [
  {
    id: 1,
    type: 'MIT',
    color: 'green'
  },
  {
    id: 2,
    type: 'ISC',
    color: 'green'
  },
  {
    id: 3,
    type: 'Apache',
    color: 'blue'
  },
  {
    id: 4,
    type: 'GNU GPLv3',
    color: 'blue'
  },
  {
    id: 5,
    type: 'No License',
    color: 'lightgrey'
  },
]

module.exports = questions;