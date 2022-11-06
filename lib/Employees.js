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
        return "Intern"
    }
}

// Employee.getRole();

// console.log(new Employee("Sophie", "32", "gksjgjs"))

// const Sophie = new Employee("Sophie", "32", "gksjgjs")

// Sophie.getRole();

// console.log(Sophie.getRole())

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }
}

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    getRole (){
        return "Engineer"
    }
}


class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getRole (){
        return "Intern"
    }
}




