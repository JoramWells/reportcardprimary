/* eslint-disable import/prefer-default-export */
export const getStudents = () => {
  const data = localStorage.getItem('studentData');
  return JSON.parse(data) || [];
};

export const saveStudentSubjects = (subjects) => {
  localStorage.setItem('studentSubjects', JSON.stringify(subjects));
};

export const getStudentSubjects = () => {
  const data = localStorage.getItem('studentSubjects');
  return JSON.parse(data) || [];
};

// export const getStudentSubjects = () => {
//   const data = localStorage.getItem('subjects');
//   return JSON.parse(data) || [];
// };

export const getClassNames = () => {
  const data = localStorage.getItem('Classes');
  return JSON.parse(data) || [];
};
