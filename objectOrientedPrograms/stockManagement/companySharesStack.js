/**
 * readline reads inout from user.
 */
var readline = require('readline-sync');
/**
 * to use file structure.
 */
var file = require('fs');
var access = require('../../Utility/utilityDataStructure');
/**
 * creating the class companyShareUsingStack.
 */
class companySharesUsingStack {
  constructor() {
    this.stack = new access.StackLinkedList();
    try {
      /**
       * Pass the path of json file and read it and add the objects using add method of stack
       */
      var data = JSON.parse(
        file.readFileSync('../jsonFile/linkedListStock.json')
      );
      for (let i = 0; i < data.company.length; i++) {
        this.stack.push(data.company[i]);
      }
    } catch (err) {
      console.log("File not found");
    }
  }
  /**
   * buy()-adding new object to the json file
   */
  addTolist() {
    console.log(this.stack.printShares());

    var valid = false;
    do {
      /**
       * Validation to accept only characters
       */
      var name = readline.question("Enter the name want to add : ");
      var symbol = readline.question("Enter the symbol : ");
      if (!isNaN(name) || !isNaN(symbol)) {
        console.log("enter only Alphabets");
      } else {
        valid = true;
      }
    } while (!valid);
    var share = readline.questionInt("Enter the share :");
    var price = readline.questionInt("Enter the price :");
    /**
     * Access all the data provided by user and add it to the linked list
     */
    this.stack.push({
      name: name,
      symbol: symbol,
      share: share,
      price: price
    });
    /**
     * Display the elements in the list after adding
     */
    console.log("Elements after adding to the list :");
    console.log(this.stack.printShares());
  }
  removeFromList() {
    /**
     * Show the elements in the list and ask to enter the name of the company to remove
     */
    console.log(this.stack.printShares());
    var company = readline.question("Enter company name or symbol: ");
    this.stack.removeStock(company);
    /**
     * Display the elements after removing
     */
    console.log(this.stack.printShares());
    /**
     * to display detailed details in the list
     */
  }
  print() {
    console.log(this.stack.printShares());
  }
  writeToList() {
    /**
     * Stringify the elements and pass the array to the object to write into a json file
     */
    file.writeFileSync(
      '../jsonFile/linkedListStock.json',
      JSON.stringify(this.stack.printShares()),
      function (err) {
        if (err) {
          throw err;
        }
      }
    );
  }
}
module.exports = { companySharesUsingStack };
