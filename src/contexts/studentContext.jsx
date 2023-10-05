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

  const saveStudents = (inputValues) => {
    const newStudent = [...students, inputValues];
    setStudents(newStudent);
    saveStudentToLocal(newStudent);
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
