class Person {
    constructor(name) {
        this.name = name;
        this.dateOfBirth;
    }

    setDateOfBirth(year) {
        this.dateOfBirth = year;
    }

    getDateOfBirth() {
        return this.dateOfBirth;
    }

    age() {
        if (this.dateOfBirth === undefined) {
            return null;
        }
        const today = new Date();
        const currentYear = today.getFullYear();
        return currentYear - this.dateOfBirth;
    }

    getName() {
        return this.name;
    }

    description() {
        return `This is ${this.name}.`;
    }
}

module.exports = Person;
