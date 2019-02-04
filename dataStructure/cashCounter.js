/***********************************************************
 * Execution      : Default node    cmd>node cashCounter.js
 * Purpose        : Create a Program which creates Banking Cash Counter where people come in to deposit Cash 
                    and withdraw Cash. Have an input panel to add people to Queue to either deposit 
                    or withdraw money and dequeue the people. Maintain the Cash Balance.
 *@description 
 * 
 *
 *@file          :cashCounter.js
 *@overview      :Write a Queue Class to enqueue and dequeue people to either deposit
                  or withdraw money and maintain the cash balance
 *@author name   :Prashanth S <prashanth.murthy007@gmail.com@gmail.com>
 *@version       :1.0
 *@since         :03/02/2019
 * 
 ***********************************************************/
var access1 = require('../Utility/utilityDataStructure');
var read = require('readline-sync');
function queue() {
    var queue = new access1.Queue;
    var bankamount = 4000;
    var set = [];
    var flag = true;
    var count = 0;
    var size = read.question("Enter the total number of people to be in queue :")
    if (size > 0) {
        for (let i = 1; i < size; i++) {
            var input = read.question("Enter 1 deposit amount :\nEnter 2 to withdraw amount :")
            if (input == 1) {
                var amount = read.questionFloat("Enter the total amount to deposit :")
                var set = queue.enqueue(Number(amount));
                flag = true;
            }
            else if (input == 2) {
                var amount = read.questionInt("Enter the total amount to be withdraw :")
                var get = queue.enqueue(Number(-amount))
                flag = true;
            }
            else {
                console.log("Make sure that you have entered correct key ");
                flag = false;
                return;

            }
        }
    }
    else {
        console.log("Invalid input ");
        return;
    }
    if (flag) {
        var add = 0
        for (let i = 1; i < size; i++) {
            add = add + queue.deEqueue();
        }
        console.log(add);
        var totalamount = bankamount + add;
        console.log("Total amount left in bank is :" + totalamount);
        if (totalamount < bankamount) {
            console.log("Minimum cash is not maintained in bank:");
        }
        else {
            console.log("Minimum cash is maintained in bank");

        }

    }
}
queue();