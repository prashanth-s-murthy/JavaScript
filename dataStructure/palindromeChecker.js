/***********************************************************
 * Execution      : Default node    cmd>node palindromeChecker.js
 * Purpose        : To to construct an algorithm to input a string of characters and check 
                    whether it is a palindrome.
 *@description 
 * 
 *
 *@file          : palindromeChecker.js
 *@overview      : The solution to this problem will use a deque to store the characters of the string. 
                   We will process the string from left to right and add each character to the rear
                   of the deque.
 *@author name   :Prashanth S <prashanth.murthy007@gmail.com@gmail.com>
 *@version       :1.0
 *@since         :01/02/2019
 * 
 ***********************************************************/
/**
 * reads input from user
 */
var readline = require("readline-sync");
/*
For accessing data from utility file and utilityDataStructure
*/
var access = require("../Utility/utility");
var access1 = require("../Utility/utilityDataStructure");
function deque() {
    try {
        /**
         * creating a Deque object.
         */
        var dequeue = new access1.Deque;
        /**
         * taking input from user.
         */
        var inputString = readline.question("enter the string :");
        var arr = inputString.split("");
        console.log(arr);
        /**
         * looping over each element in array and adding it to queue 
         */
        for (let i = 0; i < arr.length; i++) {
            dequeue.addFront(arr[i]);
        }
        var string1 = "";
        /**
         * looping over each element in array to remove the element from the rear end.
         */
        for (let i = 0; i < arr.length; i++) {
            string1 = string1 + "" + dequeue.removeRear();
        }
        /**
         * looping over each element in array and adding it to queue 
         */
        for (let i = 0; i < arr.length; i++) {
            dequeue.addFront(arr[i]);
        }
        var string2 = "";
        /**
         * looping over each element in array to remove the element from the rear end.
         */
        for (let i = 0; i < arr.length; i++) {
            string2 = "" + string2 + dequeue.removeFront();
        }
        /**
         * condition to check whether the string is palindrome or not. 
         */
        if (string1 == string2) {
            console.log("string is palindrome");
        }
        else {
            console.log("not palindreome");
        }
    } catch (err) {
        console.log(err.message);
    }
}
deque();