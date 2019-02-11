module.exports = {

    reportCalculation() {
        
            var access = require('./stock');
            var readline = require('readline-sync');
            var valid=false;
            do{
            var numberOfStocks = readline.question('enter the number of stocks : ');
            if(isNaN(numberOfStocks))
            {
                console.log('enter only number');
            }else{
                valid=true;
            }
            }while(!valid)
            var stockValue = 0;
            var totalStockValue = 0;

            for (let i = 1; i <=numberOfStocks; i++) {
                var stockName = readline.question('enter the name of ' + i + ' stock : ');
                var numberOfShare = readline.questionInt('enter the number of ' + i + ' share : ');
                var sharePrice = readline.questionInt('enter the ' + i + ' share price : ');

                var stocks = new access.stock(stockName,numberOfShare,sharePrice);
                stockValue = stocks.printValueOfStocks();
                console.log('stock value : ' + stockValue);
                totalStockValue = totalStockValue + stockValue;
            }
            console.log('total stock value : ' + totalStockValue);

       
    }
}

