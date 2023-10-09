/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
import { nanoid } from 'nanoid';

/* eslint-disable import/prefer-default-export */
export const getInitials = (string) => {
  const names = string.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }

  return initials;
};

const getClassName = (arrays, className) => {
  let results = [];
  if (arrays.length > 0) {
    results = arrays.filter(
      (subj) => subj.className.toLowerCase().includes(className.toLowerCase()),
    );
  }

  return results;
};

export const getStudentMarks = (studentArray, className) => {
  // filter to get specific class results
  const specificClass = getClassName(studentArray, className);
  const map = new Map(specificClass.map((
    { studentName },
  ) => [studentName, {
    id: nanoid(),
    studentName,

    marks: [],
  }]));
  for (const {
    studentName, marks,
  } of specificClass) {
    map.get(studentName).marks.push(...[marks].flat());
  }
  return [...map.values()];
};

export const calculateAverage = (students) => {
  const totalMarks = students.marks.reduce((sum, mark) => parseInt(sum) + parseInt(mark));
  return totalMarks / students.marks.length;
};

export const sortItems = (object) => object.sort((a, b) => a.marks - b.marks);

export const returnObjectTotal = (students, className) => {
  const results = {};

  const averageMarks = getStudentMarks(students, className).forEach((student) => {
    const average = calculateAverage(student);
    Object.assign(results, { [student.studentName]: average });
  });
  return sortItems(averageMarks);
};
