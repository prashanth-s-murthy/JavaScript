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
var access=require('../Utility/utility')
var read=require('readline-sync');
var num=read.question("enter the num: ");
access.harmonicNumber(num);