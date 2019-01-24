/**************************************************************************
 * Execution       : Default node             cmd> node Power.js
 * Purpose         : To replace String Template “Hello <<UserName>>, How are you?” with proper username
 * 
 * @description
 * 
 * @file            : Power.js
 * @overview        : This program takes a command-line argument N and prints a table of the
                      powers of 2 that are less than or equal to 2^N.
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 24/01/2019
 ***************************************************************************/
var Access=require('../Utility/utility')
var read=require('readline-sync');
//var num=read.question("enter the number: ");
Access.PowerMeth();