var access=require('../Utility/utilityObjectOriantedProg')
var readline = require('readline-sync')
/**
 * variable username takes the user input as string
 */
var name = readline.question("enter the name : ");
var fullName=readline.question("enter the full name : ");
var contactNumber=readline.question("enter the contact number : ");
access.regularExpression(name,fullName,contactNumber);
