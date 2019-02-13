/**************************************************************************
 * Execution        : Default node             cmd> node clinicManagement.js
 * @file            : clinicManagement.js
 * @overview        : programme is used to manage a list of Doctors associated with the 
                      Clinique. This also manages the list of patients who use the clinique. 
                      It manages Doctors by Name, Id, Specialization and Availability 
                      (AM, PM or both). It manages Patients by Name, ID, Mobile Number and Age. 
                      The Program allows users to search Doctor by name, id, Specialization or 
                      Availability. Also the programs allows users to search patient by name, 
                      mobile number or id. The programs allows patients to take appointment 
                      with the doctor. A doctor at any availability time can see only 5 patients. 
                      If exceeded the user can take appointment for patient at different date or
                      availability time. Print the Doctor Patient Report.
 * @author          : Prashanth S <prashanth.murthy007@gmail.com>
 * @version         : 1.0.
 * @since           : 13/02/2019
 ***************************************************************************/
/**
 * reads user input.
 */
var read = require('readline-sync')
/**
 * to access clinic file.
 */
var access = require('../clinicManagement/clinic')
var file = require('fs')
function clinicManagement() {
    try {
        /**
         * reading the data from the json file.
         */
        var data = file.readFileSync('../clinicManagement/clinic.json', 'utf8')
        /**
         * data is converted to JavaScript object.
         */
        var object = JSON.parse(data)
        /**
         * creating the clinic object.
         */
        var obj = new access.clinic;
        obj.clinicManagement(object);
    } catch (err) {
        console.log(err.message);

    }
} clinicManagement();