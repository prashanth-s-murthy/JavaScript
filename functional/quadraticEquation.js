/**************************************************************************
 * Execution       : Default node             cmd> node quadraticEquation.js
 * Purpose         : To measure the elapsed time between start and end .Print the elapsed time.
 * 
 * @description
 * 
 * @file            : quadraticEquation.js
 * @overview        : Find the roots of the equation a*x*x + b*x + c.Since the equation is x*x
                      there are 2 roots. The 2 roots of the equation can be found using a formula
                      delta = b*b - 4*a*c
                      Root 1 of x = (-b + sqrt(delta))/(2*a)
                      Root 2 of x = (-b - sqrt(delta))/(2*a)
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
 * accessing quadraticEquation function from utility.js
 */
access.quadraticEquation();