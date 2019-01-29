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
    /**
     * @Purpose :to accept size and array element from user.
     */
    inputArr() {
        var arr = [];
        var size = read.question("enter the size of the array: ");
        for (let i = 0; i < size; i++) {
            arr[i] = read.question("enter the array element: ");
        }
        return arr;
    },
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
                    return totaltime;
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

    twoD(row, col) {
        try {

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





    /* Algorithm *******************************************************************************************/
    /*****************************************Anagram***************************************************** */


    isAnagram(word1, word2) {
        try {
            var format = /[a-zA-Z0-9]/;
            var result;
            /**
             * Condition to check if the input is only characters or numbers
             */
            if (format.test(word1) && format.test(word2)) {
                /**
                 * Condition to check if the length of the first word is equal to the second word.
                 * If the condition passes, it means they can not be permutations of each other. Store false in the result.
                 */
                if (word1.length !== word2.length) {
                    result = false;
                }
                /**
                 * Split the string into an array,
                 * Sort the array alphabetically,
                 * Join the elements of an array into a string, and store the sorted string in a variable
                 */
                var sortWord1 = word1.toString().split("").sort().join("");
                var sortWord2 = word2.toString().split("").sort().join("");
                /**
                 * If sortWord1 string is equal to sortWord2, stores true in result, else stores false in result.
                 */
                result = sortWord1 === sortWord2;
                /**
                 * condition to check the result is true and to print if the given words are aragrams or not.
                 */
                if (result == true) {
                    return true;
                } else {
                    return false;
                }
            } else {
                console.log("Enter only letters or alphabets");
            }
        } catch (error) {
            console.log(error.message);
        }
    },

    /*********************************************Prime number*************************************************
     * @Purpose     :To find the prime number betwen 0 tp 1000.
     * @description :Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
     * @function    :primenumber takes range as input and find the prime number between the range.
    */
    primenumber() {
        try {
            /**
             * initial varible to zero.
             */
            i = 0;
            num = 0;
            //Empty array.
            arr = [];

            for (i = 1; i <= 1000; i++) {
                count = 0;
                /**
                 * for loop to find whether the number is prime or not.
                 */
                for (num = i; num >= 1; num--) {
                    if (i % num == 0) {
                        count = count + 1;
                    }
                }
                /**
                 * if count equal to 2 then it is prime number.
                 */
                if (count == 2) {
                    /*
                    * add the Prime number to the array
                    */
                    arr = i;
                    console.log(arr);
                }
            } return arr;
        }
        catch (err) {
            console.log(err.message);
        }
    },



    isPrime(num) {
        try {
            if (num == 0 || num == 1) {
                return false;
            }
            for (let i = 2; i < num; i++) {
                if (num % i == 0)
                    return false;
            }
            return true;
        } catch (err) {
            console.log(err.message);

        }

    },

    isNumberPalindrome(num1) {
        var str = "";
        num1 = num1 + "";
        for (let i = 0; i < num1.length; i++) {
            str = num1.charAt(i) + str;
        }
        if (str == num1) {
            return true;
        }
        return false;
    },

    isAnagramPalindrome() {
        try {
            console.log(
                "Prime numbers in the range 0 to 1000 which are anagram and palindrome: "
            ); {
                var arr = [];
                /**
                 * Loop from 0 till 1000 and chwck if the number is prime.
                 * If the number is prime, push it to the array.
                 */
                for (let i = 0; i < 1000; i++) {
                    if (this.isPrime(i)) {
                        arr.push(i);
                    }
                }
                /**
                 * Loop continuously from 1st element and second element, second element to third element and so on..
                 * Invoke isAnagram and isPalindrome function and pass the 2 elements.
                 * Print all the elements which are prime, anagram and palindrome.
                 */
                for (let i = 0; i < arr.length; i++) {
                    for (let j = i + 1; j < arr.length; j++) {
                        if (this.isAnagram(arr[i], arr[j])) {
                            console.log(arr[i] + " and " + arr[j] + " are anagram");
                            if (this.isNumberPalindrome(arr[i])) {
                                console.log(arr[i] + " is palindrome");
                            }
                            if (this.isNumberPalindrome(arr[j])) {
                                console.log(arr[j] + " is palindrome");
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    },
    /***************************************************************************************************
     * 
     * @Purpose     :
     * @description :Desc -> Create Utility Class having following static methods
                             1.binarySearch method for integer.
                             2.binarySearch method for String.
                             3.insertionSort method for integer.
                             4.insertionSort method for String.
                             5.bubbleSort method for integer.
                             6.bubbleSort method for String.
     * @function    :
     * 
     */
    /**************************** binarySearch method for integer *************************************/
    binarySearch(arr, x) {
        try {
            var first = 0;
            var last = arr.length - 1;
            /**
             * iterate until first is not greater or equal to last
             */
            while (first <= last) {
                /**
                 * find the middle index
                 */
                var mid = Math.floor((first + last) / 2);
                /**
                 * if element is present at mid, return True
                 */
                if (Number(arr[mid] === x)) return true;
        /**
         * searching the value in array
         */ else if (Number(arr[mid]) < x) first = mid + 1;
                else last = mid - 1;
            }
            return false;
        } catch (err) {
            console.log(err.message);

        }

    },
    /****************************************binary search for string*********************************
     * 
     * 
     * 
     */
    binarySearchString(arr, search) {
        try {
            arr.sort();
            console.log(arr);

            var first = 0;
            var last = arr.length - 1;
            /**
            * Iterate while start not meets stop
            */
            while (first <= last) {
                var mid = Math.floor((first + last) / 2);
                /* If element is present at mid, return True
                */
                if ((arr[mid]) === search)
                    /**
                   * Else look in left or right half accordingly
                   */
                    return true;
                else if ((arr[mid]) < search)
                    first = mid + 1;
                else
                    last = mid - 1;
            }
            return false;



        } catch (error) {
            console.log(error.message);

        }
    },


    /**************************************insertionSort method for String.**************************** */
    insertionSort() {
        var ar = [];
        ar = this.inputArr();
        var n = ar.length;
        for (let j = 1; j < n; j++) {
            var key = ar[j];
            var i = j - 1;
            while ((i > -1) && (ar[i]) > key) {
                ar[i + 1] = ar[i];
                i--;
            }
            ar[i + 1] = key;
        }
        console.log(ar);
    },




    /*******************************************bubbleSort method for integer.***************************** */
    BubbleSort(arr) {
        try {
            /**
             * looping over from first element till length of array.
             */

            for (let i = 0; i < arr.length; i++) {
                /**
                 * looping over adjacent element.
                 */
                for (let j = i + 1; j < arr.length; j++) {
                    /**
                     * compare adjacent element.
                     */
                    if (Number(arr[i]) > Number(arr[j])) {
                        /**
                         * temporary variable to hold the current element.
                         */
                        var temp = arr[i];
                        /**
                         * replace current element with adjacent element.
                         */
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            } console.log(arr);
        }
        catch (err) {
            console.log(err.message);

        }
    },

    /**************************************bubbleSort method for String.************************************ */

    BubbleSort(arr) {
        try {
            /**
             * looping over from first element till length of array.
             */


            for (let i = 0; i < arr.length; i++) {
                /**
                 * looping over adjacent element.
                 */
                for (let j = i + 1; j < arr.length; j++) {
                    /**
                     * compare adjacent element.
                     */
                    if (arr[i] > arr[j]) {
                        /**
                         * temporary variable to hold the current element.
                         */
                        var temp = arr[i];
                        /**
                         * replace current element with adjacent element.
                         */
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            } console.log(arr);
        }
        catch (err) {
            console.log(err.message);

        }
    },

    /*************************************Question to find your number*******************************
     * @description : takes a command-line argument N, asks you to think of a number between 0 and N-1,
                      where N = 2^n, and always guesses the answer with n questions.
     * @purpose     : To find the number using Binary Search method.
     * @function    : Use Binary Search to find the number.Print the intermediary number and the final answer.
     */
    toFindnumber(low, high) {
        try {
            var mid = low + Math.floor((high - low) / 2);
            /**
             * Finds the mid value and math.floor round of the value if the answer is in decimal.
             */
            var k;
            if (low < high) {
                if (low == high - 1) {
                    k = read.question("Is the number " + low + "If Yes press --> Yes " + "  " + " .If No press--> No" + " : ");
                    if (k == 'Yes')
                        return low;
                    if (k == 'No')
                        return high;
                }

                k = read.question("Is the number in the range " + mid + "--" + high + " .If Yes Press -->Yes " + " " + "If No Press--> No" + " : ");

                if (k == 'Yes')
                    mid = this.toFindnumber(mid, high, read)
                if (k == 'No')
                    mid = this.toFindnumber(low, mid - 1, read);
            }
            return mid;

        } catch (error) {
            console.log(error.message);


        }
    },

    /***********************************Bubble sort********************************************
     * @Purpose     :To perform a bubble sort.
     * @description :Reads in integers prints them in sorted order using Bubble Sort
     * @function    :BubbleSort takes unsorted array as input and gives the output as sorted array.
    */

    BubbleSort(arr) {
        try {
            /**
             * looping over from first element till length of array.
             */


            for (let i = 0; i < arr.length; i++) {
                /**
                 * looping over adjacent element.
                 */
                for (let j = i + 1; j < arr.length; j++) {
                    /**
                     * compare adjacent element.
                     */
                    if ((arr[i]) > (arr[j])) {
                        /**
                         * temporary variable to hold the current element.
                         */
                        var temp = arr[i];
                        /**
                         * replace current element with adjacent element.
                         */
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            } console.log(arr);
        }
        catch (err) {
            console.log(err.message);

        }
    },

    /*************************************Temperature conversion******************************************
     * @Purpose     :To convert temperature from fahrenheit to Celsius and viceversa.
     * @deprecated  : given the temperature in fahrenheit as input outputs the temperature in Celsius 
                      or viceversa using the formula.
     * @function    : tempConversion function takes temperature as input and convert it to celcius or fahrenheit.
     */

    tempConversion() {
        try {
            /**
             * initialize variable to 0
             * taking input from user.
             */
            var celcius = 0;
            var fahrenheit = 0;
            var ch = readline.question("enter  1 to convert Celsius to Fahrenheit \nenter  2 to convert Fahrenheit to Celsius: \nenter your choice:");
            /**
             * if choice is 1 then fahrenheit is calculated using the formula fahrenheit = (celcius * 9 / 5) + 32.
             * printing the output.
             */
            if (ch == 1) {
                celcius = readline.question("enter the temperature in Celsius:")
                fahrenheit = (celcius * 9 / 5) + 32;
                console.log("temperature in fahrenheit--->" + fahrenheit + "degree");
            }
            /**
             * if choice is 2 then celcius is calculated using the formula celcius = (fahrenheit - 32) * 5 / 9 .
             * printing the output.
             */
            else if (ch == 2) {
                fahrenheit = readline.question("enter the temperature in Fahrenheit:");
                celcius = (fahrenheit - 32) * 5 / 9;
                console.log("temperature in celcius--->" + celcius + "degree");
            }
            else {
                console.log("enter the valid choice");
            }
        }
        catch (err) {
            console.log(err.message);
        }
    },

    /*****************************************monthlyPayment*************************************** 
     * @Purpose     : To calculate ​ monthlyPayment.
     * @description : Write a Util Static Function to calculate ​ monthlyPayment that reads in three
                      command-line arguments P, Y, and R and calculates the monthly payments you
                      would have to make over Y years to pay off a P principal loan amount at R per cent
                      interest compounded monthly.
     * @function    : monthlyPayment function takes three command line argument and it calculates the 
                      monthly payment.
    */


    monthlyPayment() {
        try {
            /**
             * variable P(principal loan), Y(years), R(interest) takes input through command line argument.
             */
            var principal_loan = process.argv[2];
            var years = process.argv[3];
            var r_interest = process.argv[4];
            var n = 12 * years;
            var r = r_interest / (12 * 100);
            var payment = 0;
            /**
             * finding payment using the formula payment=(P*r)/(1-Math.pow((1+r),-n));
             */
            payment = (principal_loan * r) / (1 - Math.pow((1 + r), -n));
            console.log("monthly payment=--->" + payment);
        } catch (err) {
            console.log(err.message);
        }
    },
    /***************************************insertion sort************************************ 
     * @Purpose     : To sort the string using insertion sort method.
     * @description : Reads in strings from standard input and prints them in sorted order.
                      Uses insertion sort.
     * @function    : insertion sort function to sort the string.
    */


    insertionSort() {
        try {
            var ar = [];
            ar = this.inputArr();
            var n = ar.length;
            for (let j = 1; j < n; j++) {
                var key = ar[j];
                var i = j - 1;
                while ((i > -1) && (Number(ar[i]) > key)) {
                    ar[i + 1] = ar[i];
                    i--;
                }
                ar[i + 1] = key;
            }
            console.log(ar);
        } catch (err) {
            console.log(err.message);
        }

    },

    /*********************************************​ dayOfWeek*******************************************
     * @Purpose     :To print the day of week that falls on.
     * @description :To the Util Class add ​ dayOfWeek static function that takes a date as input and
                     prints the day of the week that date falls on. Your program should take three
                     command-line arguments: m (month), d (day), and y (year). For m use 1 for January,
                     2 for February, and so forth. For output print 0 for Sunday, 1 for Monday, 2 for
                     Tuesday, and so forth.   
     * @function    :takes date, month, year from command line argument and by using the formula 
                     it calculates the day.
     */

    dayOfWeek() {
        try {
            var date = Number(process.argv[2]);
            var month = Number(process.argv[3]);
            var year = Number(process.argv[4]);
            /**
            * condition to check date, month,year should be number and should lie range between
            */
            if (!isNaN(date, month, year) && ((date > 0 && date < 32) && (month > 0 && month < 13) && (year > 999 && year < 10000))) {
                var y0 = year - Math.floor((14 - month) / 12);
                var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400);
                var m0 = month + 12 * Math.floor((14 - month) / 12) - 2;
                var d0 = (date + x + Math.floor((31 * m0) / 12)) % 7;
                /**
                 * 
                 * based on the d0 corresponding output is printed.
                 */
                switch (d0) {
                    case 0:
                        return "Sunday";
                    case 1:
                        return "Monday";
                    case 2:
                        return "Tuesday";
                    case 3:
                        return "Wednesday";
                    case 4:
                        return "Thursday";
                    case 5:
                        return "Friday";
                    case 6:
                        return "Saturday";
                }
            } else {
                return "Please enter the valid date month year";
            }
        } catch (error) {
            console.log(error.message);
        }
    },

    /*************************************************Square root*****************************************
     *@Purpose      : function ​ sqrt t ​ o compute the square root of a nonnegative number.
     *@description  : Write a static function ​ sqrt t ​ o compute the square root of a nonnegative number c
                      given in the input using Newton's method:
     *@function     : findSquareRoot takes input from user and calculates the square root of non negative 
                      number using Newton method.
    */

    findSquareRoot() {
        try {
            /**
             * taking input from user.
             * using newtons method.
             */
            var c = readline.question("enter the number greater than 0 : ");
            var temp = c;
            var epsilon = 1e-15;
            /**
             * condition checks the number is greater than zero and is number.
             */
            if (c > 0 && !isNaN(c)) {
                while (Math.abs(temp - c / temp) > epsilon * temp) {
                    temp = (c / temp + temp) / 2;
                }
                console.log("square root of " + c + " is " + temp);
            }
            else {
                console.log("enter the number greater then 0");
            }
        } catch (err) {
            console.log(err.message);

        }
    },

    /**************************Binary Search the Word from Word Lis**************************************
     * @purpose     :
     * @description : Desc -> Read in a list of words from File. Then prompt the user to enter a word to
                      search the list. The program reports if the search word is found in the list.
     * @function    : search word takes value to be searched in the array if the value is found it returns 
                      true or false.
     * 
    */
    searchWord() {
        arr = [];
        /**
         * taking the input value to be searched in the array.
         */
        var search = readline.question("enter the word to search: ");
        const fs = require('fs')
        /**
         * readFile takes the file name.
         * if the file exist then it returns the data else throws error.
         */
        fs.readFile('input.txt', (err, data) => {
            if (err) throw err;
            arr = data.toString().split(",");
            console.log(this.binarySearchString(arr, search));
        })
    },
    /*****************************************MergeSort******************************************* 
     * 
     * 
     * 
    */



    /************************************* toBinaryConversion************************************* 
     * @purpose     : To convert the given number to binary format.
     * @description : Write a static function ​ toBinary that outputs the binary (base 2) representation of
                      the decimal number typed as the input. It is based on decomposing the number into
                      a sum of powers of 2.
     * @function    : toBinaryConversion takes the user input and the input is converted to binary format. 
    */

    toBinaryConversion() {
        try {
            /**
             * taking input from user.
             */
            var num = readline.question("enter the number:");
            var s = "";
            /**
             * looping over the number until the reminder becomes 1 or greater than 1.
             */
            while (num >= 1) {
                var formula = Math.floor(num % 2);
                s = formula + s;
                num = num / 2;
            }
            console.log("binary form of number is = " + s);

        } catch (err) {
            console.log(err.message);

        }
    },
    /********************************************vendingMachine()************************************ 
    *@purpose       : to calculate the minimum number of Notes as well as the Notes to be 
                      returned by the Vending Machine as a Change.
    *@description   : here is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be
                      returned by Vending Machine. Write a Program to calculate the minimum number
                      of Notes as well as the Notes to be returned by the Vending Machine as a
                      Change
    *@function      : vendingMachine takes the amount as input and calculates the number of notes.
    */
    vendingMachine() {
        try {
            var amount = readline.question("enter the amount: ");
            var arr = [1000, 500, 100, 50, 5, 2, 1];
            var notes = 0;

            for (i = 0; i < arr.length; i++) {
                if (amount / arr[i] >= 1) {
                    var c = Math.floor(amount / arr[i]);
                    notes = notes + c;
                    console.log(arr[i] + " notes are: " + c);
                    amount = amount % arr[i];
                }
            }
            console.log("total number of nodes :" + notes);
        } catch (err) {
            console.log(err.message);


        }
    },
}