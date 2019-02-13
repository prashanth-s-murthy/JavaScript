/**************************************************************************
 * Execution        : Default node             cmd> node inventoryManagement.js
 * @file            : inventoryManagement.js
 * @overview        : Create a JSON file having Inventory Details for Rice, Pulses and Wheats
                      with properties name, weight, price per kg.
 * @author          : PRASHANTH S <prashanth.murthy007@gmail.com>
 * @version         : 1.0.
 * @since           : 12/02/2019
 ***************************************************************************/
/**
 * For accessing data from utility file and utilityObjectOriantedProg
 */
var access = require('../Utility/utilityObjectOriantedProg')
var file = require('fs')
/**
 * reading the data from the inventoryManagement.json.
 */
var data = file.readFileSync('../objectOrientedPrograms/jsonFile/inventoryManagement.json');
/**
 * data is converted to JavaScript object.
 */
var obj = JSON.parse(data);
function inventory() {
    access.inventory(obj);
    /**
     * converts javascript object to string.
     */
    var string = JSON.stringify(obj);
    console.log();
    console.log(string);
}
inventory();