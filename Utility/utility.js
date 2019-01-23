module.exports = {
    StringReplace(username) 
    {
        var input = "Hello <<UserName>> , How are you?";
        var output = input.replace(/<<UserName>>/g, username);
        if(username.length>=3 && isNaN(username))
        {
        console.log(output);
        }
        else
        {
            console.log("name should contains  3 or more character and should not begin with number");
        }   
    },


    LeapYear(year)
    {
        if(year%100==0 || year%400==0 || year%4==0)
        {
            console.log("is leap year");
        }
        else
        {
            console.log("not a leap year");
        }
    }
   




}