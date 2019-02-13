var readline = require("readline-sync");
var file = require("fs");
var access = require("../../Utility/utilityDataStructure");
class CompanySharesUsingLinkedList {
  /**
   * Create a linked list object while creating the companyShares object
   */
  constructor() {
    this.linkedList = new access.LinkedList();
    try {
      /**
       * Pass the path of json file and read it and add the objects using add method of linked list
       */
      var data = JSON.parse(
        file.readFileSync('../jsonFile/linkedListStock.json')
      );
      console.log(data);

      for (let j = 0; j < data.company.length; j++) {
        this.linkedList.add(data.company[j]);
      }
    } catch (err) {
      console.log("File not found");
    }
  }
  /**
   * Function to add the stock to the current file
   */
  addTolist() {
    console.log(this.linkedList.printShares());

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
    console.log(this.linkedList.printShares());
  }
  /**
   * Function to remove the element from the list
   */
  removeFromList() {
    /**
     * Show the elements in the list and ask to enter the name of the company to remove
     */
    console.log(this.linkedList.printShares());
    var company = readline.question("Enter company name or symbol: ");
    this.linkedList.removeStock(company);
    /**
     * Display the elements after removing
     */
    console.log(this.linkedList.printShares());
    /**
     * to display detailed details in the list
     */
  }
  print() {
    console.log(this.linkedList.printShares());
  }
  writeToList() {
    /**
     * Stringify the elements and pass the array to the object to write into a json file
     */
    file.writeFileSync(
      '../jsonFile/linkedListStock.json',
      JSON.stringify(this.linkedList.printShares()),
      function (err) {
        if (err) {
          throw err;
        }
      }
    );
  }
}
module.exports = { CompanySharesUsingLinkedList };
