/**************************************************************************
 * Execution       : Default node             cmd> node twoD.js
 * Purpose         : To display the array element in 2d array.
 * 
 * @description
 * 
 * @file            : twoD.js
 * @overview        : reading in 2D arrays of numbers from standard input and printing them 
                      out to standard output.
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 25/01/2019
 ***************************************************************************/
/**
 * for accessing data from the utility file.
 */
var access = require('../Utility/utility')
/**
 * reading inputs from user
 */
var readline = require('readline-sync');
/**
 * variable rows and columns takes user input as number
 */
var rows = readline.question("enter the number of rows");
var columns = readline.question("enter the number of columns");
/**
 * accessing twoD function from utility.js
 */
access.twoD(rows, columns);