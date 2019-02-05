/***********************************************************
 * Execution      : Default node    cmd>node orderedList.js
 * Purpose        : To read a set of numbers from a file and take user input to search a number.
 *@description 
 * 
 *
 *@file          : orderedList.js
 *@overview      : Create a Slot of 10 to store Chain of Numbers that belong to each Slot to efficiently 
                   search a number from a given set of number
 *@author name   : Prashanth S <prashanth.murthy007@gmail.com@gmail.com>
 *@version       : 1.0
 *@since         : 04/02/2019
 * 
 ***********************************************************/
/*
For accessing data from utility file and utilityDataStructure
*/
var access = require('../Utility/utility');
var access1 = require('../Utility/utilityDataStructure');
/**
 * Read the file and store it an array
 */
var readline = require('readline-sync');
var utility = require('util');
/**
 * to read the content from the file.
 */
var filestream = require('fs');
function hashing() {
    /**
     * fileRead reads the content from the hashNUmbers.txt
     */
    var fileRead = filestream.readFileSync('hashNumbers.txt', 'utf8');
    /**
     * spliting the content and storing it in the array.
     */
    var numArray = fileRead.split(' ');
    var arr = []
    /**
     * loop over each element in the array to index by finding the reminder.
     */
    for (let i = 0; i < numArray.length; i++) {
        var n = Number(numArray[i]);
        /**
         * finding the reminder to store the element into the perticular index.
         */
        var remainder = n % 10;
        /**
         * if the reminder is undefined new node is created  and the number is added to that index.
         * else only insert the number to the index.
         */
        if (arr[remainder] === undefined) {
            arr[remainder] = new access1.LinkedList;
            arr[remainder].add(n);
        } else {
            arr[remainder].add(n);
        }
    }
    var str = "";
    /**
     * loop over the index to print the content of the file
     */
    for (let index = 0; index < 10; index++) {
        utility.print(index + " slot: ");
        try {
            console.log(arr[index].printList());
        } catch (err) {
            console.log("empty index");
        }
    }
    console.log()
    var valid = false;
    /**
     * validation to check the entered input is only a number.
     */
    do {
        var number = readline.question('Enter the number you want to search \n');
        if (isNaN(number) || number <= 0) {
            console.log("Enter positive number only greater than zero");
        } else {
            valid = true;
        }
    } while (!valid);
    /**
     * printing the reminder
     */
    remainder = Number(number % 10);
    console.log("Remainder is " + remainder);

    if (arr[remainder] === undefined) {
        arr[remainder] = new access1.LinkedList;
    }
    /***
     * condition to check whether the entered number is present or not.
     * if the number is present the remove the number.
     */
    if (arr[remainder].search(Number(number))) {
        console.log("The number is present in the file");
        arr[remainder].removeElement(number);

    }
    /***
     * if number is not present in the list then add the number.
     */
    else {
        console.log("Number is not in the file");
        arr[remainder].add(number);
    }
    var flag;
    /**
     * looping over index to print the list.
     */
    for (let index = 0; index < 10; index++) {
        flag = true;
        utility.print(index + " result slot: ");
        try {
            console.log(arr[index].printList());
            str = str + arr[index].printList();
        } catch (err) {
            console.log("Empty index");
        }
    } console.log(str);
    /**
     * writing the content back to the file.
     */
    access.fileWrite('hashNumbers.txt', str);

    console.log("\n\n");
}

hashing();

