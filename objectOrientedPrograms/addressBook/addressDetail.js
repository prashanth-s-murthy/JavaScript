var readline = require('readline-sync')
var file = require('fs')

class AddressBook {
    addPerson(data) {
        console.log("---------ADDING---------");
        var firstName = readline.question("enter FIRST NAME of person : ");
        var lastName = readline.question("enter LAST NAME of person : ");
        var city1 = readline.question("enter CITY of person : ");
        var state1 = readline.question("enter STATE of person : ");
        var phoneNumber1 = readline.question("enter PHONE NUMBER : ");
        var zip1 = readline.question("enter ZIP code: ");
        data.Person.push({
            personFirstName: firstName, personLastName: lastName, city: city1, state: state1, zip: zip1,
            phoneNumber: phoneNumber1
        })
        var write = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        console.log("ADDEDD SUCCESSFULLY");
        console.log("---------------*-------------------------------*--------------------");
    }
    updatePerson(data) {
        console.log("--------UPDATE---------")
        var name = readline.question("enter first name of the person : ");
        for (let i = 0; i < data.Person.length; i++) {
            if (data.Person[i].personFirstName == name) {
                var index = data.Person.indexOf(data.Person[i]);

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
    firstname(data, index) {
        var fname1 = readline.question("enter the  first name to be changed:")
        data.Person[index].personFirstName = fname1
        var d = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        console.log("UPDATE SUCCESSFUL");
        console.log("---------------*-------------------------------*--------------------");
    }
    lastname(data, index) {
        var lname1 = readline.question("enter  last name to be changed :")
        data.Person[index].personLastName = lname1
        var d = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        console.log("UPDATE SUCCESSFUL");
        console.log("---------------*-------------------------------*--------------------");
    }
    phonenumber(data, index) {
        var phonenumber1 = readline.question("enter  changed phonenumber :")
        data.Person[index].phoneNumber = phonenumber1
        var d = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        console.log("UPDATE SUCCESSFUL");
        console.log("---------------*-------------------------------*--------------------");
    }
    city(data, index) {
        var cityname = readline.question("enter changed city name :")
        data.Person[index].city = cityname
        var d = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        console.log("UPDATE SUCCESSFUL");
        console.log("---------------*-------------------------------*--------------------");
    }
    state(data, index) {
        var statename = readline.question("enter the changed state:")
        data.Person[index].state = statename
        var d = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        console.log("UPDATE SUCCESSFUL");
        console.log("---------------*-------------------------------*--------------------");
    }
    zipcode(data, index) {
        var zipcode = readline.question("enter the cchanged zip :")
        data.Person[index].zip = zipcode
        var d = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        console.log("UPDATE SUCCESSFUL");
        console.log("---------------*-------------------------------*--------------------");

    }
    removePerson(data) {
        console.log("----REMOVING----");

        var name = readline.question("enter name of person to be remove:")
        for (let i = 0; i < data.Person.length; i++) {
            if (data.Person[i].personFirstName == name) {
                var index = data.Person.indexOf(data.Person[i]);
                data.Person.splice(index, 1);
            }
            var write = file.writeFileSync('../addressBook/AddressBook.json', JSON.stringify(data))
        }
        console.log("REMOVED SUCCESSFULLY");
        console.log("---------------*-------------------------------*--------------------");
    }
    
    sortByFirstName(data) {
        console.log("----SORTING BY NAME----");
        let fname = data.Person;
      
        function sortbyfname(a, b) {
            if (a.firstName == b.firstName)  return 0; 
            if (a.firstName > b.firstName)  return -1; 
            if (a.firstName < b.firstName)  return 1; 
        }
        var result = fname.sort(sortbyfname);
        console.log(result);
        console.log("SORTED SUCCESSFULLY")
        console.log("---------------*-------------------------------*--------------------");
    }

   
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








