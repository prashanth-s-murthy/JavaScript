/***********************************************************
 * Execution      : Default node    cmd>node stackPrime.js
 * Purpose        : To find the prime number that are Anagram in the Range of 0 - 1000 and 
 *                  Print the Anagrams in the Reverse Order.
 *@description 
 * 
 *
 *@file          : stackPrime.js
 *@overview      : Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Stack using
                   the Linked List and Print the Anagrams in the Reverse Order. Note no Collection
                   Library can be used.
 *@author name   : Prashanth S <prashanth.murthy007@gmail.com@gmail.com>
 *@version       : 1.0
 *@since         : 05/02/2019
 * 
 ***********************************************************/
/*
* For accessing data from utility file and utilityDataStructure
*/
var access = require('../Utility/utility')
var access1 = require('../Utility/utilityDataStructure');
var readline = require('readline-sync');
/**
 * creating an empty array.
 */
var array = [];
/**
 * creating StackLinkedList object.
 */
var stack = new access1.StackLinkedList
/**
 * looping from 0 to 1000 it find the prime number.
 */
for (let i = 0; i <= 1000; i++) {
    /**
     * accessing isPrime function.
     */
    if (access.isPrime(i))
    /**
     * pushing each element to an array.
     */
        array.push(i)
}

/**
 * Loop the array to find it is anagram or not.
 */
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (access.isAnagram(array[i], array[j])) {
            stack.push(Number(array[i]))
            stack.push(Number(array[j]))
        }
    }
}
var result = stack.printStack()
console.log(("Anagrams in reverse order :"));
console.log(result + "\n");