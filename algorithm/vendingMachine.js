/**************************************************************************
 * Execution       : Default node             cmd> node vendingMachine.js
 * Purpose         : To calculate the minimum number of Notes as well as the Notes to be
                     returned by the Vending Machine as a Change
 * @description
 * 
 * @file            : vendingMachine.js
 * @overview        : check for largest value of the Note to return change to get to 
 *                    minimum number of Notes.
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
 * accessing vendingMachine function from utility.js
 */
access.vendingMachine();