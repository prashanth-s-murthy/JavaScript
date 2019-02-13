/**
 * creating stock class.
 */
class stock {
    constructor(stockName, numberOfShare, sharePrice) {
        this.stockName = stockName;
        this.numberOfShare = numberOfShare;
        this.sharePrice = sharePrice;
    }
    /**
     * prints the total number of stocks.
     */
    printValueOfStocks() {
        return (this.numberOfShare * this.sharePrice);
    }

}
module.exports = { stock }