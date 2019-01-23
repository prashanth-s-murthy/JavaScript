module.exports = {
    StringReplace(username) 
    {
        var input = "Hello <<UserName>> , How are you?";
        var output = input.replace(/<<UserName>>/g, username);
        if(username.length>=3 && isNaN(username))
        {
        console.log(output);
        }
        else{
            console.log("name should contains  3 or more character and should not begin with number");
        }
       
    },

   




}