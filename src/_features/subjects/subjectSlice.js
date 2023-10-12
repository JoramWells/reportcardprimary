import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getFromStorage } from '../../utils/localStorage';

const initialState = getFromStorage('subjects');

const subjectSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {
    addSubject: {
      reducer(state, action) {
        state.push(action.payload);
        const newSubject = [...initialState, action.payload];

        localStorage.setItem('subjects', JSON.stringify(newSubject));
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

export const selectAllSubjects = (state) => state.subjects;

export const { addSubject } = subjectSlice.actions;

export default subjectSlice.reducer;
