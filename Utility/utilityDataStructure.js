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
/************************************************************************************************ */

class Queue{
  constructor()
  { 
      this.items = []; 
  }
  enqueue(data)
  {
      // adding element to the queue 
  this.items.push(data)
  }
  deEqueue()
  {
      if(this.isEmpty()) 
      return "Underflow"; 
  return this.items.shift(); 
  }
  isEmpty()
  {
        // return true if the queue is empty. 
  return this.items.length == 0; 
  }
  printList()
  {
      var str = ""; 
      for(var i = 0; i < this.items.length; i++) 
          str += this.items[i] +" "; 
      return str; 
  }
}


/***********************************************************************************************/


class Deque {
  constructor() {
    this.items = [];
  }
  addFront(data) {
    return this.items.unshift(data);
  }

  addRear(data) {
    return this.items.push(data);
  }

  removeFront() {
    return this.items.shift();
  }

  removeRear() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length == 0;
  }
  sizeOf() {
    return this.items.length;
  }
}


class SNode {
  constructor(data){
    this.data = data;
    this.next= null;
  }
}

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
    let node = new SNode(item);
    /**
     * check if stack (heap) is full. Then inserting an element would lead to stack overflow
     */

    if (this.top) {
        node.next = this.top
        this.top = node;
    }
      else{
          this.top = node;
      }
    }

  pop() {
      if( this.top ) {
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
      if( this.top ) {
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
      while( current ) {
       counter++
       current = current.next
      }
      return counter
  }

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
 

module.exports = { LinkedList, Node, Stack,Queue, Deque ,StackLinkedList,
/***************************************Binary**************************************** */
binaryTree(num)
{
var fact=1;
for(let i=1;i<=num;i++)
{
    fact=fact*i;
}
return fact;
},

/*************************************Calender ********************************************* */


  day(m, d, y) {
    var v = Math.floor((14 - m) / 12)
    var y0 = y - v
    var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400)
    var m0 = m + 12 * Math.floor((14 - m) / 12) - 2
    var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7
    d0 = Math.floor(d0)
    return d0;
  },
  leapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0)) return true;
    if (year % 400 == 0) return true;
    return false;
  },

  monthof(month) {

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
  },


 


/*************************************************************************************** */
isPrime(initial,final)
{
var flag=0;
k=0;
var prime=[];

for(var index1=initial;index1<=final;index1++)
{
  for(var index2=2;index2<index1;index2++)
  {
    if(index1%index2==0)
    {
      flag=0;
      break;
    }
    else
    {
      flag=1;
    }
  }
  if(flag==1)
  {
    prime[k++]=index1;
  }
}
return prime;
}
}
/***************************************************************************************** */