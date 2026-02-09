const students = {
  student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

let result = {};

Object.keys(students).forEach(student => {
  let marks = Object.values(students[student]);
  let average = marks.reduce((a, b) => a + b, 0) / marks.length;

  result[student] = { average: average };
});

console.log(result);
