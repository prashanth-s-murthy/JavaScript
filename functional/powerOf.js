/**************************************************************************
 * Execution       : Default node             cmd> node powerOf.js
 * Purpose         : To replace String Template “Hello <<UserName>>, How are you?” with proper username
 * 
 * @description
 * 
 * @file            : powerOf.js
 * @overview        : This program takes a command-line argument N and prints a table of the
                      powers of 2 that are less than or equal to 2^N.
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
 * accessing powerOfTwo function from utility.js
 */
access.powerOfTwo();