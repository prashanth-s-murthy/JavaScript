/**************************************************************************
 * Execution       : Default node             cmd> node squareRoot.js
 * Purpose         : To compute the square root of a nonnegative number 
 * @description
 * 
 * @file            : squareRoot.js
 * @overview        : Write a static function ​ sqrt t ​ o compute the square root of a 
 *                    nonnegative number c given in the input using Newton's method.
 *                    repeat until desired accuracy reached using condition 
 *                    Math.abs(t - c/t) > epsilon*t where epsilon = ​ 1e-15​ ;
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
 * accessing findSquareRoot function from utility.js
 */
access.findSquareRoot();