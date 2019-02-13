/**************************************************************************
 * Execution        : Default node             cmd> node deckOfCardsQueue.js
 * @file            : deckOfCardsQueue.js
 * @overview        : program to create a Player Object having Deck of Cards, and having 
                      ability to Sort by Rank and maintain the cards in a Queue implemented 
                      using Linked List. Do not use any Collection Library. Further 
                      the Player are also arrange in Queue. Finally Print the Player and 
                      the Cards received by each Player.
 * @author          : PRASHANTH S <prashanth.murthy007@gmail.com>
 * @version         : 1.0.
 * @since           : 12/02/2019
 ***************************************************************************/
var access = require('../Utility/utilityObjectOriantedProg')
var access1 = require('../objectOrientedPrograms/player.js')
var access2 = require('../Utility/utilityDataStructure')
function main() {
    try {
        /**
         * creating deckOfCardsQueue object.
         */
        var totalCard = access.deckOfCardsQueue();
        /**
         * taking 4 empty array
         */
        var player1Card = [];
        var player2Card = [];
        var player3Card = [];
        var player4Card = [];
        /**
         * Loop to distribute 13 cards from the total cards.
         */
        for (let player1 = 0; player1 < 52; player1++) {
            if (player1 >= 0 && player1 < 13) {
                player1Card[player1] = totalCard[player1];
            } else if (player1 >= 13 && player1 < 26) {
                player2Card[player1 - 13] = totalCard[player1];
            } else if (player1 >= 26 && player1 < 39) {
                player3Card[player1 - 26] = totalCard[player1];
            } else {
                player4Card[player1 - 39] = totalCard[player1];
            }
        }
        /**
         * Create 4 player objects by passing 13 cards to each of them.
         */
        player1 = new access1.Player(player1Card);
        player2 = new access1.Player(player2Card);
        player3 = new access1.Player(player3Card);
        player4 = new access1.Player(player4Card);
        /**
         * Invoke sortedCards function to get the sortedcards.
         */
        var sortCard1 = player1.sortCard();
        var sortCard2 = player2.sortCard();
        var sortCard3 = player3.sortCard();
        var sortCard4 = player4.sortCard();
        /**
         * Create a new queue object which implements LinkedList.
         */
        var queue = new access2.LinkListQueue();
        /**
         * Enqueue each set of sortedCards to the queue
         */
        queue.enQueue(sortCard1);
        queue.enQueue(sortCard2);
        queue.enQueue(sortCard3);
        queue.enQueue(sortCard4);
        /**
         * Dequeue the cards and print it to the console.
         */
        console.log();
        console.log("Cards with player 1 :" + queue.deQueue());
        console.log("Cards with player 2 :" + queue.deQueue());
        console.log("Cards with player 3 :" + queue.deQueue());
        console.log("Cards with player 4 :" + queue.deQueue());
        console.log();
    } catch (error) {
        console.log(error.message);
    }
}
main();