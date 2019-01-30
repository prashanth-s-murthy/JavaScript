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
var access=require('../Utility/utility')
var read=require('readline-sync');
access.powerOfTwo();