const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./questions');
const buildREADMEmd = require('./template');

async function main() {
  try {
      const userData = await inquirer.prompt(questions);

      const readme = buildREADMEmd(userData);
  
      fs.writeFileSync('./generated-README.md', readme);
  
      console.log('File was successfully written.');
      // await open('./index.html');
  
      // console.log('Check your browser!');
  } catch (error) {
      console.log(error);
  }
}

main();