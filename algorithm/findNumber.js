/**************************************************************************
 * Execution       : Default node             cmd> node findNumber.js
 * Purpose         : To guesses the answer with n questions.
 * @description
 * 
 * @file            : findNumber.js
 * @overview        : takes a command-line argument N, asks you to think of a number between 
                      0 and N-1, where N = 2^n, and always guesses the answer with n questions.
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 29/01/2019
 ***************************************************************************/
/**
 * for accessing data from the utility file.
 */
var access = require('../Utility/utility')
/**
 * reading inputs from user
 */
var read = require('readline-sync');
/**
 * taking command linge agruments as user input.
 */
var N = process.argv[2];
var low = 0;
high = N - 1;
/**
 * accessing toFindnumber function from utility.js
 */
var res = access.toFindnumber(low, high);
console.log("your number is--->" + res);
