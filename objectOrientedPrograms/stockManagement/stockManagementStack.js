/**************************************************************************
 * Execution        : Default node             cmd> node stockManagementStack.js
 * @file            : stockManagementStack.js
 * @overview        : To add and remove the company info from the list of company shares.
 *                    List of CompanyShares in Stack udsing Linked List and new CompanyShares can
 *                    be added or removed easily
 * @author          : Prashanth S <prashanth.murthy007@gmail.com>
 * @version         : 1.0.
 * @since           : 12/02/2019
 ***************************************************************************/
/**
 * readline reads the input from the user.
 */
var readline = require("readline-sync");
var access = require("../stockManagement/companySharesStack");
function main() {
  try {
    /**
     * Create companyShare object.
     */
    var companyShares = new access.companySharesUsingStack;
    /**
     * initializing choice to zero.
     */
    var choice = 0;
    /**
     * loop to show the choice and to accept the choice.
     */
    while (choice != 5) {
      console.log("1. Add");
      console.log("2. Remove");
      console.log("3. Print");
      console.log("4. Save");
      console.log("5. Exit")
      var choice = readline.questionInt("Enter valid choice :");
      switch (choice) {
        case 1:
          companyShares.addTolist();
          break;
        case 2:
          companyShares.removeFromList();
          break;
        case 3:
          companyShares.print();
          break;
        case 4:
          companyShares.writeToList();
          break
        case 5: console.log("thank you");

          break;
        default:
          console.log("Please enter valid number ");
          break;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}
main();
module.exports = { main };
