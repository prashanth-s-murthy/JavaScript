/**************************************************************************
 * Execution       : Default node             cmd> node Gamblings.js
 * Purpose         : To replace String Template “Hello <<UserName>>, How are you?” with proper username
 * 
 * @description
 * 
 * @file            : Gamblings.js
 * @overview        : By using math.random function, print the number of wins, 
 *                    number of bets he/she makes and percentage of win and loss.
 * @module          : read-line modules are installed
 * @author          : PRASHANTH S   <prashanth.murthy007@gmail.com>
 * @version         : 1.0.  
 * @since           : 24/01/2019
 ***************************************************************************/
var Access=require('../Utility/utility')
var read=require('readline-sync');
var stake=read.question("enter the stake: ");
var goal=read.question("enter the goal: ");
Access.Gambler(stake,goal);