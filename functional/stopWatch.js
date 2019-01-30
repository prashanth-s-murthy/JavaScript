/**************************************************************************
 * Execution       : Default node             cmd> node stopWatch.js
 * Purpose         : To measure the elapsed time between start and end .Print the elapsed time.
 * 
 * @description
 * 
 * @file            : stopWatch.js
 * @overview        : ReadTime takes the userinput and print the time interval between start and stop time.
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 25/01/2019
 ***************************************************************************/
var access=require('../Utility/utility')
var res=access.readTime();
console.log(res);