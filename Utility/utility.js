/******************************************************************************
 *  Execution       : Default node         cmd> node fileName.js                 
 *  Purpose         : TO deploy all the business logic.
 * 
 *  @description
 * 
 *  @file           : utility.js
 *  @overview       : All the business logic are coded here.
 *  @module         : read-line modules are installed
 *  @author         : PRASHANTH S   <prashanth.murthy007@gmail.com>
 *  @version        : 1.0.
 *  @since          : 24/01/2019
********************************************************************************/


/*
*@purpose       :to accept user input values
*@description   :invoke this whenever we want to take input from user
*/
var readline = require('readline-sync');

module.exports = {

    //Functional Program
    /******************************************StringReplace************************************************************
    *@Purpose     :​Replacing <<username>> with the user input.Print the String with User Name.
    *@description :Ensure UserName has min 3 characters and should contains only alphabet.Print the String with User Name
    *@function    :String replace function takes the user input and replaces.
    * 
    */
    StringReplace(username) {
        try {
            var format = /a-zA-Z/;
            var input = "Hello <<UserName>> , How are you?";
            var output = input.replace(/<<UserName>>/g, username);
            if (username.length >= 3 && form.test(username)) {
                console.log(output);
            }
            else {
                console.log("name should contains  3 or more character and should not begin with number");
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },

    /********************************************************FlipCoin*********************************************************
    *@Purpose     :By using random function flip the coin. accept user input to flip number of times to flip coin and print the percentage of head vs tails
    *@description :Declaring a function and passing the userinput for fliping the coin no of times
    *@function    :coinflip takes the no of times to flip coin and print the percentage of head and tail
    *
    */
    FlipCoin(times) {
        try {
            var head = 0;
            var tail = 0;
            if (times > 0 && !isNaN(times)) {
                for (let i = 1; i < times; i++) {

                    if (Math.random() < 0.5) {
                        tail++;
                    }
                    else {
                        head++;
                    }
                }
                var percentofhead = head * 100 / times;
                var percentoftail = 100.0 - percentofhead;
                console.log(percentofhead + "%");
                console.log(percentoftail + "%");
            }
            else {
                console.log("enter only positive number");
            }
        } catch (err) {
            console.log(err.message);
        }
    },

    /*******************************************************Leap Year***************************************************
    *@Purpose     :To find whether the give year is leap year or not.
    *@description : Declaring a function and passing the four digit number from  user input.              
    *@function: function checks length of the given number, if length equals to 4, then it prints given number is Leap year or not
    *
    */
    LeapYear(year) {
        try {
            if (year % 100 == 0 || year % 400 == 0 || year % 4 == 0 && year > 0) {
                console.log("is leap year");
            }
            else {
                console.log("not a leap year");
            }
        } catch (err) {
            console.log(err.message);

        }
    },

    /*****************************************************Power Of 2**********************************************************
    *@purpose : To Accept value of "N" from user and prints a table of the powers of 2 that are less than or equal to 2^N. value of N should be less then 31.
    *@description : Prints the value of two's power .      
    *@function: function checks the given number is less then 31, if less then 31, then it prints the value of two's power i.e., 2^N value.
    */
    PowerMeth() {
        try {
            var num = process.argv[2];
            var n = 0;
            if (num >= 0 && num < 31) {
                if (num == 0) {
                    console.log(1);
                }
                for (let i = 1; i <= num; i++) {
                    n = Math.pow(2, i);
                    console.log(n);

                }

            }
            else {
                console.log("enter the number ranging between 0 to 31");
            }
        } catch (err) {
            console.log(err.message);

        }

    },

    /***************************************************Harmonic Number***************************************************
    *@purpose : To generate Harmonic numbers.
    *@description : To generate sum of harmonic numbers by accepting input from user.             
    *@function: function Harmonic func takes user input and sum it number of times that user given.
    */
    HarmonicFunc(num) {
        try {
            var sum = 0;
            if (num != 0) {
                for (let i = 1; i <= num; i++) {
                    sum += (1.0 / i);

                }
                console.log(sum);
            }
            else {
                console.log("number should be greater than 0");
            }
        } catch (err) {
            console.log(err.message);
        }
    },


    /*******************************************************Prime Factor ***************************************************
    *@Purpose     :To find the prime factor of the given number.
    *@description :Computes the prime factorization of N using brute force.
    *@function    :function PrimeFactor takes num as parameter for which prime factor should be find.
    */
    PrimeFactor(num) {
        try {
            for (let i = 2; i * i < num; i++) {
                while (num % i == 0) {
                    console.log(i)
                    num = num / i;
                }
            }
            if (num > 2) {
                console.log(num);
            }
        }
        catch (err) {
            console.log(err.message);

        }
    },

    /***************************************************Gambler*******************************************
    *@Purpose     :To print the number of win,win percentage and loss percentage.
    *@description :Simulates a gambler who start with $stake and place fair $1 bets until he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of
                        times he/she wins and the number of bets he/she makes. Run the experiment N times, averages the results, and prints them out.
    *@function    :function gambler takes stake and goal as input.If random number is >0.5 it increments win 
                        and stake else it increment loss and decrement stake.
    */
    Gambler(stake, goal) {
        try {
            if (stake > 0 && isNaN(stake) && isNaN(goal))
                var win = 0;
            var lose = 0;
            var numtimes = 0;
            while (stake > 0 && stake < goal) {
                if (Math.random() < 0.5) {
                    lose++;
                    stake--;

                }
                else {
                    win++;
                    stake++;
                }
                numtimes++;
            }


            var winp = (win * 100.0) / numtimes;
            var losep = 100.0 - winp;
            console.log("win percentage = " + winp);
            console.log("lose percentage = " + losep);
            console.log("number of times she/he bids: " + numtimes);
            console.log("number of wins: " + win);
        }
        catch (err) {
            console.log(err.message);
        }
    },





    /***************************************************Coupen****************************************
    * @Purpose     :
    * @description :
    */


    CoupenNumber(num) {
        var samp = 0;
        let set = new Set();
        count = 0;

        for (let i = 0; i < num; i++) {
            samp = Math.floor(Math.random() * 100);
            count++;
            set.add(samp);

        }

        console.log(set);
        console.log(count);


    },


    /*************************************************Distance********************************************************** 
    *@Purpose     :to print the Euclidean distance from the point (x, y) to the origin (0, 0).
    *@description :takes two integer command-line arguments x and y.The formulae to calculate distance = sqrt(x*x + y*y).
    *@function    :distance function takes input from comment line argument and calculates euclidean distance
                        using Math.sqrt.
    */

    Distance() {
        var a = process.argv[2];
        var b = process.argv[3];

        var dis = Math.sqrt(a * a + b * b);
        console.log("the euclidean distance from (x,y) : " + dis);


    }



}