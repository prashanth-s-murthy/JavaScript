/***********************************************************
 * Execution      :Default node    cmd>node calender.js
 * Purpose        :Program that takes the month and year as command-line arguments and prints the
                   Calendar of the month. Store the Calendar in an 2D Array, the first dimension 
                   the week of the month and the second dimension stores the day of the week.
 *@description 
 * 
 *
 *@file          :calender.js
 *@overview      :function calander takes month and year as command-line arguments and prints the 
                  calander of month.
 *@author name   :Prashanth S <prashanth.murthy007@gmail.com@gmail.com>
 *@version       :1.0
 *@since         :03/02/2019
 * 
 ***********************************************************/
/**
 * for accessing data from the utility file.
 */
var access1 = require('../Utility/utilityDataStructure')
var access2 = require('util')
function calender() {
    /**
     * variable month and year is taking command line arguments.
     */
    var month = +process.argv[2];
    var year = +process.argv[3];

    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var day = access1.day(month, 1, year);
    console.log(day);
    /**
     * accessing leapyear function from the utilityDataStructure.
     */
    var leap = access1.leapYear(year);
    /**
     * if year is leap year then the 2nd month has 29 days.
     */
    if (leap == true) {

        dates[2] = 29;
    }
    for (var i = 0; i < week.length; i++) {
        access2.print(week[i] + "  ");

    }
    console.log();
    for (var i = 0; i < (day * 5); i++) {
        access2.print(" ");

    }

    for (var i = 1; i <= dates[month]; i++) {
        if (i < 10) {
            access2.print(" " + i + "   ");
        }

        if (i > 9) {
            access2.print("" + i + "   ")
        }
        if ((i + day) % 7 == 0) {
            console.log();
        }

    }
    console.log("\n\n");

} calender();