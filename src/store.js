/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './_features/student/studentSlice';
import examReducer from './_features/exams/examSlice';
import subjectReducer from './_features/subjects/subjectSlice';
import classReducer from './_features/clases/classSlice';
import streamReducer from './_features/streams/streamSlice';

export const store = configureStore({
  reducer: {
    students: studentReducer,
    exams: examReducer,
    subjects: subjectReducer,
    classes: classReducer,
    streams: streamReducer,

  },
});
