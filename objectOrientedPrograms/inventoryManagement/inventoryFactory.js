var readline = require('readline-sync')
var file = require('fs')

class inventory {
    add(data) {
        var name = readline.question('Enter the name of the stock to be add : ');
        var shares = readline.questionInt('Enter number of shares : ');
        var quantity = readline.questionInt('Enter the price of the shares : ');
        data.Stock.push({ stockName: name, numberOfShare: shares, sharePrice: quantity });
        var write = file.writeFileSync('../jsonFile/inventoryManagerStock.json', JSON.stringify(data));
    }


    remove(data) {
        var name = readline.question('Enter the name of the stock to be remove : ');
        for (let i = 0; i < data.Stock.length; i++) {
        if (data.Stock[i].stockName == name) {
        var index = data.Stock.indexOf(data.Stock[i]);
        data.Stock.splice(index, 1);
            }
            var write = file.writeFileSync('../jsonFile/inventoryManagerStock.json', JSON.stringify(data));
        }
    }
    print(data) {

        var stock = data.Stock;
        for (const key in stock) {
            console.log(stock[key]);
        }
    }

    totalValueOfStock(data)
    {
        var access = require('../stockReport/stock');
        var totalValue = 0;
        var stock = data.Stock;
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




