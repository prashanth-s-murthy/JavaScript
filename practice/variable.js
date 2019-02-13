/*var x=7;
let y=3;
x=5; x=3;
var x=7
console.log('Answer : '+x);*/


var D = require('../Utility/utilityDataStructure')
var M = require('../Utility/utility');
var T = require('util')
var read = require('readline-sync')
function call() {
    try {
        var weekdays=new D.LinkListQueue
        var dateq = new D.LinkListQueue
        var month = read.questionInt("enter the month :")
        var year = read.questionInt("enter the year :")
        var d = access.day(month,1, year)
        console.log(d)
        var res = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "sat"];
        if (d <= res.length) {
            console.log("The day falls on :" + res[d])
        }
        var days = access.monthof(month)
        var t1 = access.monthof(year)
        if (t1) {
            if (month == 2) {
                days = 29;
            }
        }
        /**
         * Loop to enqueue the weekdays into Queue.
         */
        for (let i = 0; i < res.length; i++) {
            weekdays.enQueue(res[i])
        }
        /**
         * Loop to enqueue the dates into Queue.
         */
        for (let i = 1; i <= days; i++) {

            dateq.enQueue(i)
        }
        /**
         * Loop the weekdays to deQueue from the queue and print it.
         */
        for (let i = 0; i < res.length; i++) {
            T.print(weekdays.deQueue() + "  ")
        }
        console.log()
        for (let i = 0; i < (d * 5); i++) {
            T.print(" ")
        }
        /**
         * Loop number of days to deQueue from the queue and print it.
         */
        for (let i = 1; i <= days; i++) {

            if (i < 10) {
                T.print(" " + dateq.deQueue() + "   ")
            }
            if (i > 9) {
                T.print("" + dateq.deQueue() + "   ")
            }
            if ((d + i) % 7 == 0) {
                console.log();
            }
        }
    }
    catch (err) {
        console.log(err.message);
    }
} call();

