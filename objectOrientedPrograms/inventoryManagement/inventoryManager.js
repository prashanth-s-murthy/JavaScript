/**************************************************************************
 * Execution        : Default node             cmd> node inventoryManager.js
 * @file            : inventoryManager.js
 * @overview        : To Create InventoryManager to manage the Inventory. 
                      The Inventory Manager will use InventoryFactory to create Inventory
                      Object from JSON. The InventoryManager will call each Inventory Object 
                      in its list to calculate the Inventory Price and then call the Inventory 
                      Object to return the JSON String. The main program will be with 
                      InventoryManager.
 * @author          : Prashanth S <prashanth.murthy007@gmail.com>
 * @version         : 1.0.
 * @since           : 12/02/2019
 ***************************************************************************/
/**
 * reads user input.
 */
var readline = require('readline-sync')
var file = require('fs')
/**
 * access the inventory factory data.
 */
var access = require('../inventoryManagement/inventoryFactory.js')
/**
 * reads the content from the json onject.
 */
var data = file.readFileSync('../jsonFile/inventoryManagerStock.json')
function main() {
    /**
     * data is converted to JavaScript object.
     */
    var parseData = JSON.parse(data);
    /**
     * creating inventory object.
     */
    var object = new access.inventory();
    var ch = 0;
    /**
     * while loop to accept the choice from the user.
     */
    while (ch != 5) {
        console.log('enter 1: ADD');
        console.log('enter 2: REMOVE');
        console.log('enter 3: PRINT');
        console.log('enter 4: CALCULATE THE TOTAL VALUE OF STOCK');
        console.log('enter 5: EXIT');
        var ch = readline.questionInt('enter your CHOICE : ');
        switch (ch) {
            case 1: object.add(parseData);
                break;
            case 2: object.remove(parseData);
                break;
            case 3: object.print(parseData);
                break;
            case 4: object.totalValueOfStock(parseData);
                break;
            case 5: console.log('exiting...');
                break;
            default:
                console.log("enter the correct number");
        }
    }
}
main()