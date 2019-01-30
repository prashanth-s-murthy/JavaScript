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

var access = require('../Utility/utility')
var read = require('readline-sync');
var num = read.question("enter the num: ");
access.coupenNumber(num);