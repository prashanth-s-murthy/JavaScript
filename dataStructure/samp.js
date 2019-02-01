var access=require('../Utility/utility')
var access1=require('../Utility/utilityDataStructure')
/*var readline = require('readline-sync');
var array=access.fileRead();
console.log(array);*/
var linkedlist=new access1.LinkedList;
linkedlist.add(1);
linkedlist.add(5);
linkedlist.add(6);
console.log(linkedlist.printList());
linkedlist.sortedInsert(3);