import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getFromStorage } from '../../utils/localStorage';

const initialState = getFromStorage('studentSubjects');

const examSlice = createSlice({
  name: 'exams',
  initialState,
  reducers: {
    addExam: {
      reducer(state, action) {
        state.push(action.payload);
        const newExam = [...initialState, action.payload];

        localStorage.setItem('studentSubjects', JSON.stringify(newExam));
        toast.success('Added New Exam!!');
      },
      prepare(inputValues) {
        return {
          payload: inputValues,
        };
      },
    },
    deleteExam: (state, { payload: index }) => {
      state.splice(index, 1);
      localStorage.setItem('studentSubjects', JSON.stringify(initialState.filter((student) => student.id !== index)));
      toast.success('Succesfully deleted!!');
    },
  },
});

export const selectAllExams = (state) => state.exam;

export const { addExam, deleteExam } = examSlice.actions;

export default examSlice.reducer;
