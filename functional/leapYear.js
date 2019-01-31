/**************************************************************************
 * Execution       : Default node             cmd> node leapYear.js
 * Purpose         : To replace String Template “Hello <<UserName>>, How are you?” with proper username
 * 
 * @description
 * 
 * @file            : leapYear.js
 * @overview        : Declaring a function and accepting the userinput and determining whether
 *                    the given number is leap year or not
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
 * variable year takes from user
 */
var year = read.question("enter the year: ");
/**
 * accessing isLeapYear function from utility.js
 */
access.isLeapYear(year);