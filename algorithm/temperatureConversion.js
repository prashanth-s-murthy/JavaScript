/**************************************************************************
 * Execution       : Default node             cmd> node tempratureConversion.js
 * Purpose         : To covert the temperature from fahrenheit to celsius or viceversa.
 * @description
 * 
 * @file            : tempratureConversion.js
 * @overview        : the temperature in fahrenheit as input outputs the temperature in 
 *                    Celsius or viceversa
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
 * accessing temperatureConversion function from utility.js
 */
access.temperatureConversion();