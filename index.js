const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt[
  {
    type= "input",
    message= "what is the title of the project?",
    name= "generate readme"
    validate: (value)=> {if (value) {return true}else {return "i need a value to return"}}
  },
  {
    type= "input",
    message= "how do you install your app?",
    name= "installation",
    validate: (value)=> {if (value) {return true}else {return "i need a value to return"}}
  },
  {
    type= "input",
    message= "instructions to be followed?",
    name= "instructions",
    validate: (value)=> {if (value) {return true}else {return "i need a value to return"}}
  },
  {
    type= "input",
    message= "how do you use your app?",
    name= "usage",
    validate: (value)=> {if (value) {return true}else {return "i need a value to return"}}
  },
  {
    type= "list",
    message= "what license did you use?",
    name= "license",
    validate: (value)=> {if (value) {return true}else {return "i need a value to return"}}
  },
  {
    type= "input",
    message= "github username:",
    name= "git",
    validate: (value)=> {if (value) {return true}else {return "i need a value to return"}}
  },
  {
    type= "input",
    message= "e-mail?",
    name= "e-mail",
    validate: (value)=> {if (value) {return true}else {return "i need a value to return"}}
  },

]
