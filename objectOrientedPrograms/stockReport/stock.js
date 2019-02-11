class stock
{
    constructor(stockName, numberOfShare, sharePrice)
    {
        this.stockName = stockName;
        this.numberOfShare = numberOfShare;
        this.sharePrice = sharePrice;
    }

    printValueOfStocks()
    {
        return (this.numberOfShare * this.sharePrice);
    }

}
module.exports={stock}