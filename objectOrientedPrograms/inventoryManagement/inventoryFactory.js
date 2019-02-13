/**
 * readline to read user input.
 */
var readline = require('readline-sync')
var file = require('fs')

class inventory {
    /**
     * add function adds the data to the json object.
     * @param {any} data 
     */
    add(data) {
        /**
         * taking name,share,quantity from user and pushing it.
         */
        var name = readline.question('Enter the name of the stock to be add : ');
        var shares = readline.questionInt('Enter number of shares : ');
        var quantity = readline.questionInt('Enter the price of the shares : ');
        data.Stock.push({ stockName: name, numberOfShare: shares, sharePrice: quantity });
        /**
         * writing content to the json object.
         */
        var write = file.writeFileSync('../jsonFile/inventoryManagerStock.json', JSON.stringify(data));
    }

    /**
     * removes the data from the json object.
     * @param {string} data 
     */
    remove(data) {
        /**
         * taking the name from user input.
         */
        var name = readline.question('Enter the name of the stock to be remove : ');
        /**
         * looping over each element to check name.
         */
        for (let i = 0; i < data.Stock.length; i++) {
            if (data.Stock[i].stockName == name) {
                var index = data.Stock.indexOf(data.Stock[i]);
                data.Stock.splice(index, 1);
            }
            /**
              * writing content to the json object.
              */
            var write = file.writeFileSync('../jsonFile/inventoryManagerStock.json', JSON.stringify(data));
        }
    }
    /**
     * prints the content of json object.
     * @param {any} data 
     */
    print(data) {

        var stock = data.Stock;
        /**
         * for in to print each stock
         */
        for (const key in stock) {
            console.log(stock[key]);
        }
    }
    /**
     * to clculate the total value of stock by taking number of share and share price.
     * @param {any} data 
     */
    totalValueOfStock(data) {
        var access = require('../stockReport/stock');
        var totalValue = 0;
        var stock = data.Stock;
        /**
         * to loop over each share and price.
         */
        for (const key in stock) {
            var hold = stock[key];
            var sto = new access.stock(hold.stockName, hold.numberOfShare, hold.sharePrice);
            var report = sto.printValueOfStocks();
            console.log('Value of stock ' + hold.stockName + ' : ' + report + 'RS\n');

            totalValue = totalValue + report;
        }
        console.log('Total value of all the stocks: ' + totalValue + ' Rs\n');
    }
}
module.exports = { inventory }




