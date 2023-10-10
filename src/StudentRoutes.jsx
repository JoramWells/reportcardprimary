/* eslint-disable react/function-component-definition */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ExamContextProvider from './contexts/examContext';
import Report1 from './screens/Dashboard/Report1';
import Report2 from './screens/Dashboard/Report2';
import StudentProfile from './screens/Student/StudentProfile';

const StudentRoutes = () => (
  <ExamContextProvider>
    <Routes>

      <Route path="/report1/:id?" element={<Report1 />} />
      <Route path="/report2/:id?" element={<Report2 />} />
      <Route path="/student-profile/:id?" element={<StudentProfile />} />

    </Routes>
  </ExamContextProvider>
);

export default StudentRoutes;
