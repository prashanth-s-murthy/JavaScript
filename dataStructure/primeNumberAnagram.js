/***********************************************************
 * Execution      : Default node    cmd>node primeNumberAnagram.js
 * Purpose        :  Program to store only the numbers in that range that are Anagrams.
 *@description 
 * 
 *
 *@file          : primeNumberAnagram.js
 *@overview      : Extend the Prime Number Program and store only the numbers in that range that are
                   Anagrams. For e.g. 17 and 71 are both Prime and Anagrams in the 0 to 1000 range.
                   Further store in a 2D Array the numbers that are Anagram and numbers that are not
                   Anagram
 *@author name   : Prashanth S <prashanth.murthy007@gmail.com@gmail.com>
 *@version       : 1.0
 *@since         : 05/02/2019
 * 
 ***********************************************************/
try {
    /*
    For accessing data from utility file and utilityDataStructure
    */
    var access = require('../Utility/utility')
    var access1 = require('../Utility/utilityDataStructure');
    var util = require('util')
    var array = [["0-100 "], ["100-200  "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
    var i = 0;
    var j = 1;
    var range = 100;
    var arr = []
    var arr1 = []
    /***
     * looping over the number to find whether the number is prime or not.
     */
    for (let prime = 2; prime <= 1000; prime++) {
        if (access.isPrime(prime)) {
            /**
             * find the prime number between the range 0 t0 100.
             */
            if (prime <= range) {
                var a = "" + prime
                var b = a.split("");

                b.sort();
                var v = ""
                for (let i = 0; i < b.length; i++) {
                    v = v + b[i];

                }
                if (!arr.includes(v)) {
                    arr.push(v);
                    array[i][j] = prime;
                    j++;
                }
            }
            else {
                var a1 = "" + prime
                var b1 = a1.split("")

                b1.sort()
                var v1 = ""
                for (let i = 0; i < b1.length; i++) {
                    v1 = v1 + b[i];

                }

                if (!arr1.includes(v1)) {
                    arr1.push(v1);
                    j = 1;
                    /**
                     * adding the range with 100.
                     */
                    range = range + 100;
                    i++;
                    array[i][j] = prime;
                }
            }
        }
    }
    /**
     * accessing the rangeOfArray function from the utilityDataStructure
     */
    var arr = access1.rangeOfArray();
    console.log("The prime numbers that are not Anagram presents in the given range ");
    /**
     * looping over array length to print the anagram in that range.
     */
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            util.print(array[i][j] + " ");
        }
        console.log();
    }
} catch (err) {
    console.log(err.message);

}
