/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
import {
  useState, createContext, useMemo, useReducer,
} from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { getFromStorage } from '../utils/localStorage';
import { studentReducer } from '../_reducers/studentReducer';
import { studentActions, studentInitialState } from '../_actions/student';

export const StudentContext = createContext(null);

// const students = getFromStorage('studentData');
const classes = getFromStorage('Classes');

const StudentContextProvider = ({ children }) => {
  const [students, setStudents] = useState(getFromStorage('studentData'));

  const [state, dispatch] = useReducer(studentReducer, studentInitialState);

  const saveStudentToLocal = (student) => {
    localStorage.setItem('studentData', JSON.stringify(student));
  };

  // update stream class name with newly registered students
  const updateClassStudents = (data) => {
    const userResults = classes.filter(
      (user) => user.className.toLowerCase().includes(data.className.toLowerCase()),
    );

    const temp = userResults;
    let results = 0;
    userResults[0].registeredStudents
      ? userResults[0].registeredStudents++
      : userResults[0].registeredStudents = 1;

    results = temp[0].noOfStudents - 1;

    // mid/bot/marks average

    // delete item
    const newSet = classes.filter((item) => item.className !== data.className);
    const newdict = [...newSet, temp[0]];
    localStorage.setItem('Classes', JSON.stringify(newdict));
    return userResults;
  };

  const saveStudents = (inputValues) => {
    const newStudent = [...students, inputValues];
    saveStudentToLocal(newStudent);
    setStudents(newStudent);
    // update classes
    updateClassStudents(inputValues);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
    localStorage.setItem('studentData', JSON.stringify(students.filter((student) => student.id !== id)));
    toast.success('A student has been deleted');
  // localStorage.todo
  };

  const valuex = {
    studentList: state.studentList,

    readStudents: () => {
      dispatch({
        type: studentActions.READ_STUDENT,
      });
    },
    createStudent: (student) => {
      dispatch({
        type: studentActions.CREATE_STUDENT, payload: student,
      });
      localStorage.setItem('studentData', JSON.stringify(state.studentList));
    },
  };

  const value = useMemo(() => ({
    students, saveStudents, deleteStudent,
  }));

  return (
    <div>
      {' '}
      <StudentContext.Provider value={value}>
        {children}
        <ToastContainer />
      </StudentContext.Provider>

    </div>
  );
};

export default StudentContextProvider;

StudentContextProvider.propTypes = {
  children: PropTypes.node,
};
