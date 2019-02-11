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