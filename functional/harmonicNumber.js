/**************************************************************************
 * Execution       : Default node             cmd> node harmonicNumber.js
 * Purpose         : To replace String Template “Hello <<UserName>>, How are you?” with proper username
 * 
 * @description
 * 
 * @file            : harmonicNumber.js
 * @overview        : Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N.
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 24/01/2019
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
 * taking the number as input from user.
 */
var number = read.question("enter the num: ");
/**
 * accessing harmonicNumber function from utility.js
 */
access.harmonicNumber(number);