var access=require('../Utility/utility')
var access1=require('../Utility/utilityDataStructure')
var readline = require('readline-sync');
var array=access.fileRead();
console.log(array);
var linkedlist=new access1.LinkedList;
for(let i=0;i<array.length;i++)
{
    linkedlist.add(array[i]);
}
var contents=linkedlist.printList();
console.log(contents);
var word=readline.question("enter the word to delete");
var result=linkedlist.search(word);
console.log(result);

if(result===true)
{
   linkedlist.removeElement(word);
   var output=linkedlist.printList();
   access.fileWrite('input.txt',output);
   console.log(output);
  
}
else{
    console.log("else");
    
    linkedlist.add(word);
    var output1=linkedlist.printList();
    access.fileWrite('input.txt',output1);
    console.log(output1);
    
}


