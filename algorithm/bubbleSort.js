var access=require('../Utility/utility')
var read=require('readline-sync');
try{
    var arr=[];
    var size=read.question("enter the size of the array: ");
    for(let i=0;i<size;i++)
    {
        arr[i]=read.question("enter the array element: ");
    }
    access.BubbleSortInt(arr);
}catch(err)
{
    console.log(err.message);
}