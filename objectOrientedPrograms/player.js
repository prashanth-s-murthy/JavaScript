var access=require('../Utility/utility')
class Player{
    constructor(cards)
    {
        this.cards=cards;
    }
    sortCards()
    {
        var sort=[];
        sort=access.bubbleSortString(this.cards);
        return sort;
    }
}
module.exports={Player}