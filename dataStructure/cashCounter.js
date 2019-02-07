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
/*
For accessing data from utility file and utilityDataStructure
*/
var access1 = require('../Utility/utilityDataStructure');
/**
 * reads input from user
 */
var read = require('readline-sync');
function queue() {
    /**
     * creating queue object.
     */
    var queue = new access1.Queue;
    /**
     * initializing variable bankamount to 4000.
     */
    var bankamount = 1000;
    /**
     * 
     */
    var flag = true;
    /**
     * taking input from user
     */
    var size = read.question("Enter the total number of people to be in queue :")
    /**
     * condition to check the queue size is greater than zero
     */
    if (size > 0) {
        /**
         * condition to deposit or withdraw
         */
        for (let i = 1; i < size; i++) {
            var input = read.question("Enter 1 deposit amount :\nEnter 2 to withdraw amount :")
            /**
             * if condition==1 then the amount is deposited
             */
            if (input == 1) {

                var amount = read.questionFloat("Enter the total amount to deposit :")

                var set = queue.enqueue(Number(amount));
                flag = true;
            }
            /**
             * if condition==2 then the amount is withdraw
             */
            else if (input == 2) {
                var amount = read.questionInt("Enter the total amount to be withdraw :")
                var get = queue.enqueue(Number(-amount))
                flag = true;
            }

            /**
             * else enter the correct key.
             */
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
        /**
         * display the toatal amount in the bank
         */
        var totalamount = bankamount + add;
        console.log("Total amount left in bank is :" + totalamount);
        /**
         * condition to check whether the bank balance in maintained or not.
         */
        if (totalamount < bankamount) {
            console.log("Minimum cash is not maintained in bank:");
        }
        else {
            console.log("Minimum cash is maintained in bank");

        }

    }
}
queue();