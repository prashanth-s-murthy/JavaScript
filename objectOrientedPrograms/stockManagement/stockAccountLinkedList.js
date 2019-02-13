/**************************************************************************
 * Execution        : Default node             cmd> node stockAccountLinkedList.js
 * @file            : stockAccountLinkedList.js
 * @overview        : programme is used to manage a list of Doctors associated with 
                      the Clinique. This also manages the list of patients who use the
                      clinique. It manages Doctors by Name, Id, Specialization and Availability 
                      (AM, PM or both). It manages Patients by Name, ID, Mobile Number and Age. 
                      The Program allows users to search Doctor by name, id, Specialization or 
                      Availability. Also the programs allows users to search patient by name, 
                      mobile number or id. The programs allows patients to take appointment with 
                      the doctor. A doctor at any availability time can see only 5 patients. 
                      If exceeded the user can take appointment for patient at different date 
                      or availability time. Print the Doctor Patient Report.
 * @author          : PRASHANTH S <prashanth.murthy007@gmail.com>
 * @version         : 1.0.
 * @since           : 12/02/2019
 ***************************************************************************/
/**
 * reads input from user.
 */
var readline = require("readline-sync");
/**
 * accessing the companyShareLinkedList.
 */
var access = require("../stockManagement/companyShareLinkedList");
function main() {
  //try {
  /**
   * Create companyShare object to use the add, remove, print functionalities.
   */
  var companyShares = new access.CompanySharesUsingLinkedList();
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
  /*}catch (err) {
    console.log(err.message);
  }*/
}
main();
module.exports = { main };
