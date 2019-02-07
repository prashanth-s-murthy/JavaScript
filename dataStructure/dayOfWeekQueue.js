/***********************************************************
 * Execution      : Default node    cmd>node dayOfWeekQueue.js
 * Purpose        :  Program to find the day of the week by taking month and year as input and print 
 *                   the calander using Queue.
 *@description 
 * 
 *
 *@file          : dayOfWeekQueue.js
 *@overview      : Create the Week Object having a list of WeekDay objects each storing the day (i.e
                   S,M,T,W,Th,..) and the Date (1,2,3..) . The WeekDay objects are stored in a Queue
                   implemented using Linked List. Further maintain also a Week Object in a Queue to
                   finally display the Calendar.
 *@author name   : Prashanth S <prashanth.murthy007@gmail.com@gmail.com>
 *@version       : 1.0
 *@since         : 05/02/2019
 * 
 ***********************************************************/
/*
For accessing data from utility file and utilityDataStructure
*/
var access1 = require('../Utility/utilityDataStructure')
var access = require('../Utility/utility');
var util = require('util')
/**
 * reads user input.
 */
var read = require('readline-sync')
function call() {
    try {
        var weekdays = new access1.LinkListQueue
        var dateq = new access1.LinkListQueue
        var valid = false;
        do {
            var month = read.questionInt("enter the month :")
            var year = read.questionInt("enter the year :")
            if ((month <= 0 || month > 12) || isNaN(month, year) || (999 > year || year > 10000)) {
                console.log("not valid number");

            } else {
                valid = true;
            }
        } while (!valid);
        var d = access1.day(month, 1, year)
        console.log(d)
        var res = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "sat"];
        if (d <= res.length) {
            console.log("The day falls on :" + res[d])
        }
        var days = access1.monthOf(month)
        var t1 = access1.monthOf(year)

        if (t1) {
            if (month == 2) {
                days = 29;
            }
        }
        /**
         * Loop to enqueue the weekdays into Queue.
         */
        for (let i = 0; i < res.length; i++) {

            var a = weekdays.enQueue(res[i])

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
            util.print(weekdays.deQueue() + "  ")
        }
        console.log()
        for (let i = 0; i < (d * 5); i++) {
            util.print(" ")
        }
        /**
         * Loop number of days to deQueue from the queue and print it.
         */
        for (let i = 1; i <= days; i++) {

            if (i < 10) {
                util.print(" " + dateq.deQueue() + "   ")
            }
            if (i > 9) {
                util.print("" + dateq.deQueue() + "   ")
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