var Access=require('../Utility/utility')
var read=require('readline-sync');
var s1=read.question("enter the string1 : ");
var s2=read.question("enter the string2 : ");
Access.isAnagram(s1,s2);