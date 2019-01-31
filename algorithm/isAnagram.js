/**************************************************************************
 * Execution       : Default node             cmd> node isAnagram.js
 * Purpose         : To find two strings are Anagram or not.
 * @description
 * 
 * @file            : isAnagram.js
 * @overview        : One string is an anagram of another if the second is simply a
                      rearrangement of the first.
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
/**
 * taking the user input and storing it in variable string1 and string2
 */
var string1 = read.question("enter the string1 : ");
var string2 = read.question("enter the string2 : ");
/**
 * accessing isAnagram function from utility.js
 */
var result = access.isAnagram(string1, string2);
console.log(result);
