/**************************************************************************
 * Execution        : Default node             cmd> node stockMainReport.js
 * @file            : stockMainReport.js
 * @overview        : Write a program to read in Stock Names, Number of Share, Share Price.
                      Print a Stock Report with total value of each Stock and the total 
                      value of Stock..
 * @author          : PRASHANTH S <prashanth.murthy007@gmail.com>
 * @version         : 1.0.
 * @since           : 12/02/2019
 ***************************************************************************/
/**
 * accessing the stockPortfolio class.
 */
var use = require('./stockPortfolio')
/**
 * main function()
 */
function main() {
    use.reportCalculation();
}
main();