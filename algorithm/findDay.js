/**************************************************************************
 * Execution       : Default node             cmd> node findDay.js
 * Purpose         : To find the day of the week by taking the date, month, year as input.
 * @description
 * 
 * @file            : findDay.js
 * @overview        : function that takes a date as input and prints the day of the week 
 *                    that date falls on
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 29/01/2019
 ***************************************************************************/
/**
 * for accessing data from the utility file.
 */
var access = require('../Utility/utility')
/**
 * accessing dayOfWeek function from utility.js
 */
var res = access.dayOfWeek();
console.log("according to the date,month,year current day is---->" + res);