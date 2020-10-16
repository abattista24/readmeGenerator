// create a README

// array of questions for user
    const questions = [ 
      //title
      {type:"input",
      message:"Enter a title for your readme.",
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
      message:"What is your mail address?",
      name:"email",
      }
    ];
      
      // function to write README file
      function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();




  // write user input to readme.md file, call userReadme.md
    //needs to have table of contenets with usable links
      //Installation
      //Usage
      //License
      //contributing
      //Tests
      //questions
        
        
        