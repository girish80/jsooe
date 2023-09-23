
class Student {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.course = null;
    }
  
    showCourse() {
      console.log(`${this.name} enrolled course: ${this.course}`);
    }
  }
  

  class AdmissionOffice {
    constructor() {
      this.enrolledStudents = [];
    }
  
    enrollStudent(student) {
      this.enrolledStudents.push(student);
      console.log(`${student.name} has been enrolled.`);
    }
  
    assignCourse(student, course) {
      student.course = course;
      console.log(`${student.name} enrolled in ${course}`);
    }
  
    showEnrolledStudents() {
      console.log('Enrolled students:');
      for (const student of this.enrolledStudents) {
        console.log(`- ${student.name} (${student.email})`);
      }
    }
  }
  
  const admissionOffice = new AdmissionOffice();
  

  const student1 = new Student('mithun', 'mithun@123');
  const student2 = new Student('farman', 'farman@123');
  

  admissionOffice.enrollStudent(student1);
  admissionOffice.enrollStudent(student2);
  
  
  admissionOffice.assignCourse(student1, 'full stack');
  admissionOffice.assignCourse(student2, 'data science');
  
  
  student1.showCourse(); 
  student2.showCourse(); 
  
  
  admissionOffice.showEnrolledStudents();
  