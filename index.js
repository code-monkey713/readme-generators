const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions.js');
const buildREADMEmd = require('./template.js');

async function main() {
  try {
      const userData = await inquirer.prompt(questions);

      const readme = buildREADMEmd(userData);
  
      fs.writeFileSync('./generated-README.md', readme);
  
      console.log('File was successfully written.');

  } catch (error) {
      console.log(error);
  }
}

main();