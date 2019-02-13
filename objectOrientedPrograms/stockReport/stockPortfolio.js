module.exports = {
    /**
     * report calculation functiom calculates the total stock value.
     */
    reportCalculation() {
        try {
            /**
             * accessing the stock class.
             */
            var access = require('./stock');
            /**
             * reads user input
             */
            var readline = require('readline-sync');
            /**
             * validation to check the number of stock.
             */
            var valid = false;
            do {
                var numberOfStocks = readline.question('enter the number of stocks : ');
                if (isNaN(numberOfStocks)) {
                    console.log('enter only number');
                } else {
                    valid = true;
                }
            } while (!valid)
            var stockValue = 0;
            var totalStockValue = 0;
            /**
             * looping over the stock to calculate the total stock.
             */
            for (let i = 1; i <= numberOfStocks; i++) {
                var stockName = readline.question('enter the name of ' + i + ' stock : ');
                var numberOfShare = readline.questionInt('enter the number of ' + i + ' share : ');
                var sharePrice = readline.questionInt('enter the ' + i + ' share price : ');
                /**
                 * creating the stock object.
                 */
                var stocks = new access.stock(stockName, numberOfShare, sharePrice);
                /**
                 * printing the stock value.
                 */
                stockValue = stocks.printValueOfStocks();
                console.log('stock value : ' + stockValue);
                /**
                 * calculating the total stock value.
                 */
                totalStockValue = totalStockValue + stockValue;
            }
            console.log('total stock value : ' + totalStockValue);
        }
        catch (err) {
            console.log(err.message);
        }
    }
}

