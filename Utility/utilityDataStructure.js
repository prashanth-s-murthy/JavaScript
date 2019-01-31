/******************************************************************************
 *  Execution       : Default node         cmd> node utilityDataStructure.js                 
 *  Purpose         : To deploy all the business logic of data structure.
 * 
 *  @description
 * 
 *  @file           : utilityDataStructure.js
 *  @overview       : All the business logic are coded here.
 *  @module         : read-line modules are installed
 *  @author         : PRASHANTH S   <prashanth.murthy007@gmail.com>
 *  @version        : 1.0.
 *  @since          : 31/01/2019
********************************************************************************/

/*
*@purpose       :to accept user input values
*@description   :invoke this whenever we want to take input from user
*/
var utility = require("../Utility/utility");

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

add(element)
{
    var  node = new Node(element);
    var current=this.head;

    if (this.head == null) {
        this.head = node;
    }
    else {
        current = this.head;

        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this.size++;
}
printList()
{
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    return str;
}

search(element)
{
    var temp = this.head;
    while (temp) {
        if (temp.element === element)
            return true;
    }
    return false;
}
removeElement(element)
{
    var current = this.head;
    var prev = null;

    while (current != null) {

        if (current.element === element) {
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.size--;
            return current.element;
        }
        prev = current;
        current = current.next;
    }
    return false;
}
}


module.exports = { LinkedList };