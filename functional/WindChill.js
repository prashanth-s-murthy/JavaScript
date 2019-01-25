/**************************************************************************
 * Execution       : Default node             cmd> node WindChill.js
 * Purpose         : To calculate windchill that takes two double command-line arguments t and v and 
                     prints the wind chill. Use Math.pow(a, b) to compute ab.
 * 
 * @description
 * 
 * @file            : WindChill.js
 * @overview        : WindChill function takes two comment line arguments i.e. temperature and speed 
 *                    and calculates the windchill using Math.pow
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 25/01/2019
 ***************************************************************************/
var Access = require('../Utility/utility')
var read = require('readline-sync');
Access.WindChill();