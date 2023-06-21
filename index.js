// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
// TODO: Create a function to write README file
const generateREADME = ({projectTitle, description, Installation, usage, licence, contribution}) =>
`## ${projectTitle} 
${renderLicense(licence)}
 # table of contents
-[description]${description}
-[installation]${Installation}
-[usage]${usage}
-[licenses]${licence}
-[contribution]${contribution}
`

const promptUser = () => {
    return inquirer.prompt([
  {
    type: 'input',
    name: 'Project Tile',
    message: 'Write project name',
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Write a description of your project.',
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'What is the installation process?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How will this project be used?',
  },
  {
    type: 'input',
    name: 'Licence',
    message: 'What licenses are required with this project?',
    choice: ['MIT', 'Apache', 'Gplv3', 'None'],
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Who were the contributors to this project?',
    
   },
 ]);
}

const renderLicense = (license) => {
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "Apache") {
    return "[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "Gglv3") {
    return "[[![License: Gglv3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license == "None") {
    return "No Licenses were used.";
  } else {
    return "";
  }
};


// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};
// Function call to initialize app
init();
