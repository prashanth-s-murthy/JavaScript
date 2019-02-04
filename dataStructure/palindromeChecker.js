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
var readline = require("readline-sync");
var access = require("../Utility/utility");
var access1 = require("../Utility/utilityDataStructure");
function deque() {
    try {
        var dequeue = new access1.Deque;
        var inputString = readline.question("enter the string :");
        var arr = inputString.split("");
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            dequeue.addFront(arr[i]);
        }
        var string1 = "";
        for (let i = 0; i < arr.length; i++) {
            string1 = string1 + "" + dequeue.removeRear();
        }
        for (let i = 0; i < arr.length; i++) {
            dequeue.addFront(arr[i]);
        }
        var string2 = "";
        for (let i = 0; i < arr.length; i++) {
            string2 = "" + string2 + dequeue.removeFront();
        }
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