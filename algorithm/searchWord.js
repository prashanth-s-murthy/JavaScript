/**************************************************************************
 * Execution       : Default node             cmd> node searchWord.js
 * Purpose         : To print the result if the word is found or not using binary search.
 * @description
 * 
 * @file            : searchWord.js
 * @overview        : Read in a list of words from File. Then prompt the user to enter a 
                      word to search the list. The program reports if the search word is
                      found in the list.
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
 * accessing searchWord function from utility.js
 */
access.searchWord();