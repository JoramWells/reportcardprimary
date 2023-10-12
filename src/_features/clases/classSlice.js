import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getFromStorage } from '../../utils/localStorage';

const initialState = getFromStorage('Classes');

const classSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {
    addClass: {
      reducer(state, action) {
        state.push(action.payload);
        const newClass = [...initialState, action.payload];
        localStorage.setItem('Classes', JSON.stringify(newClass));
        toast.success('Added New Class!!');
      },
      prepare(inputValues) {
        return {
          payload: inputValues,
        };
      },
    },
    deleteClass: (state, { payload: index }) => {
      state.splice(index, 1);
      localStorage.setItem('Classes', JSON.stringify(initialState.filter((student) => student.id !== index)));
      toast.success('Succesfully deleted!!');
    },
  },
});

export const selectAllClasses = (state) => state.classes;

export const { addClass, deleteClass } = classSlice.actions;

export default classSlice.reducer;
