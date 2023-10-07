/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { getFromStorage } from '../utils/localStorage';

export const StudentContext = createContext(null);

const StudentContextProvider = ({ children }) => {
  const [students, setStudents] = useState(getFromStorage('studentData'));

  const saveStudentToLocal = (student) => {
    localStorage.setItem('studentData', JSON.stringify(student));
  };

  const classes = getFromStorage('Classes');

  const updateClassStudents = (data) => {
    const userResults = classes.filter(
      (user) => user.className.toLowerCase().includes(data.className.toLowerCase()),
    );

    const temp = userResults;
    let results = 0;
    userResults[0].registeredStudents
      ? userResults[0].registeredStudents++
      : userResults[0].registeredStudents = 1;
    // if (userResults[0].registeredStudents && userResults[0].registeredStudents > 0) {
    //   userResults[0].registeredStudents += 1;
    // } else {
    //   userResults[0].registeredStudents = 1;
    // }

    results = temp[0].noOfStudents - 1;

    // delete item
    const newSet = classes.filter((item) => item.className !== data.className);
    const newdict = [...newSet, temp[0]];
    localStorage.setItem('Classes', JSON.stringify(newdict));
    console.log('class name results', JSON.stringify(newdict));
    return userResults;
  };

  const saveStudents = (inputValues) => {
    const newStudent = [...students, inputValues];
    setStudents(newStudent);
    saveStudentToLocal(newStudent);

    // update classes
    updateClassStudents(inputValues);
  };

  const value = useMemo(() => ({
    students, saveStudents,
  }));

  return (
    <div>
      {' '}
      <StudentContext.Provider value={value}>
        {children}
      </StudentContext.Provider>

    </div>
  );
};

export default StudentContextProvider;

StudentContextProvider.propTypes = {
  children: PropTypes.node,
};
