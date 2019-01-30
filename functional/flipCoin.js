/**************************************************************************
 * Execution       : Default node             cmd> node flipCoin.js
 * Purpose         : By using random function flip the coin. accept user input to flip number of times to flip coin
                     and print the percentage of head vs tails.
 * 
 * @description
 * 
 * @file            : flipCoin.js
 * @overview        : To flip a coin n number of times, randomly generate a number and print percentage of heads and tails.
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 24/01/2019
 ***************************************************************************/
var access=require('../Utility/utility')
var read=require('readline-sync');
var times=read.question("enter the no of time coin flips: ");
access.flipCoin(times)