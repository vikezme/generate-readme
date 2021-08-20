const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generatorMarkdown(data) = require('./generateMarkdown')

const questions= [
  {
    type: "input",
    message= "what is the title of the project?",
    name= "Title"

  },
  {
    type: "input",
    message= "what is the Description of the project?",
    name= "Description"

  },
  {
    type: "input",
    message= "Table of Contents",
    name= "Table of Contents"

  },
  {
    type: "input",
    message= "What does the user need to install to run this app?",
    name= "Installation"

  },
  {
    type: "input",
    message= "how do you use your app?",
    name= "Usage"

  },
  {
    type: "input"
    message= "what license did you use?",
    name= "License"

  },
  {
    type: "input",
    message= "Contact info for inquiries",
    name= "Questions"

  },
  {
    type: "input",
    message= "github username:",
    name= "Username"

  },
  {
    type: "input",
    message= "what is your e-mail?",
    name= "e-mail"

  },

]

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err){
    console.log(fileName)
    console.log(data)
    if(err){
      return console.log(err)
    }
    else{
      console.log("success");
    }
  })
}

function init(){
  inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generatorMarkdown(data));
        console.log(data);
    }
  )
}
init();
