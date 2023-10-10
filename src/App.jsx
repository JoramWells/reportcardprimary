import { Route, Routes } from 'react-router-dom';
import Login from './screens/UserAuth/Login';
import Register from './screens/UserAuth/Register';
import AddStudent from './screens/Student/AddStudent';
import HomeDashboard from './screens/Dashboard/HomeDashboard';

import AddSystem from './screens/Student/AddSystem';
import AddTeacher from './screens/Teacher/AddTeacher';
import Teacher from './screens/Teacher';
import Students from './screens/Student/Students';
import StudentContextProvider from './contexts/studentContext';
import ClassContextProvider from './contexts/classContext';
import ViewSubjects from './screens/Subjects/ViewSubjects';
import AddSubject from './screens/Subjects/AddSubject';
import Streams from './screens/Streams/Streams';
import AddStreams from './screens/Streams/AddStreams';
import AddClass from './screens/Clas/AddClass';
import Classes from './screens/Clas/Classes';
import Dashboard from './screens/Dashboard';
import StreamContextProvider from './contexts/streamContext';
import SubjectContextProvider from './contexts/subjectContext';
import StudentRoutes from './StudentRoutes';

function App() {
  return (
    <StudentContextProvider>
      <ClassContextProvider>
        <StreamContextProvider>
          <SubjectContextProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <Dashboard>
              <StudentRoutes />
              <Routes>
                <Route exact path="/" element={<HomeDashboard />} />

                <Route path="/add-student" element={<AddStudent />} />
                <Route path="/students" element={<Students />} />

                <Route path="/add-subject" element={<AddSubject />} />
                <Route path="/subjects" element={<ViewSubjects />} />

                <Route path="/add-class" element={<AddClass />} />
                <Route path="/classes" element={<Classes />} />

                <Route path="/streams" element={<Streams />} />
                <Route path="/add-stream" element={<AddStreams />} />

                <Route path="/add-system" element={<AddSystem />} />
                <Route path="/add-teacher" element={<AddTeacher />} />
                <Route path="/teacher" element={<Teacher />} />

              </Routes>
            </Dashboard>
          </SubjectContextProvider>
        </StreamContextProvider>
      </ClassContextProvider>

    </StudentContextProvider>

  );
}

export default App;
