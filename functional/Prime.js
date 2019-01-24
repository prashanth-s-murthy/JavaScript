/**************************************************************************
 * Execution       : Default node             cmd> node Prime.js
 * Purpose         : To replace String Template “Hello <<UserName>>, How are you?” with proper username
 * 
 * @description
 * 
 * @file            : Prime.js
 * @overview        : To find out the prime factorization of the given number.
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 24/01/2019
 ***************************************************************************/
var Access=require('../Utility/utility')
var read=require('readline-sync');
var num=read.question("enter the num: ");
Access.PrimeFactor(num);