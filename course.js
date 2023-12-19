class Course {
    constructor(name) {
        this.name = name;
        this.studentGrades = [];
    }

    setStudentGrade(student, grade) {
        this.studentGrades.push({ student, grade });
      }
    getGrades() {
        return this.studentGrades;
    }
    getAverageGrade() {
        if (this.studentGrades.length === 0) {
            return -1;
        }
        const total = this.studentGrades.reduce((acc, curr) => acc + curr.grade, 0);
        return total / this.studentGrades.length;
    }

    description() {
        return `Course: ${this.name}`;
    }
}

module.exports = Course;