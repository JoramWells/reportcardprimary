/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import {
  createContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
// import { useParams } from 'react-router-dom';

export const ExamContext = createContext();

const ExamContextProvider = ({ children }) => {
  const [exams, setExams] = useState([]);

  const deleteStudentExam = (arr, studentId) => {
    setExams(arr.filter((student) => student.id !== studentId));
    localStorage.setItem('studentExams', JSON.stringify(arr.filter((student) => student.id !== studentId)));
    toast.success('Exam has been deleted!!');
  };

  const value = useMemo(() => ({
    deleteStudentExam, exams,
  }));
  return (
    <ExamContext.Provider value={value}>
      {children}
    </ExamContext.Provider>
  );
};

export default ExamContextProvider;

ExamContextProvider.propTypes = {
  children: PropTypes.node,
};
