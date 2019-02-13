/**************************************************************************
 * Execution        : Default node             cmd> node regularExpression.js
 * @file            : regularExpression.js
 * @overview        : Read in the following message: Hello <<name>>, We have your full
                      name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx.
                      Please,let us know in case of any clarification Thank you BridgeLabz 
                      01/01/2016.Use Regex to replace name, full name, Mobile#, and Date 
                      with proper value.
 * @author          : PRASHANTH S <prashanth.murthy007@gmail.com>
 * @version         : 1.0.
 * @since           : 12/02/2019
 ***************************************************************************/
/**
 * accessing utility object orianted program file.
 */
var access = require('../Utility/utilityObjectOriantedProg')
/**
 * reads input from user input.
 */
var readline = require('readline-sync')
/**
 * variable name ,full name, contact number takes the user input.
 */
var name = readline.question("enter the name : ");
var fullName = readline.question("enter the full name : ");
var contactNumber = readline.question("enter the contact number : ");
access.regularExpression(name, fullName, contactNumber);
