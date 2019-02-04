/***********************************************************
 * Execution      : Default node    cmd>node balancedParentheses.js
 * Purpose        : To read list of integers from the file and add it to the file and remove it from th file and save it.
 *@description 
 * 
 *
 *@file          : balancedParentheses.js
 *@overview      : Write a Stack Class to push open parenthesis “(“ and pop closed parenthesis “)”. 
                   At the End of the Expression if the Stack is Empty then the Arithmetic Expression 
                   is Balanced. Stack Class Methods are Stack(), push(), pop(), peak(), isEmpty(), 
                   size()
 *@author name   :Prashanth S <prashanth.murthy007@gmail.com@gmail.com>
 *@version       :1.0
 *@since         :01/02/2019
 * 
 ***********************************************************/
var readline = require("readline-sync");
/*
For accessing data from utility file and utilityDataStructure
*/
var access = require("../Utility/utility");
var access1 = require("../Utility/utilityDataStructure");

function Stack() {
  try {
    /**
     * Create a stack object
     */
    var stack = new access1.Stack();
    /**
     * Ask user to input the mathematical expression with paretnheses.
     */
    var str = readline.question("Enter the mathematical expression with parantheses : ");
    var character;
    /**
     * Loop from beginning till the length of user input string
     */
    for (var i = 0; i < str.length; i++) {
      /**
       * access every index of the string
       */
      character = str.charAt(i);
      /**
       * Condition to check open parenthesis and push it to stack
       */
      if (character == "(" || character == "[" || character == "{") {
        stack.push(character);
      } else {
        /**
         * Switch case to return false if the character is not equal to the following cases.
         */
        switch (character) {
          case ")":
            if (stack.pop() != "(") {
              return false;
            }
            break;
          case "]":
            if (stack.pop() != "[") {
              return false;
            }
            break;
          case "}":
            if (stack.pop() != "{") {
              return false;
            }
            break;
        }
      }
    }
    /**
     * return true if all the parentheses are popped. ie, stack size=0.
     */
    if (stack.size() == 0) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error.message);
  }
}
/**
 * if stack returns true then the stack is balanced.
 */
var value = Stack();
if (value) {
  console.log("String is balanced");
} else {
  console.log("Not balanced");
}
