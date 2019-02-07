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
try {
    /*
   For accessing data from utility file and utilityDataStructure
   */
    var access = require('../Utility/utility')
    var access1 = require('../Utility/utilityDataStructure')
    /**
     * reads user input
     */
    var readline = require('readline-sync');
    /**
     * Read content from the file and store it in array
     */
    var fs = require('fs');
    var f = fs.readFileSync('unOrderedList.txt', 'utf8');
    var array = f.trim().split(' ');
    /**
     * creating a LinkedList object
     */
    var linkedlist = new access1.LinkedList;
    /**
     * loop till the end of the lenght of array and add all the elements to the list.
     */
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
    /**
     * Condition to check if the number is present in the list or not.
     * If it is present, remove the number from the list, else add the number to the list
     */
    if (result === true) {
        linkedlist.removeElement(word);
        var output = linkedlist.printList();
        /*
        * if the content already exist then it is removed from the file.
        */
        access.fileWrite('unOrderedList.txt', output);
        console.log("output after word is removed:" + output);
    }
    else {
        linkedlist.add(word);
        var output1 = linkedlist.printList();
        /** 
        * if number is not present then the number is added to the list.
        */
        access.fileWrite('unOrderedList.txt', output1);
        console.log("word addedd successfully");
        console.log(output1);
    }
} catch (err) {
    console.log(err.message);

}


