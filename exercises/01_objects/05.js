function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    addCourse(courseObj) {
      this.courses.push(courseObj);
    },
    listCourses() {
      console.log(this.courses);
    },
    addNote(code, note) {
      let course = this.courses.find(({ code: c }) => c === code);

      if (course.note) {
        course.note += `; ${note}`;
      } else {
        course.note = note;
      }
    },
    updateNote(code, note) {
      let course = this.courses.find(({ code: c }) => c === code);

      course.note = note;
    },
    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },
  };
}

let school = {
  students: [],
  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log("Invalid Year");
    }
  },
  enrollStudent(student, name, code) {
    student.addCourse({ name, code });
  },
  addGrade(student, name, grade) {
    let course = student.courses.find(({ name: n }) => name === n);
    if (course) {
      course.grade = grade;
    }
  },
  getReportCard(student) {
    student.courses.forEach(({ name, grade }) => {
      if (grade) {
        console.log(`${name}: ${grade}`);
      }
    });
  },
  courseReport(name) {
    let courseStudents = [];
    this.students.forEach(student => {
      let course = student.courses.find(({ name: n }) => n === name);
      if (course && course.grade) courseStudents.push({ name: student.name, grade: course.grade });
    });

    if (courseStudents.length > 0) {
      console.log(`=${name} Grades=`);
      courseStudents.forEach(({ name, grade }) => {
        console.log(`${name}: ${grade}`);
      });
      console.log(`---`);
      let avg = Math.round(courseStudents.reduce((acc, { grade }) => acc + grade, 0) / courseStudents.length);
      console.log(`Course Average: ${avg}`);
    }
  }

}


let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, 'Math', 101);
school.addGrade(bar, 'Math', 91);

let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);
school.addGrade(qux, 'Math', 93);
school.addGrade(qux, 'Advanced Math', 90);

// school.getReportCard(foo);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');