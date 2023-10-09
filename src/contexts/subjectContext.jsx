/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { getFromStorage } from '../utils/localStorage';

export const SubjectContext = createContext(null);

const SubjectContextProvider = ({ children }) => {
  const [studentSubjects, setSubjects] = useState(getFromStorage('studentSubjects'));
  const [studentExamDetail, setStudentExamDetail] = useState('');

  const saveStudentSubject = (inputValues) => {
    const newSubject = [...studentSubjects, inputValues];
    setSubjects(newSubject);
    localStorage.setItem('studentSubjects', JSON.stringify(newSubject));
    toast.success('Added New Student Exam!!');
  };

  const getStudentExamDetails = (studentId) => {
    const subjectResults = studentSubjects.filter(
      (subject) => subject.studentId.toLowerCase().includes(studentId.toLowerCase()),
    );

    // setStudentSubjects(subjectResults);
    setStudentExamDetail(subjectResults);
  };

  const value = useMemo(() => ({
    studentSubjects, studentExamDetail, saveStudentSubject, getStudentExamDetails,
  }), []);
  return (
    <SubjectContext.Provider value={value}>
      {children}
      <ToastContainer />
    </SubjectContext.Provider>
  );
};

SubjectContextProvider.propTypes = {
  children: PropTypes.node,
};

export default SubjectContextProvider;
