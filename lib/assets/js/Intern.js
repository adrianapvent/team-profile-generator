/* Import Parent */
const Employee = require('./Employee.js');

/* Create Intern class & extends Parent */
class Intern extends Employee {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email);

        this.school = school;
    }
    //return school 
    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
}


module.exports = Intern;
