var readline = require('readline-sync')
var file = require('fs')
var access = require('../addressBook/addressDetail.js')
var data = file.readFileSync('../addressBook/AddressBook.json')
function main() {
    var parseData = JSON.parse(data);
    var object = new access.AddressBook();
    var choice = 0;
    while (choice != 7) {
        console.log("enter 1 to ADD person information");
        console.log("enter 2 to UPDATE person information");
        console.log("enter 3 to REMOVE person information");
        console.log("enter 4 to SORT(by ZIP) the address book based on the zip");
        console.log("enter 5 to SORT(by NAME) the address book basrd on the name");
        console.log("enter 6 to PRINT all the address book information");
        console.log("enter 7 to EXIT");
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
            case 5: object.sortByFirstName(parseData);
                break;
            case 6: object.printAddressBook(parseData);
                break;
            case 7: console.log("exiting....");
                    console.log("----THANK YOU----")
            break;
            default: console.log("enter the valid choice");               
        }
    }
}
main()