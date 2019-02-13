/**
 * creating the player class.
 */
class Player {
  constructor(cards) {
    this.cards = cards;
  }
  /**
   * Function to sort the cards.
   */
  sortCard() {
    var sortCard = [];
    var access = require("../Utility/utility");
    sortCard = access.bubbleSortString(this.cards);
    return sortCard;
  }
}
module.exports = { Player };