/**************************************************************************
 * Execution       : Default node             cmd> node StringReplace.js
 * Purpose         : To replace String Template “Hello <<UserName>>, How are you?” with proper username
 * 
 * @description
 * 
 * @file            : StringReplace.js
 * @overview        : stringReplace takes the userinput and print it with some sentence.
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 24/01/2019
 ***************************************************************************/
var Access=require('../Utility/utility')
var read=require('readline-sync');
var username=read.question("enter the name: ");
Access.StringReplace(username);
