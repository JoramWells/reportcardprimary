/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './_features/student/studentSlice';

export const store = configureStore({
  reducer: {
    students: studentReducer,

  },
});
