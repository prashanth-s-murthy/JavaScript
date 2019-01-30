/**************************************************************************
 * Execution       : Default node             cmd> node primeNumber.js
 * Purpose         : To replace String Template “Hello <<UserName>>, How are you?” with proper username
 * 
 * @description
 * 
 * @file            : primeNumber.js
 * @overview        : To find out the prime factorization of the given number.
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 24/01/2019
 ***************************************************************************/
var access=require('../Utility/utility')
var read=require('readline-sync');
var num=read.question("enter the num: ");
access.primeFactor(num);