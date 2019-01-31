/**************************************************************************
 * Execution       : Default node             cmd> node monthlyPayment.js
 * Purpose         : To calculate the monthly payment byu taking principal loan, year and
 *                   interest per year as input.
 * @description
 * 
 * @file            : monthlyPayment.js
 * @overview        : to calculate ​ monthlyPayment that reads in three command-line arguments 
                      P, Y, and R and calculates the monthly payments you would have to
                      make over Y years to pay off a P principal loan amount at R per cent
                      interest compounded monthly.
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
 * accessing monthlyPayment function from utility.js
 */
access.monthlyPayment();