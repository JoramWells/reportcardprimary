/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import ClassContextProvider from './contexts/classContext';
import ViewSubjects from './screens/Subjects/ViewSubjects';
import StreamContextProvider from './contexts/streamContext';
import Dashboard from './screens/Dashboard';

// const dynamic import
const StudentRoutes = lazy(() => import('./StudentRoutes'));
const Students = lazy(() => import('./screens/Student/Students'));
const AddTeacher = lazy(() => import('./screens/Teacher/AddTeacher'));
const AddSystem = lazy(() => import('./screens/Student/AddSystem'));
const HomeDashboard = lazy(() => import('./screens/Dashboard/HomeDashboard'));
const AddStudent = lazy(() => import('./screens/Student/AddStudent'));
const Register = lazy(() => import('./screens/UserAuth/Register'));
const Login = lazy(() => import('./screens/UserAuth/Login'));

const Teacher = lazy(() => import('./screens/Teacher'));

const Streams = lazy(() => import('./screens/Streams/Streams'));
const AddSubject = lazy(() => import('./screens/Subjects/AddSubject'));
const AddStreams = lazy(() => import('./screens/Streams/AddStreams'));
const AddClass = lazy(() => import('./screens/Clas/AddClass'));
const Classes = lazy(() => import('./screens/Clas/Classes'));
const AddTerms = lazy(() => import('./screens/Terms/AddTerm'));
const Terms = lazy(() => import('./screens/Terms/Terms'));

function App() {
  return (
    <ClassContextProvider>
      <StreamContextProvider>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Dashboard>
          <Suspense fallback={<div>Loading...</div>}>
            <StudentRoutes />
            <Routes>
              <Route exact path="/" element={<HomeDashboard />} />

              <Route path="/add-student" element={<AddStudent />} />
              <Route path="/students" element={<Students />} />

              <Route path="/add-subject" element={<AddSubject />} />
              <Route path="/subjects" element={<ViewSubjects />} />

              <Route path="/add-class" element={<AddClass />} />
              <Route path="/classes" element={<Classes />} />

              <Route path="/add-term" element={<AddTerms />} />
              <Route path="/terms" element={<Terms />} />

              <Route path="/streams" element={<Streams />} />
              <Route path="/add-stream" element={<AddStreams />} />

              <Route path="/add-system" element={<AddSystem />} />
              <Route path="/add-teacher" element={<AddTeacher />} />
              <Route path="/teacher" element={<Teacher />} />

            </Routes>
          </Suspense>

        </Dashboard>
      </StreamContextProvider>
    </ClassContextProvider>

  );
}

export default App;
