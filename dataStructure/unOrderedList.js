/***********************************************************
 * Execution      : Default node    cmd>node unOrderedList.js
 * Purpose        : To read from file the list of Words and take user input to search a Text
 *@description 
 * 
 *
 *@file          : unOrderedList.js
 *@overview      : Create a Unordered Linked List. The Basic Building Block is the Node Object. 
                   Each node object must hold at least two pieces of information. One ref to
                   the data field and second the ref to the next node object.
 *@author name   :Prashanth S <prashanth.murthy007@gmail.com@gmail.com>
 *@version       :1.0
 *@since         :01/02/2019
 * 
 ***********************************************************/
var access = require('../Utility/utility')
var access1 = require('../Utility/utilityDataStructure')
var readline = require('readline-sync');
var array = access.fileRead();
console.log(array);
var linkedlist = new access1.LinkedList;
for (let i = 0; i < array.length; i++) {
    linkedlist.add(array[i]);
}
var contents = linkedlist.printList();
console.log(contents);

var valid = false;
/**
 * Validation to accept only numbers.
 */
do {
    var word = readline.question("enter the word to delete  : ");
    if (!isNaN(word)) {
        console.log("Not a valid entry.");
    } else {
        valid = true;
    }
} while (!valid);

//var word = readline.question("enter the word to delete  : ");
var result = linkedlist.search(word);
console.log("is word exist : " + result);

if (result === true) {
    linkedlist.removeElement(word);
    var output = linkedlist.printList();
    access.fileWrite('unOrderedList.txt', output);
    console.log("output after word is removed:" + output);
}
else {
    linkedlist.add(word);
    var output1 = linkedlist.printList();
    access.fileWrite('unOrderedList.txt', output1);
    console.log("word addedd successfully");
    console.log(output1);

}


