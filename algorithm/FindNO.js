var Access = require('../Utility/utility')
var read = require('readline-sync');
var N = process.argv[2];
var low=0;
high=N-1;
var res = Access.toFindnumber(low, high);
console.log("your number is--->" + res);
