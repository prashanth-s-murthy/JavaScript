/***********************************************************
 * Execution      : Default node    cmd>node orderedList.js
 * Purpose        : Read from file the list of Numbers and take user input for a new number if the
 *                  number is present then remove the number or add the number to the list in ascending
 *                  order.
 *@description 
 * 
 *
 *@file          : orderedList.js
 *@overview      : Read a List of Numbers from a file and arrange it ascending Order in a Linked List. 
                   Take user input for a number, if found then pop the number out of the list else
                   insert the number in appropriate position
 *@author name   : Prashanth S <prashanth.murthy007@gmail.com@gmail.com>
 *@version       : 1.0
 *@since         : 01/02/2019
 * 
 ***********************************************************/
try {
  var readline = require("readline-sync");
  /*
  For accessing data from utility file and utilityDataStructure
  */
  var access = require("../Utility/utility");
  var accessDs = require("../Utility/utilityDataStructure");
  /**
   * Read content from the file and store it in array
   */
  var arr1 = access.fileRead();
  var arr = []
  for (let i = 0; i < arr1.length; i++) {
    arr[i] = parseInt(arr1[i])
  }
  access.bubbleSortInt(arr)
  /**
   * Create a linked list object
   */
  var linkedList = new accessDs.LinkedList();
  /**
   * loop till the end of the lenght of array and add all the elements to the list.
   */
  for (let i = 0; i < arr.length; i++) {
    linkedList.add(arr[i]);
  }
  /**
   * To print the contents of the list
   */
  var contents = linkedList.printList();
  console.log("Data in the list: " + contents);
  var valid = false;
  /**
   * Ask user to enter a number to search in the list, Validation to accept only numbers.
   */
  do {
    var number = readline.question("Enter the number: ");
    if (isNaN(number)) {
      console.log("Not a valid entry. Enter only numbers");
    } else {
      valid = true;
    }
  } while (!valid);
  /**
   * Check whether the number is present in the list or not by using search function.
   */
  var result = linkedList.search(number)
  console.log("number in the list: " + result);
  /**
   * Condition to check if the number is present in the list or not.
   * If it is present, remove the number from the list, else add the number to the list
   */
  if (result == true) {
    console.log(linkedList.removeElement(number));

    var output = linkedList.printList();
    /*
    * if the content already exist then it is removed from the file.
    */
    access.fileWrite('orderedList.txt', output);
    console.log("Removed the number from the list since the number is already present ");
    console.log("New data: " + output);
  }
  /** 
   * if number is not present then the number is added to the list.
   *  */
  else {
    var position = linkedList.addPosition(arr, number)
    linkedList.insertAt(number, position);
    var output1 = linkedList.printList();
    /*
    * write the content back to the file.
    */
    access.fileWrite('orderedList.txt', output1);
    console.log("Word added successfully ");
    console.log("New data: " + output1);
  }
} catch (err) {
  console.log(err.message);

}

