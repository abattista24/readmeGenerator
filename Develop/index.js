// create a README
const fs =require("fs");
const inquirer = require("inquirer");
const util =require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [ 
  //title
  {type:"input",
  message:"Enter a title for your readme",
  name:"title"
  },
  //description
  {type:"input",
  message: "Write a short description of the project",
  name:"description"
  },
  //Installation
  {type:"input",
  message:"Please describe the installation required",
  name:"install",
  },
  //Usage
  {type:"input",
  message:"How would a person use your application?",
  name:"use",
  },
  //license
  //give options
  {type:"list",
  message:"Please select the license type that best fits your application",
  name:"license",
  choices: ["type 1", "type 2", "type 3", "type 4"]
  },
  //contributing
  {type:"input",
  message:"What contributions can people make to your application",
  name:"contribution",
  },
  //tests
  {type:"input",
  message:"How can a test be performed?",
  name:"test",
  },
  //link to github
  {type:"input",
  message:"What is the URL for your GitHub repo for this application?",
  name:"gitHubUrl",
},
//link to email 
// use <a href= "mailto: email"> email </a>
  {type:"input",
  message:"What is your e-mail address?",
  name:"email",
  }
];

// function to write README file

const fileName = "userREADME.md";

function writeToFile({title,description,install,use,license,contribution, tests, gitHubUrl,email}) {return `
# $(title)
### Table of Contents
  [Description](#description)     
  [Installation](#installation)       
  [Usage](#usage)     
  [License](#license)     
  [Contributing](#contributing)   
  [Tests](#tests)   
  [Questions](#questions)
## Description
  ${description}
## Installation
  ${install}
## Usage
  ${use}
## License
  ${license}
## Contributing
  ${contribution}
## Tests
  ${tests}
## Questions
  please contact me on GitHub at ${gitHubUrl},
  or through my <a mailto href=${email}> email </a>
  `

  }

// prompt user
inquirer.prompt(questions)

 // write user input to readme.md file, call userReadme.md
.then(function(data){
  return writeToFile (data)
})
.then(function(readmeFile){
  return writeFileAsync (fileName, readmeFile)
})
.then(function(){
  console.log ("creating file")
})
.catch(function(error){
  console.log(error)
})

// function to initialize program
function init() {

}

// function call to initialize program
init();




 
   
      //Installation
      //Usage
      //License
      //contributing
      //Tests
      //questions
        
        
        