var readline = require('readline-sync');
var access=require('../Utility/utilityDataStructure')
module.exports = {
    inventory(data) {
        var rice = data.rice;
        var wheat = data.wheat;
        var pulses = data.pulses;
        var i = 0;
        var valueOfRice = 0;
        var valueOfWheat = 0;
        var valueOfPulses = 0;

        for (let key in rice) {
            var num = rice[key].weight * rice[key].price;
            console.log("cost of " + rice[i].name + " is :" + num + "Rs");
            i++;
            valueOfRice = valueOfRice + num;
        } i = 0
        console.log("total cost of rice: " + valueOfRice + "Rs");
        console.log();

        for (let key in wheat) {
            var num = wheat[key].weight * wheat[key].price;
            console.log("cost of " + wheat[i].name + " is :" + num + "Rs");
            i++;
            valueOfWheat = valueOfWheat + num;
        } i = 0;
        console.log("total cost of wheat: " + valueOfWheat + "Rs");
        console.log();

        for (let key in pulses) {
            var num = pulses[key].weight * pulses[key].price;
            console.log("cost of " + pulses[i].name + " is :" + num + "Rs");
            i++;
            valueOfPulses = valueOfPulses + num;
        }
        console.log("total cost of pulses :" + valueOfPulses + "Rs");

    },

    /**************************************************************************************************** */


    regularExpression(name, fullName, contactNumber) {
        var format = /[a-zA-Z]/;
        while (!format.test(name) || !format.test(fullName)) {
            name = readline.question('enter the name alphabets : ');
            fullName = readline.question('enter the full name only alphabets: ');
        }
        while (isNaN(contactNumber) || contactNumber.length != 10) {
            contactNumber = readline.question('enter the valid contact number : ');
        }
        var fileRead = require('fs');
        var content = fileRead.readFileSync('regexToReplace.txt', 'utf8');
        var date = new Date();
        date = date.toLocaleDateString();



        content = content.replace(/<<name>>/g, name);
        content = content.replace(/<<full name>>/g, fullName);
        content = content.replace(/xxxxxxxxxx/g, contactNumber);
        content = content.replace(/xx-xx-xxxx/g, date);


        console.log(content);

    },
    /************************************************************************************************* */
    deckOfCards() {
        var suit = ["♣", "♦", "♥", "♠"];
        var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        var cards = suit.length * rank.length;
        var cardarray = [];
        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < rank.length; j++) {
                var temp = "";
                temp = temp + suit[i] + rank[j];
                cardarray.push(temp);
            }
        }
        for (let i = 0; i < cards; i++) {
            var number = Math.floor(Math.random() * cards);
            var temp = cardarray[i];
            cardarray[i] = cardarray[number];
            cardarray[number] = temp;
        }
        var array = [[], [], [], []];
        var a = 0;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 9; j++) {
                array[i][j] = cardarray[j + a]
            }
            a = a + 9;
        }
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);

        }
    },
/* **************************************************************************************************** */
    deckOfCardsQueue()
    {
        var suit = ["♣", "♦", "♥", "♠"];
        var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        var cards = suit.length * rank.length;
        var cardarray = [];
        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < rank.length; j++) {
                var temp = "";
                temp = temp + suit[i] + rank[j];
                cardarray.push(temp);
            }
        }
        for (let i = 0; i < cards; i++) {
            var number = Math.floor(Math.random() * cards);
            var temp = cardarray[i];
            cardarray[i] = cardarray[number];
            cardarray[number] = temp;
        }
        var array = [[], [], [], []];
        var a = 0;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 9; j++) {
                array[i][j] = cardarray[j + a]
            }
        }
        var player1=new access.LinkListQueue;
        var player2=new access.LinkListQueue;
        var player3=new access.LinkListQueue;
        var player4=new access.LinkListQueue;

        for(let i=0;i<cardarray.length;i++)
        {
            if(i>=0 && i<13)
            player1.enQueue(cardarray[i]);
            else if(i>=13 && i<26)
            player2.enQueue(cardarray[i]);
            else if(i>=26 && i<39)
            player3.enQueue(cardarray[i]);
            else
            player4.enQueue(cardarray[i]);
        }
        var data=player1.print();
        var array1=data.split(" ").sort();
        console.log(array1);
        var data=player2.print();
        var array2=data.split(" ").sort();
        console.log(array2);
        var data=player3.print();
        var array3=data.split(" ").sort();
        console.log(array3);
        var data=player4.print();
        var array4=data.split(" ").sort();
        console.log(array4);
        
    }

}