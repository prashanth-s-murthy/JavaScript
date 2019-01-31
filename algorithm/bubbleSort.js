/**************************************************************************
 * Execution       : Default node             cmd> node bubbleSort.js
 * Purpose         : To print the Sorted List using bubble sort algorithm.
 * @description
 * 
 * @file            : bubbleSort.js
 * @overview        : Reads in integers prints them in sorted order using Bubble Sort
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
    * accessing bubbleSortInt function from utility.js
    */
    access.bubbleSortInt(arr);
} catch (err) {
    console.log(err.message);
}