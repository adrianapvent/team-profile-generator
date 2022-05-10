/* Import Parent */
const Employee = require('./Employee.js');

/* Create Engineer class & extends Parent */
class Engineer extends Employee {
    constructor (name, email, id, github = '') {
        super(name, email, id)
        this.github = github;
    }
    getGitHub() {
        return `${this.github}`;
    }
    getRole() {
        return 'Engineer';
    }
}

/* ...once you're done with defining the class properties... */
/* ...you'll create the function methods you need for Engineer */

/* get Github */
/* get Role ... return 'Engineer' */

module.exports = Engineer;
