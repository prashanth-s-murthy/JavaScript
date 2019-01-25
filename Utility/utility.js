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

var read = require('readline-sync');
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
            /**
             *  specify the format in which user has to provid input.
             */
            var format = /a-zA-Z/;
            var input = "Hello <<UserName>> , How are you?";
            /**
             * replaces the <<username>> with the user input.
             */
            var output = input.replace(/<<UserName>>/g, username);
            /**
             * conditiont to check whether the give input is in correct form.
             */
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
            /**
             * initialize the variables to zero.
             */
            var head = 0;
            var tail = 0;
            /**
             * condition to check whether the given number is positive or not and it is not a alphabet.
             * for loop to generate the random number until it is less than numbre of times.
             */
            if (times > 0 && !isNaN(times)) {
                for (let i = 1; i < times; i++) {
                    /**
                     * if conditon to check math.random is less than 0.5
                     * if it is less than 0.5 increment tail. 
                     */
                    if (Math.random() < 0.5) {
                        tail++;
                    }
                    /**
                     * if it is more than 0.5 increment head.
                     */
                    else {
                        head++;
                    }
                }
                /**
                 * calculate the percentage of head.
                 * calculate the percentage of tail.
                 * print the percentage of head and tail.
                 */
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
            /**
             * condition to check whether the user defined year is leap year or not.
             * if it is leap year print then it display "is leap year" else display "not a leap yaer".
             */
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
            /**
             * accept input from user through command line arguments.
             * initialize variable to zero.
             */
            var num = process.argv[2];
            var n = 0;
            /**
             * condition to check the number should be greater than zero and less than 31.
             * condition if number is zero then print 1.
             */
            if (num >= 0 && num < 31) {
                if (num == 0) {
                    console.log(1);
                }
                /**
                 * for loop to find the power of number until it is equal to user input.
                 * print the power of that number.
                 */
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
            /**
             * initialize the variable to 0.
             * if condition to check whether the number is not equal to zero.
             */
            var sum = 0;
            if (num != 0) {
                /**
                 * for loop to find the sum of harmonic number until number equal to user input.
                 * print the sum.
                 */
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
            /**
             * for loop to check whether the number is prime or not.
             * 
             */
            for (let i = 2; i * i < num; i++) {
                while (num % i == 0) {
                    console.log(i)
                    num = num / i;
                }
            }
            /**
             * if the quotent is greater than 2 then the if condition is excuted and the number is printed
             */
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
            /**
             * condition to check the stake should be greater then 0 and not a alphabet
             */
            if (stake > 0 && isNaN(stake) && isNaN(goal))
                /**
                 * initilaize variables to 0.
                 */
                var win = 0;
            var lose = 0;
            var numtimes = 0;
            /**
             * condition to check stake should be grater than zero and stake should be less than goal.
             */
            while (stake > 0 && stake < goal) {
                /**
                 * use math.random to find the win or lose.
                 * if it is less than 0.5 then decrement stake and increment lose.
                 */
                if (Math.random() < 0.5) {
                    lose++;
                    stake--;

                }
                /**
                 * if Math.random is greater than 0.5 then increment win and stake.
                 */
                else {
                    win++;
                    stake++;
                }
                /**
                 * increment numtime to know how many matches they played.
                 */
                numtimes++;
            }

            /**
             * calculating the win percentage,lose percentage
             * printing the win percentage,lose percentage,number of bid and number of wins.
             */
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
    * @Purpose     : To choose a random number and check whether it's a new one.
    * @description : Given N distinct Coupon Numbers, how many random numbers do you need to generate
                     distinct coupon number? This program simulates this random process.
    * @function    : Function CoupenNumber takes num as user input and 
    */


    CoupenNumber(num) {
        /*
        * taking an empty array.
        * initialize variable to 0.
        */
        var arr = [];
        var num1 = 0;
        /**
         * Loop over the num1 until it becomes equal to num.
         * Use Math.random to generate random number and if it is unique the push it to arr and
         * increment num1 .
         */
        while (num1 != num) {
            var i = Math.round(Math.random() * num);
            if (!arr.includes(i)) {
                arr.push(i);
                num1++;
            }
        }
        /**
         * Print the array with distinct coupnes.
         */
        console.log(arr);

    },


    /*************************************************Distance********************************************************** 
    *@Purpose     :to print the Euclidean distance from the point (x, y) to the origin (0, 0).
    *@description :takes two integer command-line arguments x and y.The formulae to calculate distance = sqrt(x*x + y*y).
    *@function    :distance function takes input from comment line argument and calculates euclidean distance
                        using Math.sqrt.
    */

    Distance() {
        /* 
        taking inputs from comment line arguments. 
        */
        var a = process.argv[2];
        var b = process.argv[3];
        /* 
        using Math.sqrt to calculat the euclidean distance 
        */
        var dis = Math.sqrt(a * a + b * b);
        console.log("the euclidean distance from (x,y) : " + dis);


    },

    /*************************************************Stopwatch************************************************ 
    * @Purpose     :To measure the elapsed time between start and end .Print the elapsed time.
    * @description :Stopwatch Program for measuring the time that elapses between the start and end clicks.
    * @function    :ReadTime function takes the start time and stop time to calculate the time interval.
    */


    StopWatch() {
        try {
            /*
            create date object to get the seconds by using getSeconds() function 
            */
            var date = new Date();
            /* 
            getSeconds returns the current second
            */
            n = date.getSeconds();
            return n;
        } catch (err) {
            console.log(err.message);
        }

    },

    ReadTime() {
        try {
            var starttime;
            var stoptime;
            /* 
            starttime accepts input from the user to start the stopwatch 
            */
            starttime = readline.question("press 0 to start ");
            {
                /* 
                start call the StopWatch function and it starts counting time until it is stoped  
                */
                var start = this.StopWatch();
                /* 
                stop accepts input from the user to stop the stopwatch
                */
                var stoptime = readline.question("press 1 to stop ");
                {
                    var stop = this.StopWatch();
                    /* 
                    subtract the start time by stop to get the time interval
                    */
                    var totaltime = stop - start;
                    /* 
                    prints the time interval 
                    */
                    console.log(totaltime);
                }
            }

        } catch (err) {
            console.log(err.message);
        }
    },


    /*****************************************WindChill****************************************************
     *@Purpose      : To calculate windchill .
     *@description  : WindChill that takes two double command-line arguments tand v and prints the 
                      wind chill. Use Math.pow(a, b) to compute ab.Given the temperature t (in Fahrenheit) 
                      and the wind speed v (in miles per hour),the National Weather Service 
                      defines the effective temperature (the wind chill).
     *@function     : WindChill function takes two comment line arguments i.e. temperature and speed 
                      and calculates the windchill using Math.pow
    
    */

    WindChill() {
        try {
            var w;
            /*
             var temp and speed take inpurt from comment line arguments 
            */
            var temp = Math.abs(process.argv[2]);
            var speed = process.argv[3];
            /*
             condition to whether the temp is less than 50, speed is less than 120 and greater than 3
             and is only a number.
            */
            if ((temp < 50 && (speed < 120 && speed > 3)) && (!isNaN(temp) || !isNaN(speed))) {
                w = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * Math.pow(speed, 0.16)
                console.log(w);
            }
            else {
                console.log("enter the valid temperature and speed");
            }
        } catch (err) {
            console.log(err.message);
        }

    },

    /*****************************************Triplets**********************************************
     * @Purpose     : To show number of distinct triplets as well as the second output is to
                      print the distinct triplets.
     * @description : A program with cubic running time. Read in N integers and counts the
                      number of triples that sum to exactly 0.  
     * @function    : triplets function takes array size and array elements and calculates the number of
                      triplets that sum has exactly 0 and display the count.                    
     */

    triplets() {
        try {
            /**
             * Initialize count variable to zero 
             */
            var count = 0;
            /**
             * Set the flag variable to true initially
             */
            var flag = true;
            /**
             * Ask user enter the size of the array.
             */
            var size = readline.question("Enter the size of array: ")
            /**
             * Initialize empty array
             */
            var arr = []
            /**
             * Loop from 0 to user defined size and add the elements to an array.
             */

            for (let x = 0; x < size; x++) {
                arr[x] = readline.question("Enter element " + (x) + ":")
            }
            /**
             * Printing array elements.
             */
            console.log("Given array is: " + arr);
            /**
             * Loop to check the sum of three distinct numbers in array results to zero
             */
            for (let i = 0; i < size - 2; i++) {
                for (let j = i + 1; j < size - 1; j++) {
                    for (let k = j + 1; k < size; k++) {
                        /**
                         * Condition to check sum of 3 integers is 0 and prints the distinct triplets.
                         */
                        if (Number(arr[i]) + Number(arr[j]) + Number(arr[k]) == 0) {
                            console.log("Distinct triplets are: " + arr[i] + " " + arr[j] + " " + arr[k]);
                            count++;
                            flag = false;
                        }
                    }
                }

            }
            /**
             * Print the number of distinct triplets
             */
            console.log("Number of distinct triplets: " + count);
            /**
             * If there are no distinct triplets, flag will be true.
             */
            if (flag == true) {
                console.log("Triplets does not exist");
            }

        } catch (error) {
            console.log(error.message)
        }
    },
    /*****************************************Quadratic equation****************************************************** 
     * @Purpose     : Program to find the Quadratic equation
     * @description : program to find the roots of the equation a*x*x + b*x + c. Since the equation is 
                      x*x, hence there are 2 roots. The 2 roots of the equation can be found using a 
                      formula :delta = b*b - 4*a*c
                      Root 1 of x = (-b + sqrt(delta))/(2*a)
                      Root 2 of x = (-b - sqrt(delta))/(2*a)
     * @function    : function quadratic take 3 number as input and calculate the real and imaginary .
     * 
    */

    Quadratic() {
        try {
            var a, b, c;
            var root1, root2, d;
            a = readline.question("enter the value of a: ");
            b = readline.question("enter the value of b: ");
            c = readline.question("enter the value of c: ");
            d = b * b - 4 * a * c;
            if (d > 0) {
                console.log("roots are real and unequal");
                root1 = (-b + Math.sqrt(d)) / (2 * a);
                root2 = (-b - Math.sqrt(d)) / (2 * a);
                console.log("root1 = " + root1);
                console.log("root2 = " + root2);
            }
            else if (d == 0) {
                console.log("roots are real and equal");
                root1 = (-b + Math.sqrt(d)) / (2 * a);
                console.log("root1 = " + root1);
            }
            else {
                console.log("roots are imaginary");
            }
        } catch (err) {
            console.log(err.message);

        }

    },
    /********************************************2D array*****************************************
     * @Purpose     : To display the array element in 2d array.
     * @description : A library for reading in 2D arrays of integers, doubles, or booleans from standard 
                      input and printing them out to standard output
     * @function    : twoD function takes the number of rows,number of columns and add the elements to it.
     */

    twoD() {
        try {
            var row = readline.question("enter the number of rows");
            var col = readline.question("enter the number of columns");
            var arr = [];
            for (let i = 0; i < row; i++) {
                arr.push([]);
                for (let j = 0; j < col; j++) {
                    var addelement = readline.question("enter the input: ")
                    arr[i][j] = addelement;
                }
            }
            console.log(arr);
        } catch (err) {
            console.log(err.message);
        }
    },

}

