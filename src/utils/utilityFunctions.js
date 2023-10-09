/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
import { nanoid } from 'nanoid';
import { getFromStorage } from './localStorage';

/* eslint-disable import/prefer-default-export */
export const getInitials = (string) => {
  const names = string.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }

  return initials;
};

const arrays = getFromStorage('studentSubjects');

const getClassName = (className) => {
  let results = [];
  if (arrays.length > 0) {
    results = arrays.filter(
      (subj) => subj.className.toLowerCase().includes(className.toLowerCase()),
    );
  }

  return results;
};

export const getStudentMarks = (className) => {
  // filter to get specific class results
  const specificClass = getClassName(className);
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

export const sortItems = (object) => {
  const studentArray = Object.entries(object)
    .map(([name, marks]) => ({ name, marks }));
  studentArray.sort((a, b) => b.marks - a.marks);
  return studentArray;
};

export const returnObjectTotal = (students, className) => {
  const results = {};

  getStudentMarks(className).forEach((student) => {
    const average = calculateAverage(student);
    Object.assign(results, { [student.studentName]: average });
  });
  return (results);
};

export const findStudentPstn = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    const key = Object.keys(obj);
    if (obj.name.toLowerCase() === target.toLowerCase()) {
      return i;
    }
  }
  return -1;
};
