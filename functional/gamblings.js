/**************************************************************************
 * Execution       : Default node             cmd> node gamblings.js
 * Purpose         : To replace String Template “Hello <<UserName>>, How are you?” with proper username
 * 
 * @description
 * 
 * @file            : gamblings.js
 * @overview        : By using math.random function, print the number of wins, 
 *                    number of bets he/she makes and percentage of win and loss.
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 24/01/2019
 ***************************************************************************/
/**
 * for accessing data from the utility file.
 */
var access = require('../Utility/utility')
/**
 * reading inputs from user
 */
var read = require('readline-sync');
/**
 * taking input from user as stake and goal
 */
var stake = read.question("enter the stake: ");
var goal = read.question("enter the goal: ");
/**
 * accessing playGambling function from utility.js
 */
access.playGambling(stake, goal);