/***********************************************************
 * Execution      : Default node    cmd>node dayOfWeekStack.js
 * Purpose        :  Program to find the day of the week by taking month and year as input and print 
 *                   the calander using Stack.
 *@description 
 * 
 *
 *@file          : dayOfWeekStack.js
 *@overview      : Create the Week Object having a list of WeekDay objects each storing the day (i.e
                   S,M,T,W,Th,..) and the Date (1,2,3..) . The WeekDay objects are stored in a Stack
                   implemented using Linked List. Further maintain also a Week Object in a Stack to
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
        /**
         * creating StackLinkedList object.
         */
        var weekdays = new access1.StackLinkedList
        var stack1 = new access1.StackLinkedList
        var dateq = new access1.StackLinkedList
        var stack2 = new access1.StackLinkedList
        /**
         * month, year takes the input from user.
         */
        var month = read.questionInt("enter the month :")
        var year = read.questionInt("enter the year :")
        var d = access1.day(month, 1, year)
        console.log(d)
        /**
         * res stores the days of week in array.
         */
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
         * Loop to push the weekdays into stack.
         */
        for (let i = 0; i < res.length; i++) {
            weekdays.push(res[i])
        }
        /**
         * Loop to push the dates into stack.
         */
        for (let i = 1; i <= days; i++) {
            dateq.push(i)
        }
        /**
         * Loop the week days and push it to another stack.
         */
        for (let i = 0; i < res.length; i++) {
            stack1.push(weekdays.pop())
        }
        /**
         * Loop the number of days and push it to another stack.
         */
        for (let i = 1; i <= days; i++) {

            stack2.push(dateq.pop())
        }
        /**
         * To print weekdays.
         */
        for (let i = 0; i < res.length; i++) {
            util.print(stack1.pop() + "  ")
        }
        console.log()
        for (let i = 0; i < (d * 5); i++) {
            util.print(" ")
        }
        /**
         * To print days using spacing.
         */
        for (let i = 1; i <= days; i++) {

            if (i < 10) {
                util.print(" " + stack2.pop() + "   ")
            }
            if (i > 9) {
                util.print("" + stack2.pop() + "   ")
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