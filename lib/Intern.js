const Employee = require("./Employees");

class Intern extends Emplyoee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern"
    }
    getSchool () {
        return this.school;
    }
}

module.exports = Intern