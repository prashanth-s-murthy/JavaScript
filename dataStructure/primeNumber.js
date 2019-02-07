/***********************************************************
 * Execution      : Default node    cmd>node primeNumber.js
 * Purpose        : To find the prime number in the range 0 -1000 and storing it in the 2D array.
 *@description 
 * 
 *
 *@file          : primeNumber.js
 *@overview      : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. Store
                   the prime numbers in a 2D Array, the first dimension represents the range 0-100,
                   100-200, and so on. While the second dimension represents the prime numbers in
                   that range
 *@author name   : Prashanth S <prashanth.murthy007@gmail.com@gmail.com>
 *@version       : 1.0
 *@since         : 05/02/2019
 * 
 ***********************************************************/
var util = require("util");
/*
For accessing data from utility file and utilityDataStructure
*/
var access = require("../Utility/utility");
var access1 = require("../Utility/utilityDataStructure")
var primes = [[], [], [], [], [], [], [], [], [], []];
var initial = 0;
var final = 100;
console.log('Prime Numbers in the given range are :\n');
/*
* Loop from 0 to 10 and stores the prime numbers and stores the values in each index.
*/
for (let index = 0; index < 10; index++) {
    primes[index] = access1.isPrime(initial, final);
    initial = initial + 100;
    final = final + 100;
}
var start = 0;
var end = 100;
/*
* To print the prime numbers in the range 0-­100,100­-200, and so on.
*/
for (let index1 = 0; index1 < 10; index1++) {
    util.print("[" + "[" + start + "-" + end + "]" + " " + "[" + primes[index1] + "]" + "]");
    start = start + 100;
    end = end + 100;
    console.log();
}

