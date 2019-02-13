/**
 * readline reads input from user.
 */
var readline = require('readline-sync')
var file = require('fs')
var valid = false;
var format = /[a-zA-Z]/
var format1 = /[0-9]/
/**
 * creating the address book class.
 */
class AddressBook {
    /**
     * add person takes the input from user and adds it to json object.
     * @param {any} data 
     */
    addPerson(data) {
        console.log("---------ADDING---------");
        /**
         * do while loop to validate first name of person.
         */
        do {
            var firstName = readline.question("enter FIRST NAME of person : ");
            if (firstName.length < 0 || !format.test(firstName)) {
                console.log("not valid");
            }
            else {
                valid = true
            }
        } while (!valid)
        /**
         * do while loop to validate last name of person
         */
        do {
            var lastName = readline.question("enter LAST NAME of person : ");
            if (lastName.length < 0 || !format.test(lastName)) {
                console.log("not valid");
            }
            else {
                valid = true
            }
        } while (!valid)
        /**
         * do while loop to validate city
         */
        do {
            var city1 = readline.question("enter CITY of person : ");
            if (city1.length < 0 || !format.test(city1)) {
                console.log("not valid");
            }
            else {
                valid = true
            }
        } while (!valid)
        /**
         * do while loop to validate state
         */
        do {
            var state1 = readline.question("enter STATE of person : ");
            if (state1.length < 0 || !format.test(state1)) {
                console.log("not valid..enter only character");
            }
            else {
                valid = true
            }
        } while (!valid)
        /**
         * do while loop to validate phone number.
         */
        do {
            var phoneNumber1 = readline.question("enter PHONE NUMBER : ");
            if (phoneNumber1.length > 10 || phoneNumber1.length < 10 || !format1.test(phoneNumber1)) {
                console.log("not valid number....phoneNumber should contains exact 10 digits");
            }
            else {
                valid = true
            }
        } while (!valid)
        /**
         * do while loop to validate zip.
         */
        do {
            var zip1 = readline.question("enter ZIP code: ");
            if (zip1.length < 3 || !format1.test(zip1)) {
                console.log("not valid..enter only number");
            }
            else {
                valid = true
            }
        } while (!valid)
        /**
         * pushing the data to the json object
         */
        data.Person.push({
            personFirstName: firstName, personLastName: lastName, city: city1, state: state1, zip: zip1,
            phoneNumber: phoneNumber1
        })
        var write = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        console.log("ADDEDD SUCCESSFULLY");
        console.log("---------------*-------------------------------*--------------------");
    }
    /**
     * update function takes the name of person to be updated.
     * @param {any} data 
     */
    updatePerson(data) {
        console.log("--------UPDATE---------")
        var name = readline.question("enter first name of the person : ");
        /**
         * looping over each element in the json object to fine the person name that has to be updated.
         */
        for (let i = 0; i < data.Person.length; i++) {
            if (data.Person[i].personFirstName == name) {
                var index = data.Person.indexOf(data.Person[i]);
                /**
                 * while loop to select the attribute that has to be updated.
                 */
                while (num1 != 7) {
                    console.log("select which information to be update");
                    console.log("enter 1 for FIRST NAME of person to be update : ");
                    console.log("enter 2 for LAST NAME of person to be update : ");
                    console.log("enter 3 for PHONE NUMBER person to be update : ");
                    console.log("enter 4 for CITY of person to be update : ");
                    console.log("enter 5 for STATE of person to be update : ");
                    console.log("enter 6 for ZIP code of person to be update : ");
                    console.log("enter 7 to GO BACK to main menu ")
                    var num1 = readline.questionInt("enter your choice : ");
                    switch (num1) {
                        case 1: this.firstname(data, index)
                            break;
                        case 2: this.lastname(data, index)
                            break;
                        case 3: this.phonenumber(data, index)
                            break;
                        case 4: this.city(data, index)
                            break;
                        case 5: this.state(data, index)
                            break;
                        case 6: this.zipcode(data, index)
                            break;
                        default:
                            console.log('enter the valid choice');
                            break;
                    }
                }
            }
        }
    }
    /**
     * first name function takes the index and the name that has to be changed.
     * @param {string} data 
     * @param {number} index 
     */
    firstname(data, index) {
        /**
         * do while loop to validate the first name to be changed.
         */
        do {
            var fname1 = readline.question("enter the  first name to be changed:")
            if (fname1.length < 0 || !format.test(fname1)) {
                console.log("not valid");
            }
            else {
                valid = true
            }
        } while (!valid)
        data.Person[index].personFirstName = fname1
        /**
         * writing the data to the json object.
         */
        var d = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        console.log("UPDATE SUCCESSFUL");
        console.log("---------------*-------------------------------*--------------------");
    }
    /**
     * last name function to change the name.
     * @param {string} data 
     * @param {number} index 
     */
    lastname(data, index) {
        /**
         * do while loop to validate the last name to be changed.
         */
        do {
            var lname1 = readline.question("enter  last name to be changed :")
            if (lname1.length < 0 || !format.test(lname1)) {
                console.log("not valid");
            }
            else {
                valid = true
            }
        } while (!valid)
        /**
         * writing the data to the json object.
         */
        data.Person[index].personLastName = lname1
        var d = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        console.log("UPDATE SUCCESSFUL");
        console.log("---------------*-------------------------------*--------------------");
    }
    /**
     * to change the phone number.
     * @param {number} data 
     * @param {number} index 
     */
    phonenumber(data, index) {
        /**
         * do while loop to validate the phone number to be changed.
         */
        do {
            var phonenumber1 = readline.question("enter  changed phonenumber :");
            if (phonenumber1.length > 10 || phonenumber1.length < 10 || !format1.test(phonenumber1)) {
                console.log("not valid number....phoneNumber should contains exact 10 digits");
            } else {
                valid = true;
            }
        } while (!valid)
        /**
         * writing the data to the json object.
         */
        data.Person[index].phoneNumber = phonenumber1
        var d = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        console.log("UPDATE SUCCESSFUL");
        console.log("---------------*-------------------------------*--------------------");
    }
    /**
     * to change the city.
     * @param {string} data 
     * @param {number} index 
     */
    city(data, index) {
        /**
         * do while loop to validate the city name to be changed.
         */
        do {
            var cityname = readline.question("enter changed city name :")
            if (cityname.length < 0 || !format.test(cityname)) {
                console.log("not valid");
            }
            else {
                valid = true
            }
        } while (!valid)
        /**
         * writing the data to the json object.
         */
        data.Person[index].city = cityname
        var d = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        console.log("UPDATE SUCCESSFUL");
        console.log("---------------*-------------------------------*--------------------");
    }
    /**
     * to change the state.
     * @param {string} data 
     * @param {number} index 
     */
    state(data, index) {
        /**
         * do while loop to validate the state name to be changed.
         */
        do {
            var statename = readline.question("enter the changed state:");
            if (statename.length < 0 || !format.test(statename)) {
                console.log("not valid..enter only character");
            }
            else {
                valid = true
            }
        } while (!valid)
        /**
         * writing the data to the json object.
         */
        data.Person[index].state = statename
        var d = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        console.log("UPDATE SUCCESSFUL");
        console.log("---------------*-------------------------------*--------------------");
    }/**
     * to change the zip.
     * @param {number} data 
     * @param {number} index 
     */
    zipcode(data, index) {
        /**
         * do while loop to validate the pin to be changed.
         */
        do {
            var zipcode = readline.question("enter the changed zip :")
            if (zipcode.length < 3 || !format1.test(zipcode)) {
                console.log("not valid..enter only number");
            }
            else {
                valid = true
            }
        } while (!valid)
        /**
         * writing the data to the json object.
         */
        data.Person[index].zip = zipcode
        var d = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        console.log("UPDATE SUCCESSFUL");
        console.log(data);
        console.log("---------------*-------------------------------*--------------------");

    }
    /**
     * remove function takes name as input and remove the person data from the object.
     * @param {string} data 
     */
    removePerson(data) {
        console.log("----REMOVING----");
        /**
         * do while loop to validate the name is present or not.
         */
        do {
            var name = readline.question("enter name of person to be remove:")
            if (name.length < 0 || !format.test(name)) {
                console.log("not valid");
            }
            else {
                valid = true
            }
        } while (!valid)
        for (let i = 0; i < data.Person.length; i++) {
            if (data.Person[i].personFirstName == name) {
                var index = data.Person.indexOf(data.Person[i]);
                data.Person.splice(index, 1);
            }
            /**
             * writing the data to the json object.
             */
            var write = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        }
        console.log("REMOVED SUCCESSFULLY");
        console.log("---------------*-------------------------------*--------------------");
    }



    /* sortByFirstName(data) {
         console.log("----SORTING BY NAME----");
         let fname = data.Person;
         console.log(".................."+fname);
         
         function sortbyfname(a, b) {
             if (a.PersonfirstName == b.PersonfirstName) return 0;
             if (a.firstName > b.firstName) return -1;
             if (a.firstName < b.firstName) return 1;
         }
         var result = fname.sort(sortbyfname);
         console.log(result);
         console.log("SORTED SUCCESSFULLY")
         console.log("---------------*-------------------------------*--------------------");
     }*/

    /**
     * sort by zip takes the input and sort based on there pin.
     * @param {string} data 
     */
    sortByZip(data) {
        console.log("----SORTING BY ZIP----")
        let refer = data.Person;
        function sortbyzip(a, b) {
            return (a.zip - b.zip);
        }
        var result = refer.sort(sortbyzip);
        console.log(result);
        console.log("SORTED SUCCESSFULLY")
        console.log("---------------*-------------------------------*--------------------");

    }
    /**
     * to print the data.
     * @param {any} data 
     */
    printAddressBook(data) {
        console.log("------PRINT------");
        var person = data.Person
        for (const key in person) {
            console.log(person[key])
        }
        console.log("---------------*-------------------------------*--------------------");

    }
}
module.exports = { AddressBook }








