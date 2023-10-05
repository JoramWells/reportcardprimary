import { Route, Routes } from 'react-router-dom';
import Login from './screens/UserAuth/Login';
import Register from './screens/UserAuth/Register';
import Report1 from './screens/Dashboard/Report1';
import AddStudent from './screens/Student/AddStudent';
import HomeDashboard from './screens/Dashboard/HomeDashboard';
import AddSubject from './screens/Student/AddSubject';
import StudentProfile from './screens/Student/StudentProfile';
import AddClass from './screens/Student/AddClass';
import AddSystem from './screens/Student/AddSystem';
import AddTeacher from './screens/Student/AddTeacher';
import Teacher from './screens/Teacher';
import Students from './screens/Student/Students';
import Classes from './screens/Teacher/Classes';
import StudentContextProvider from './contexts/studentContext';
import ClassContextProvider from './contexts/className';
import Report2 from './screens/Dashboard/Report2';

function App() {
  // const downloadPDF = () => {
  //   const capture = document.querySelector('.actual-receipt');
  //   setLoader(loader);
  //   html2canvas(capture).then((canvas) => {
  //     const imgData = canvas.toDataURL('/img/jpeg', 1.0);
  //     const doc = new jsPDF('p', 'mm', 'a4');
  //     const componentWidth = doc.internal.pageSize.getWidth();
  //     const componentHeight = doc.internal.pageSize.getHeight();
  //     doc.addImage(imgData, 'JPEG', 0, 0, componentWidth, componentHeight);
  //     setLoader(false);
  //     doc.save('receipt.pdf');
  //   });
  // };

  return (
    <StudentContextProvider>
      <ClassContextProvider>
        <Routes>
          <Route exact path="/" element={<HomeDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/report1/:id?" element={<Report1 />} />
          <Route path="/report2/:id?" element={<Report2 />} />

          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/students" element={<Students />} />

          <Route path="/add-subject" element={<AddSubject />} />
          <Route path="/add-class" element={<AddClass />} />
          <Route path="/class" element={<Classes />} />

          <Route path="/add-system" element={<AddSystem />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
          <Route path="/teacher" element={<Teacher />} />

          <Route path="/student-profile/:id?" element={<StudentProfile />} />

        </Routes>
      </ClassContextProvider>

    </StudentContextProvider>

  );
}

export default App;
