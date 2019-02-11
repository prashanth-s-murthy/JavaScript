var access=require('../addressBook/addressDetail')
var access1=require('../../Utility/utilityObjectOriantedProg')
var file=require('fs')
var data1=file.readFileSync('AddressBook.json','utf8')
var data=JSON.parse(data1)
var object=new access.AddressBook;
object.address(data)