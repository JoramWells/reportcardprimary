/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    addStudent: (state) => {
      state.count += 1;
    },
  },
});

export default studentSlice.reducer
