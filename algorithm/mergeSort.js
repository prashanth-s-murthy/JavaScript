/**************************************************************************
 * Execution       : Default node             cmd> node mergeSort.js
 * Purpose         : a program with Static Functions to do Merge Sort of list of Strings.
 * @description
 * 
 * @file            : mergeSort.js
 * @overview        : ​To Merge Sort an array, we divide it into two halves, sort the two halves
                      independently, and then merge the results to sort the full array.
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
 * accessing inputArray function from utility.js
 */
var arr = access.inputArray();
/**
 * accessing mergeSort function from utility.js
 */
access.mergeSort(arr);
console.log(arr);
