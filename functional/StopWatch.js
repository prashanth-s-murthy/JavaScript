/**************************************************************************
 * Execution       : Default node             cmd> node StopWatch.js
 * Purpose         : To measure the elapsed time between start and end .Print the elapsed time.
 * 
 * @description
 * 
 * @file            : StopWatch.js
 * @overview        : ReadTime takes the userinput and print the time interval between start and stop time.
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 25/01/2019
 ***************************************************************************/
var Access=require('../Utility/utility')
var res=Access.ReadTime();
console.log(res);