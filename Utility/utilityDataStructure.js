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
/**
 * creating the node class where node has two properies element and next .
 * element holds the data of the node and next holds the pointer to the next node in the list.
 */
class Node {
    constructor(element) {
        /**
         * initializing variable element to element.
         * initializing variable next to null;
         */
        this.element = element;
        this.next = null;
    }
}
/**
 * creating LinkedList class.Where linkedlist has two properties head and size where head indicates
 * the first node in the list and size indicates the number of nodes in the list. 
 */
class LinkedList {
    constructor() {
        /**
         * initializing head to null.
         * initializing size to zero.
         */
        this.head = null;
        this.size = 0;
    }
    /**
     * add function adds the data to the end of the list.
     * @param {add} element takes the element to be added to the list.
     */
    add(element) {
        var node = new Node(element);
        var current = this.head;

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
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        return str;
    }

    search(element) {
        var temp = this.head;
        while (temp) {
            if (temp.element == element) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
    removeElement(element) {
        var current = this.head;
        var prev = null;

        while (current != null) {

            if (current.element == element) {
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
    insertAt(element, index) {
        if (index > 0 && index > this.size) return false;
        else {
          /**
           * Create a new node and pass the element
           */
          var node = new Node(element);
          var curr, prev;
          curr = this.head;
          /**
           * add the element to the first index
           */
          if (index == 0) {
            node.next = this.head;
            this.head = node;
          } else {
            curr = this.head;
            var it = 0;
            /**
             * iterate over the list to find the position to insert
             */
            while (it < index) {
              it++;
              prev = curr;
              curr = curr.next;
            }
            /**
             * Adding the element.
             */
            node.next = curr;
            prev.next = node;
          }
          this.size++;
        }
      }
      /**
       * To get the position of the index.
       * @param {array} arr
       * @param {Number} num
       */
      addPosition(arr, num) {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[0] >= num) return 0;
          else if (arr[i] < num && arr[i + 1] > num) {
            return i + 1;
          }
        }
        return arr.length;
      }
    }
/******************************************************************************************** */
    class Stack {
        constructor() {
          this.items = [];
        }
        /**
         * To add an element at the top of the stack.
         * @param {any} element
         */
        push(element) {
          /**
           * Push elements in the items
           */
          this.items.push(element);
        }
        /**
         * return top most element in the stack and removes it from the stack.Underflow if stack is empty
         */
        pop() {
          try {
            if (this.items.length == 0) {
              return "Underflow";
            }
            return this.items.pop();
          } catch (error) {
            console.log(error.message);
          }
        }
        /**
         * Return the topmost element without removing it from the stack.
         */
        peak() {
          return this.items[this.items.length - 1];
        }
        /**
         * Returns true if the stack is empty.
         */
        isEmpty() {
          return this.items.length == 0;
        }
        /**
         * Returns the size of the stack
         */
        size() {
          return this.items.length;
        }
        /**
         * Returns the contents of the stack
         */
        printStack() {
          try {
            var string = "";
            for (var i = 0; i < this.items.length; i++) string += this.items[i] + " ";
            return string;
          } catch (error) {
            console.log(error.message);
          }
        }
      }

/***********************************************************************************************/

module.exports = { LinkedList,Node,Stack };