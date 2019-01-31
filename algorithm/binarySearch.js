/**************************************************************************
 * Execution       : Default node             cmd> node binarySearch.js
 * Purpose         : To print the result if the word is found or not using binary search.
 * @description
 * 
 * @file            : binarySearch.js
 * @overview        : taking element to search from the array .
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
 * reading inputs from user
 */
var read = require('readline-sync');
try {
    var arr = [];
    /**
     * variable size takes the size of the array as input.
     */
    var size = read.question("enter the size of the array: ");
    /**
     * looping over the array size to add the element in the array
     */
    for (let i = 0; i < size; i++) {
        arr[i] = read.question("enter the array element: ");
    }
    /**
     * taking the input from user to search the element in the array
     */
    var x = read.question("enter the element to search");
    /**
    * for accessing binarySearch from the utility.js.
    */
    //var res = access.binarySearch(arr, x);
    var ress = access.binarySearchString(arr, x);
    console.log(res);
    console.log(ress);
} catch (err) {
    console.log(err.message);
}