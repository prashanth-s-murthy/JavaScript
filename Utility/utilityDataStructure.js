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
   * @param {any} element takes the element to be added to the list.
   */
  add(element) {
    var node = new Node(element);
    var current = this.head;
    /**
     * if head is null then create a node.
     */
    if (this.head == null) {
      this.head = node;
    }
    else {
      /**
       * if the current is pointing to head 
       */
      current = this.head;
      /**
       * iterate till the current.next is null and add the node.
       * increment the size.
       */
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  /**
   * print the number in the list.
   */
  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    return str;
  }
  /**
   * search the element in the list and returns true or false.
   * @param {any} element 
   */
  search(element) {
    var temp = this.head;
    /**
     * if element found it returns true.
     */
    while (temp) {
      if (temp.element == element) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }
  /**
   * removes the element from the list.
   * @param {any} element 
   */
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
/*************************************Stack****************************************** */
/**
 * creating the stack class
 */
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
/***************************************Queue*********************************************** */
/**
 * creating the Queue class.
 */
class Queue {
  constructor() {
    this.items = [];
  }

  /**
   *  adding element to the queue 
   * @param {any} data 
   */
  enqueue(data) {
    this.items.push(data)
  }
  /**
   *  removing the data from the queue.
   */
  deEqueue() {
    if (this.isEmpty())
      return "Underflow";
    return this.items.shift();
  }
  /**
   * return true if the queue is empty. 
   */
  isEmpty() {
    return this.items.length == 0;
  }
  /**
   * print the elements in queue.
   */
  printList() {
    var string = "";
    for (var i = 0; i < this.items.length; i++)
      string += this.items[i] + " ";
    return string;
  }
}


/****************************************Deque**********************************************/
/**
 * creating the class Deque
 */
class Deque {
  constructor() {
    this.items = [];
  }
  /**
   * add the data to the front of the queue.
   * @param {any} data 
   */
  addFront(data) {
    return this.items.unshift(data);
  }
  /**
   * add the data to end of the queue.
   * @param {any} data 
   */
  addRear(data) {
    return this.items.push(data);
  }
  /**
   * removes the data from the front.
   */
  removeFront() {
    return this.items.shift();
  }
  /**
   * remove the data from the end.
   */
  removeRear() {
    return this.items.pop();
  }
  /**
   * returns whether the queue is empty or not.
   */
  isEmpty() {
    return this.items.length == 0;
  }
  /**
   * returns the size of the queue.
   */
  sizeOf() {
    return this.items.length;
  }
}

/************************************************************************************************************** */
/**
 * creating the class StackNode
 */
class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
/**
 * creating the class StackLinkedList
 */
class StackLinkedList {
  constructor() {
    this.top = null;
  }
  /**
   * To add an element at the top of the stack.
   * @param {any} item
   */
  push(item) {
    /**
     * create new node temp.
     */
    let node = new StackNode(item);
    /**
     * check if stack (heap) is full. Then inserting an element would lead to stack overflow
     */

    if (this.top) {
      node.next = this.top
      this.top = node;
    }
    else {
      this.top = node;
    }
  }
  /**
   * removes the element from the top of the stack.
   */
  pop() {
    if (this.top) {
      let itemToPop = this.top
      this.top = this.top.next
      return itemToPop.data
    } else {
      log('Stack is empty!')
      return false;
    }
  }

  /**
   * Return the topmost element without removing it from the stack.
   */
  peak() {
    if (this.top) {
      return this.top.data
    } else {
      return null
    }
  }
  /**
   * Returns true if the stack is empty.
   */
  isEmpty() {
    return this.length > 1
  }
  /**
   * Returns the size of the stack
   */
  size() {
    let current = this.top
    let counter = 0
    while (current) {
      counter++
      current = current.next
    }
    return counter
  }
  /**
   * prints the elements of stack.
   */
  printStack() {

    var string = "";
    var temp = this.top;
    while (temp != null) {
      string = string + " " + temp.data;
      temp = temp.next;
    }

    return string;

  }
}
/********************************************************************************************* */
/**
 * creating the class StackNode
 */
class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
/**
 * creating the class StackNode
 */
class LinkListQueue {
  constructor() {
    this.tail = null;
    this.head = null;

  }
  /**
   * add the data to the queue
   * @param {any} item 
   */
  enQueue(item) {
    let node = new QueueNode(item);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  /**
   * removes the data from the queue
   */
  deQueue() {
    if (!this.head) {
      return "no item";
    }
    else {
      let itemTopop = this.head;
      this.head = this.head.next;
      return itemTopop.data;
    }
  }
  /**
   * returns whether the size is empty or not
   */
  isEmpty() {
    return this.size() < 1;
  }
  /**
   * returns the size of the queue
   */
  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  /**
   * prints the data to the queue.
   */
  print() {
    var string = "";
    var temp = this.head;
    while (temp != null) {
      string = string + " " + temp.data;
      temp = temp.next;
    }

    return string;

  }
}

module.exports = {
  LinkedList, Node, Stack, Queue, Deque, StackLinkedList, QueueNode, LinkListQueue,
  /***************************************Binary**************************************** */
  /**
   * 
   * @param {Number} num 
   */
  binaryTree(num) {
    try {
      var fact = 1;
      /**
       * looping over the number to find the factorial.
       */
      for (let i = 1; i <= num; i++) {
        fact = fact * i;
      }
      return fact;
    } catch (err) {
      console.log(err.message);

    }
  },

  /************************************* Calender ********************************************* */
  /**
   * day returns the day on which the month begins.
   * @param {Number} m 
   * @param {Number} d 
   * @param {Number} y 
   */
  day(m, d, y) {
    try {
      /**
       * formula to calculate the day using Gregorian calendar.
       */
      var v = Math.floor((14 - m) / 12)
      var y0 = y - v
      var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400)
      var m0 = m + 12 * Math.floor((14 - m) / 12) - 2
      var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7
      d0 = Math.floor(d0)
      return d0;
    } catch (err) {
      console.log(err.message);
    }
  },
  /**
   * takes the year as input and return whether the year is leap year or not.
   * @param {Number} year 
   */
  leapYear(year) {
    try {
      /**
      * condition to check the leap year.
      */
      if ((year % 4 == 0) && (year % 100 != 0)) return true;
      if (year % 400 == 0) return true;
      return false;
    } catch (err) {
      console.log(err.message);
    }

  },
  /**
   * monthof takes the month as input and returns the number of days in that month.
   * @param {Number} month 
   */
  monthOf(month) {
    try {
      switch (month) {
        case 1: return 31;
          break;
        case 2: return 28;
          break;
        case 3: return 31;
          break;
        case 4: return 30;
          break;
        case 5: return 31;
          break;
        case 6: return 30;
          break;
        case 7: return 31;
          break;
        case 8: return 31;
          break;
        case 9: return 30;
          break;
        case 10: return 31;
          break;
        case 11: return 30;
          break;
        case 12: return 31;
          break;
      }
    } catch (err) {
      console.log(err.message);
    }

  },
  /*************************************************************************************** */
  /**
   * isPrime takes initual and final ad input and returns the prime number between the rang.
   * @param {Number} initial 
   * @param {Number} final 
   */
  isPrime(initial, final) {
    try {
      var flag = 0;
      k = 0;
      var prime = [];
      /**
       * looping over index find the prime number between the range.
       */
      for (var index1 = initial; index1 <= final; index1++) {
        for (var index2 = 2; index2 < index1; index2++) {
          if (index1 % index2 == 0) {
            flag = 0;
            break;
          }
          else {
            flag = 1;
          }
        }
        if (flag == 1) {
          prime[k++] = index1;
        }
      }
      return prime;
    } catch (err) {
      console.log(err.message);

    }

  },
  /***************************************** rangeOfArray ****************************************** */
  rangeOfArray() {
    try {
      var arr = [];
      var array = [["0-100 "], ["100-200 "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
      /**
       * looping over the number to check whether the number is prime or not.
       */
      for (let i = 2; i < 1000; i++) {
        if (utility.isPrime(i)) {
          arr.push(i);

        }
      }
      var range = 100, k = 0;
      /**
       * looping over the array to check the number is anagram in the rang
       * push the number that are anagram that lies  between the range.
       */
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (utility.isAnagram(arr[i], arr[j])) {
            if (arr[i] <= range) {
              if (arr[j] <= range) {
                array[k].push(arr[i]);
                array[k].push(arr[j]);
              }
            } else {
              /**
               * if number is greater than the range then add the range with 100.
               * and push them to array.
               */
              range = range + 100;
              k++;
              if (arr[j] <= range) {
                array[k].push(arr[i]);
                array[k].push(arr[j]);
              }
            }
          }
        }
      }
      console.log("The Number which are prime and anagram ");
      var req = require('util')
      /**
       * looping over the array and comparing the elements to  print numbers which are anagram.
       */
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          req.print(array[i][j]);
          if (j == 0) {
            req.print(" => ");
          } else {
            if (j != array[i].length - 1)
              req.print(",")
          }
        }
        console.log();
      }
    } catch (err) {
      console.log(err.message);
    }

  },
}