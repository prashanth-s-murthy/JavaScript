/***********************************************************
 * Execution      : Default node    cmd>node queuePrime.js
 * Purpose        : To find the prime number in the range 0 -1000 and storing it in the 2D array.
 *@description 
 * 
 *
 *@file          : queuePrime.js
 *@overview      : Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Queue using
                   the Linked List and Print the Anagrams from the Queue. Note no Collection Library
                   can be used.
 *@author name   : Prashanth S <prashanth.murthy007@gmail.com@gmail.com>
 *@version       : 1.0
 *@since         : 05/02/2019
 * 
 ***********************************************************/
/*
* For accessing data from utility file and utilityDataStructure
*/
var access = require('../Utility/utility');
var access1 = require('../Utility/utilityDataStructure');
var readline = require('readline-sync');
/**
 * creating an empty array.
 */
var array = [];
/**
 * creating object  of LinkListQueue. 
 */
var queue = new access1.LinkListQueue;
/**
 * looping from 0 to 1000 it find the prime number.
 */
for (let i = 0; i < 1000; i++) {
    /**
     * accessing isPrime function.
     */
    if (access.isPrime(i))
        /**
         * pushing each element to an array.
         */
        array.push(i)
}

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (access.isAnagram(array[i], array[j])) {
            queue.enQueue(Number(array[i]))
            queue.enQueue(Number(array[j]))
        }
    }
}
console.log(" Anagrams are :" + queue.print());