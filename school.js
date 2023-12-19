
class School {
    constructor(schoolName) {
        this.schoolName = schoolName;
        this.students = [];
        this.courses = [];
    }

    addCourse(course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
        }
    }

    addStudent(student) {
        if (!this.students.includes(student) && student.age() >= 6) {
            student.setId(this.students.length + 1);
            this.students.push(student);
        }
    }

    addStudentGrade(student, course, grade) {
        const existingStudent = this.students.find(existingStudent => existingStudent === student);
        const existingCourse = this.courses.find(existingCourse => existingCourse === course);
    
        if (existingStudent && existingCourse) {
          existingStudent.setGrade(course, grade);
          existingCourse.setStudentGrade(student, grade);
        }
      }

    getStudents() {
        return this.students;
    }

    getCourses() {
        return this.courses;
    }

    getStudentsOrderedByAverageGrade() {
       const sortedStudents = [...this.students];
    sortedStudents.sort((a, b) => {
      const avgA = a.getAverageGrade();
      const avgB = b.getAverageGrade();
      return avgB - avgA;
    });
    return sortedStudents;  }
}


module.exports = School;