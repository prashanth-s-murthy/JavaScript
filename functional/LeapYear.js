/**************************************************************************
 * Execution       : Default node             cmd> node LeapYear.js
 * Purpose         : To replace String Template “Hello <<UserName>>, How are you?” with proper username
 * 
 * @description
 * 
 * @file            : LeapYear.js
 * @overview        : Declaring a function and accepting the userinput and determining whether
 *                    the given number is leap year or not
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 24/01/2019
 ***************************************************************************/
var Access=require('../Utility/utility')
var read=require('readline-sync');
var year=read.question("enter the year: ");
Access.LeapYear(year);