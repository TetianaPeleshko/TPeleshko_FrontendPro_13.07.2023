class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
  }

  getAge() {
    const currentAge = new Date().getFullYear();
    return currentAge - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }

    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  _upAttendance(isPresent) {
    const index = this.attendance.findIndex((item) => item === null);
    if (index !== -1) {
      this.attendance[index] = isPresent;
    }
  }

  present() {
    this._upAttendance(true);
  }

  absent() {
    this._upAttendance(false);
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const averageAttendance =
      this.attendance.filter((item) => item === true).length /
      this.attendance.length;

    if (averageGrade > 90 && averageAttendance > 0.9) {
      return 'Молодець!';
    } else if (averageGrade > 90 || averageAttendance > 0.9) {
      return 'Добре, але можна краще';
    } else {
      return 'Редиска!';
    }
  }
}

let student_1 = new Student('Masha', 'Sydorova', 2000);
let student_2 = new Student('Alex', 'Petrov', 2006);
let student_3 = new Student('Den', 'Ivanov', 2004);

student_1.present();
student_1.present();
student_1.absent();

student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();
student_2.present();

student_3.absent();
student_3.absent();
student_3.present();

student_1.grades = [45, 56, 89, 100, 99, 67];
student_2.grades = [98, 89, 99, 100, 100];
student_3.grades = [95, 88, 100, 100, 92];

console.log(student_1.attendance);
console.log(student_2.attendance);
console.log(student_3.attendance);
console.log(
  `Вік студента ${student_1.firstName} ${
    student_1.lastName
  } ${student_1.getAge()}`
);
console.log(
  `Середня оцінка ${student_2.firstName} ${
    student_2.lastName
  } ${student_2.getAverageGrade()}`
);
console.log(
  `Вік студента ${student_3.firstName} ${
    student_3.lastName
  } ${student_3.getAge()}`
);
console.log(
  `Середня оцінка ${student_3.firstName} ${
    student_3.lastName
  } ${student_3.getAverageGrade()}`
);
console.log(
  `${student_1.firstName} ${student_1.lastName} ${student_1.summary()}`
);
console.log(
  `${student_2.firstName} ${student_2.lastName} ${student_2.summary()}`
);
console.log(
  `${student_3.firstName} ${student_3.lastName} ${student_3.summary()}`
);
