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
  },
});

export const selectAllStudents = (state) => state.student;

export const { addStudent } = studentSlice.actions;

export default studentSlice.reducer;
