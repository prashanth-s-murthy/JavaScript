var readline = require("readline-sync");
/*
For accessing data from utility file and utilityDataStructure
*/
var access = require("../Utility/utility");
var accessDs = require("../Utility/utilityDataStructure");

function Stack() {
  try {
    /**
     * Create a stack object
     */
    var stack = new accessDs.Stack();
    /**
     * Ask user to input the mathematical expression with paretnheses.
     */
    var str = readline.question(
      "Enter the mathematical expression with parantheses : "
    );
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
var bol = Stack();
if (bol) {
  console.log("String is balanced");
} else {
  console.log("Not balanced");
}
