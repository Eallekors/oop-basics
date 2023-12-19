const Person = require('./person')

class Student extends Person {
    constructor(name) {
        super(name);
        this.grades = [];
        this.id = null;
        
    }

    setId(id) {
        if (this.id == null) {
            this.id = id;
        }
    }

    getId() {
        return this.id;
    }

    setGrade(course, grade) {
        this.grades.push({ course, grade });
      }

    getGrades() {
        return this.grades;
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return -1;
        }
        const total = this.grades.reduce((acc, curr) => acc + curr.grade, 0);
        return total / this.grades.length;
    }
    
    description() {
        return `This is ${this.name}.`;
    }
}


module.exports = Student;
