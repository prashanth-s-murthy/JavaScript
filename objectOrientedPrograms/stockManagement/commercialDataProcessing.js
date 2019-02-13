/**************************************************************************
 * Execution        : Default node             cmd> node commercialDataProcessing.js
 * @file            : commercialDataProcessing.js
 * @overview        : The StockAccount class also maintains a list of CompanyShares object 
                      which has Stock Symbol and Number of Shares as well as 
                      DateTime of the transaction. When buy or sell is initiated StockAccount
                      checks if CompanyShares are available and accordingly update or 
                      create an Object.
 * @author          : PRASHANTH S <prashanth.murthy007@gmail.com>
 * @version         : 1.0.
 * @since           : 12/02/2019
 ***************************************************************************/
var file = require('fs');
/**
 * accessing the stockAccount from stock manaagement folder.
 */
var access = require('../stockManagement/stockAccount');
/**
 * reads user input.
 */
var readline = require('readline-sync');
/**
 * accessing customerList.json from json file.
 */
var customerData = file.readFileSync('../stockManagement/customerList.json', 'utf8');
/**
 * accessing companyList.json from json file.
 */
var companyData = file.readFileSync('../stockManagement/companyList.json', 'utf8');
/**
 * parsing the customer data .
 */
try {
  var customerJson = JSON.parse(customerData);
  /**
   * parsing the company data.
   */
  var companyJson = JSON.parse(companyData);
  /**
   * creating stock account object.
   */
  var stockAccount = new access.StockAccount(customerJson, companyJson);
  var choice = 0
  /**
   * while loop to select the choice to create,buy,sell,print the share.
   */
  while (choice != 5) {
    console.log("enter 1 to create account:");
    console.log("enter 2 to buy shares");
    console.log("enter 3 to sell shares");
    console.log("enter 4 to print the shares  of company and customer");
    var choice = readline.questionInt("enter your choice : ");
    switch (choice) {
      case 1:
        stockAccount.stockCreate();
        break;
      case 2:
        stockAccount.buy(customerJson, companyJson);
        break;
      case 3:
        stockAccount.sell(customerJson, companyJson);
        break;
      case 4:
        stockAccount.print(customerJson, companyJson);
        break;
    }
  }
} catch (err) {
  console.log(err.message);

}