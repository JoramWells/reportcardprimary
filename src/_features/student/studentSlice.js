/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getFromStorage } from '../../utils/localStorage';

const initialState = getFromStorage('studentData');

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent: {
      reducer(state, action) {
        state.push(action.payload);
        const newStudent = [...initialState, action.payload];

        // save to local
        localStorage.setItem('studentData', JSON.stringify(newStudent));
        toast.success('Added New Student!!');
      },
      prepare(inputValues) {
        return {
          payload: inputValues,
        };
      },
    },
    deleteStudent: (state, { payload: index }) => {
      state.splice(index, 1);
      localStorage.setItem('studentData', JSON.stringify(initialState.filter((student) => student.id !== index)));
      toast.success('Succesfully deleted!!');
    },
  },
});

export const selectAllStudents = (state) => state.student;

export const { addStudent, deleteStudent } = studentSlice.actions;

export default studentSlice.reducer;
