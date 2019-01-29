var Access=require('../Utility/utility')
var read=require('readline-sync');
try{
    var arr=[];
    var size=read.question("enter the size of the array: ");
    for(let i=0;i<size;i++)
    {
        arr[i]=read.question("enter the array element: ");
    }
    var x=read.question("enter the element to search");
    var res=Access.binarySearch(arr,x);
    var ress=Access.binarySearchString(arr,x);
    console.log(res);
    console.log(ress);
}catch(err)
{
    console.log(err.message);
}