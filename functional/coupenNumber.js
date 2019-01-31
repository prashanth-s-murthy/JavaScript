/**************************************************************************
 * Execution       : Default node             cmd> node coupenNumber.js
 * Purpose         : how many random numbers do you need to generate distinct coupon number.
 * @description
 * 
 * @file            : coupenNumber.js
 * @overview        : Given N distinct Coupon Numbers, how many random numbers do you need to 
                      generate distinct coupon number
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 25/01/2019
 ***************************************************************************/
/**
 * for accessing data from the utility file.
 */
var access = require('../Utility/utility')
/**
 * reading inputs from user
 */
var read = require('readline-sync');
/**
 * taking the number as input from user.
 */
var number = read.question("enter the num: ");
/**
 * accessing coupenNumber function from utility.js
 */
access.coupenNumber(number);