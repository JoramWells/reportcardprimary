/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './_features/student/studentSlice';
import examReducer from './_features/exams/examSlice';

export const store = configureStore({
  reducer: {
    students: studentReducer,
    exams: examReducer,

  },
});
