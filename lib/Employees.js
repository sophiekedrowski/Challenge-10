class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }

    getID() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
}


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getofficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager"
    }
}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
}


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}

module.exports = {
    Employee,
    Intern,
    Manager,
    Engineer
};


// Employee.getRole();

// const sophie = new Intern("Sophie", "32", "gksjgjs")

// console.log(sophie.getName())


