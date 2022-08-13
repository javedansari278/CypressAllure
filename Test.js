const xlsx = require('xlsx')
const fs = require('fs')

var fileread=fs.readFileSync('C:/Cypress Workspace/Cypress Automation/cypress/fixtures/Login.json','utf8')
var parsedata=JSON.parse(fileread)
console.log(parsedata)
parsedata[0].Status="Pass"
fs.writeFileSync('C:/Cypress Workspace/Cypress Automation/cypress/fixtures/Login.json',JSON.stringify(parsedata,null,2))



