var readline = require('readline-sync')
var file = require('fs')
var access = require('../inventoryManagement/inventoryFactory.js')
var data = file.readFileSync('../jsonFile/inventoryManagerStock.json')
function main() {
    var parseData = JSON.parse(data);
    var object = new access.inventory();
    var ch = 0;
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