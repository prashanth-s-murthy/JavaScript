/**
 * reads the input from user.
 */
var readline = require('readline-sync');
/**
 * access the the utility data structure file.
 */
var access = require('../Utility/utilityDataStructure')
module.exports = {
    /**
     * inventory function take user input as price and quantity and calculate the total cost. 
     * @param {any} data 
     */
    inventory(data) {
        var rice = data.rice;
        var wheat = data.wheat;
        var pulses = data.pulses;
        var i = 0;
        /**
         * initialize variable cost to 0.
         */
        var valueOfRice = 0;
        var valueOfWheat = 0;
        var valueOfPulses = 0;
        /**
         * looping over each element in rice and to calculate the cost of each rice. 
         */
        for (let key in rice) {
            var num = rice[key].weight * rice[key].price;
            console.log("cost of " + rice[i].name + " is :" + num + "Rs");
            i++;
            valueOfRice = valueOfRice + num;
        } i = 0
        console.log("total cost of rice: " + valueOfRice + "Rs");
        console.log();
        /**
         * looping over each element in wheat and to calculate the cost of each rice. 
         */
        for (let key in wheat) {
            var num = wheat[key].weight * wheat[key].price;
            console.log("cost of " + wheat[i].name + " is :" + num + "Rs");
            i++;
            valueOfWheat = valueOfWheat + num;
        } i = 0;
        console.log("total cost of wheat: " + valueOfWheat + "Rs");
        console.log();
        /**
         * looping over each element in pulses and to calculate the cost of each rice. 
         */
        for (let key in pulses) {
            var num = pulses[key].weight * pulses[key].price;
            console.log("cost of " + pulses[i].name + " is :" + num + "Rs");
            i++;
            valueOfPulses = valueOfPulses + num;
        }
        console.log("total cost of pulses :" + valueOfPulses + "Rs");

    },

    /**************************************************************************************************** */

    /**
     * regular expression takes name,full name and number as input and replace it with the 
     * @param {string} name 
     * @param {string} fullName 
     * @param {number} contactNumber 
     */
    regularExpression(name, fullName, contactNumber) {
        try {
            /**
             * format to accept only alphabet.
             */
            var format = /[a-zA-Z]/;
            /**
             * loop to validate the name.
             */
            while (!format.test(name) || !format.test(fullName)) {
                name = readline.question('enter the name alphabets : ');
                fullName = readline.question('enter the full name only alphabets: ');
            }
            /**
             * loop to validate contact number.
             */
            while (isNaN(contactNumber) || contactNumber.length != 10) {
                contactNumber = readline.question('enter the valid contact number : ');
            }
            var fileRead = require('fs');
            /**
             * reading the content from the text file.
             */
            var content = fileRead.readFileSync('regexToReplace.txt', 'utf8');
            var date = new Date();
            date = date.toLocaleDateString();
            /**
             * replacing the  name,full name,contact number and date.
             */
            content = content.replace(/<<name>>/g, name);
            content = content.replace(/<<full name>>/g, fullName);
            content = content.replace(/xxxxxxxxxx/g, contactNumber);
            content = content.replace(/xx-xx-xxxx/g, date);
            console.log(content);
        } catch (err) {
            console.log(err.message);
        }

    },
    /************************************************************************************************* */

    deckOfCards() {
        try {
            var suit = ["♣", "♦", "♥", "♠"];
            var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
            var cards = suit.length * rank.length;
            var cardarray = [];
            /**
             * for loop to calculate the total length and pushing to the array.
             */
            for (let i = 0; i < suit.length; i++) {
                for (let j = 0; j < rank.length; j++) {
                    var temp = "";
                    temp = temp + suit[i] + rank[j];
                    cardarray.push(temp);
                }
            }
            /**
             * loop to shuffle a cards.
             */
            for (let i = 0; i < cards; i++) {
                var number = Math.floor(Math.random() * cards);
                var temp = cardarray[i];
                cardarray[i] = cardarray[number];
                cardarray[number] = temp;
            }
            var array = [[], [], [], []];
            var a = 0;
            /**
             * loop to add cards to the array. 
             */
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 9; j++) {
                    array[i][j] = cardarray[j + a]
                }
                a = a + 9;
            }
            for (let i = 0; i < array.length; i++) {
                console.log(array[i]);
            }
        } catch (err) {
            console.log(err.message);
        }
    },
    /* **************************************************************************************************** */
    deckOfCardsQueue() {
        try {
            var suits = ["♣", "♦", "♥", "♠"];
            var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
            /**
             * To calculate total number of cards
             */
            var totalCards = suits.length * ranks.length;
            /**
             * To create a deck of array
             */
            var cardArray = [];
            for (let currentSuit = 0; currentSuit < suits.length; currentSuit++) {
                for (let currentRank = 0; currentRank < ranks.length; currentRank++) {
                    var temp = "";
                    cardArray.push(temp + ranks[currentRank] + suits[currentSuit]);
                }
            }
            /**
             * To shuffle the deck
             */
            for (let shuffle = 0; shuffle < totalCards; shuffle++) {
                var num = Math.floor(Math.random() * totalCards);
                /**
                 * Performing swapping
                 */
                var temp = cardArray[shuffle];
                cardArray[shuffle] = cardArray[num];
                cardArray[num] = temp;
            }
            return cardArray;
        } catch (error) {
            console.log(error.message);
        }
    },
}