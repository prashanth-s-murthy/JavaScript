/**
 * reads the user input.
 */
var readline = require('readline-sync');
var file = require('fs');
/**
 * creating the stock account class.
 */
class StockAccount {
    constructor(customerJson, companyJson) {
        this.customerJson = customerJson;
        this.companyJson = companyJson;
    }
    /**
     * stock create function to create the stock.
     */
    stockCreate() {
        /**
         * accepting name from user.
         */
        var name1 = readline.question("enter the name : ");
        /**
         * generating id using math.random. 
         */
        var id1 = Math.floor(Math.random() * 100);
        console.log(id1);
        /**
         * generating share using math.random
         */
        var share1 = Math.floor(Math.random() * 100);
        this.customerJson.customer.push({
            name: name1,
            id: id1,
            share: share1
        });
        console.log(this.customerJson.customer);
        /**
         * writing data to the json object.
         */
        var d = file.writeFileSync("../stockManagement/customerList.json", JSON.stringify(this.customerJson));
    }
    /**
     * buy function to buy the share.
     */
    buy() {
        console.log(this.customerJson);
        var customerObject = this.customerJson.customer;
        /**
         * taking id from user
         */
        var idNumber = readline.question("enter the id :");
        /**
         * looping over id to buy the share.
         */
        for (let key in customerObject) {
            if (customerObject[key].id == idNumber) {
                var index = this.customerJson.customer.indexOf(
                    this.customerJson.customer[key]
                );
                var customername = customerObject[key].name;
                console.log("company information");
                console.log(this.companyJson);
                /**
                 * taking copmany name as user input to buy the share.
                 */
                var name1 = readline.question(
                    "enter name of company share you want to buy "
                );
                var companyDetails = this.companyJson.company;
                /**
                 * looping over company detail to know the share .
                 */
                for (let i in companyDetails) {
                    if (companyDetails[i].name == name1) {
                        console.log("company number of shares price of each share");
                        console.log(companyDetails[i]);
                        var companyName = companyDetails[i].name;
                        var share = companyDetails[i].share;
                        var flag = false;
                        /**
                         * valiadtion to number of share.
                         */
                        do {
                            var numberOfShares = readline.questionInt(
                                "enter the number of shares you want to buy"
                            );
                            if (numberOfShares > share) {
                                console.log("Enter no of shares less than company shares ")
                            }
                            else {
                                flag = true;
                            }
                        } while (!flag)
                        var output = "customer name : " + customername + " and name of company " + companyName +
                            " buy number of shares " + numberOfShares;
                        console.log(output);
                        var date = Date(Date.now());
                        var time = date.toString();
                        /**
                         * parsing the number of share.
                         */
                        var n = parseInt(this.customerJson.customer[index].share);
                        var n11 = parseInt(this.companyJson.company[i].share);
                        var num = parseInt(numberOfShares);
                        var n1 = n + num;
                        var n2 = n11 - num;
                        if (n11 > num) {
                            this.customerJson.customer[index].share = n1;
                            this.companyJson.company[i].share = n2;
                            this.customerJson.customer[index].LastTransaction = time;
                            /**
                             * writing data to the json object.
                             */
                            var date = file.writeFileSync("../stockManagement/customerList.json", JSON.stringify(this.customerJson));
                            var d1 = file.writeFileSync("../stockManagement/companyList.json", JSON.stringify(this.companyJson)
                            );
                        }
                    }
                }
            }
        }
    }
    /**
     * sell function to sell the share.
     */
    sell() {
        console.log(this.customerJson);
        var customerObject = this.customerJson.customer;
        /**
         * taking id as user input.
         */
        var id1 = readline.question("enter the id :");
        /**
         * looping over id to retrive the information of the stock.
         */
        for (let key in customerObject) {
            /**
             * condition to check whether the user input id equal to id.
             */
            if (customerObject[key].id == id1) {
                var index = this.customerJson.customer.indexOf(this.customerJson.customer[key]);
                var customername1 = customerObject[key].name;
                console.log("company information");
                console.log(this.companyJson);
                /**
                 * taking the name of the company to sell the stock.
                 */
                var name1 = readline.question("enter name of company you want to sell ");
                var companyObject = this.companyJson.company;
                /**
                 * looping over company object based on the name.
                 */
                for (let key in companyObject) {
                    if (companyObject[key].name == name1) {
                        console.log("company number of shares and price of each share ");
                        console.log(companyObject[key]);
                        var companyName = companyObject[key].name;
                        var share = customerObject[key].share;
                        var flag = false;
                        /**
                         * validation to check number of sell is valid or not.
                         */
                        do {
                            var number = readline.questionInt(
                                "enter how many shares you want to sell ")
                            if (number > share) {
                                console.log("Enter no of shares greater than the current shares ")
                            }
                            else {
                                flag = true;
                            }
                        } while (!flag)
                        /**
                         * printing thr customer name,company name and number of share selled.
                         */
                        var output = "customer name :" + customername1 + "and name of company " + companyName + "sell number of shares " + number;
                        console.log(output);
                        var date = Date(Date.now());

                        /** 
                         * *Converting the number of millisecond in date string
                         * */
                        var time = date.toString();
                        var n = parseInt(this.customerJson.customer[index].share);
                        var n11 = parseInt(this.companyJson.company[key].share);
                        var num = parseInt(number);
                        var n1 = n - num;
                        var n2 = n11 + num;
                        this.customerJson.customer[index].share = n1;
                        this.companyJson.company[key].share = n2;
                        this.customerJson.customer[index].LastTransaction = time;
                        /**
                         * writing the data to the customer json object.
                         */
                        var date = file.writeFileSync(
                            "../stockManagement/customerList.json", JSON.stringify(this.customerJson));
                        /**
                         * writing the data to company json object
                         */
                        var write = file.writeFileSync("../stockManagement/companyList.json", JSON.stringify(this.companyJson));
                    }
                }
            }
        }
    }
    /**
     * prints the customer json and company json.
     * @param {any} customerJson 
     * @param {any} companyJson 
     */
    print(customerJson, companyJson) {
        console.log("customer shares information :");
        console.log(this.customerJson);
        console.log("company shares information :");
        console.log(this.companyJson);
    }
}
module.exports = { StockAccount };
