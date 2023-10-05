/* eslint-disable import/prefer-default-export */
export const getSubjects = () => {
  const data = localStorage.getItem('subjects');
  // if (data) {
  //   setSubjects(JSON.parse(data));
  // }

  return JSON.parse(data) || [];
};

// export const saveStudentSubjects = (student) => {
//   localStorage.setItem('studentSubjects', JSON.stringify(student));
// };
