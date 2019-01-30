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
var access = require('../Utility/utility')
var readline =require('readline-sync');
var row = readline.question("enter the number of rows");
var col = readline.question("enter the number of columns");
access.twoD(row,col);