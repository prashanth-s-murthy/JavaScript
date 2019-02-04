/***********************************************************
 * Execution      : Default node    cmd>node binaryTree.js
 * Purpose        : For each test case, find the number of different binary search trees that can 
                    be created using these nodes. Print the answer modulo (108+7).
 *@description 
 * 
 *
 *@file          : binaryTree.js
 *@overview      : First line will contain an integer, T, number of test cases. Then T lines follow, 
                   where each line represent a test case. Each test case consists a single integer,
                   N, where N is the number of nodes in the binary search tree.
 *@author name   : Prashanth S <prashanth.murthy007@gmail.com@gmail.com>
 *@version       : 1.0
 *@since         : 04/02/2019
 * 
 ***********************************************************/
/*
For accessing data from utility file and utilityDataStructure
*/
var access1 = require('../Utility/utilityDataStructure')
/**
 * to read the input from the user.
 */
var readline = require('readline-sync');
/**
 * taking the input from the user.
 */
var number = readline.questionInt("Enter the number :")
/**
 * formula to calculate the factorial.
 */
var factorial = access1.binaryTree(number)
var factorial1 = access1.binaryTree(number * 2);
var factorial2 = access1.binaryTree(number + 1)
var output = (factorial1) / (factorial2 * factorial)
console.log(output);