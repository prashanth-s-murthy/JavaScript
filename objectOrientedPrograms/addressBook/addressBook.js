/**************************************************************************
 * Execution        : Default node             cmd> node addressBook.js
 * @file            : addressBook.js
 * @overview        : Create Object Oriented Analysis and Design of a simple ​
                      Address Book Problem​ .
 * @author          : Prashanth S <prashanth.murthy007@gmail.com>
 * @version         : 1.0.
 * @since           : 12/02/2019
 ***************************************************************************/
/**
 * readline reads input from user.
 */
var readline = require('readline-sync')
var file = require('fs')
/**
 * accessing the addressDetail from address book.
 */
var access = require('../addressBook/addressDetail.js')
/**
 * reading the content from json file.
 */
var data = file.readFileSync('../addressBook/AddressBook.json')
function main() {
    try {
        /**
         * parsing the json object.
         */
        var parseData = JSON.parse(data);
        /**
         * creating address book object.
         */
        var object = new access.AddressBook();
        var choice = 0;
        /**
         * choice to add, remove, update, sort, print content.
         */
        while (choice != 6) {
            console.log("enter 1 to ADD person information");
            console.log("enter 2 to UPDATE person information");
            console.log("enter 3 to REMOVE person information");
            console.log("enter 4 to SORT(by ZIP) the address book based on the zip");
            console.log("enter 5 to PRINT all the address book information");
            console.log("enter 6 to EXIT");
            var choice = readline.questionInt("enter your choice : ");
            switch (choice) {
                case 1: object.addPerson(parseData);
                    break;
                case 2: object.updatePerson(parseData);
                    break;
                case 3: object.removePerson(parseData);
                    break;
                case 4: object.sortByZip(parseData);
                    break;
                case 5: object.printAddressBook(parseData);
                    break;
                case 6: console.log("exiting....");
                    console.log("----THANK YOU----")
                    break;
                default: console.log("enter the valid choice");
            }
        }
    } catch (err) {
        console.log(err.message);
    }
}
main()