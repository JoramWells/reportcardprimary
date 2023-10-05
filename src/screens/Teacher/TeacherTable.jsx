/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { ToastContainer, toast } from 'react-toastify';
import Title from '../Dashboard/Title';

export default function TeacherTable() {
  const [studentInfo, setStudentInfo] = React.useState([]);

  const navigate = useNavigate();

  const getData = () => {
    const studentData = localStorage.getItem('Teachers');
    const data = JSON.parse(studentData);
    if (data) { setStudentInfo(data); }
  };

  const deleteStudent = (id) => {
    setStudentInfo(studentInfo.filter((student) => student.id !== id));
    localStorage.setItem('Teachers', JSON.stringify(studentInfo.filter((student) => student.id !== id)));
    toast('Deleted teacher');
    // localStorage.todo
  };

  React.useEffect(() => {
    getData();
    console.log([studentInfo]);
  }, []);

  return (
    <>
      <Title>
        Registered Teachers
        {' '}
        (
        {studentInfo.length}
        )
      </Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Second Name</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell align="center">Class</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentInfo.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.secondName}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">
                <Tooltip title="Teacher Profile">
                  <IconButton onClick={() => { navigate(`/student-profile/${row.id}`); }}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                  <IconButton
                    style={{
                      color: '#FD6868',
                    }}
                    onClick={() => { deleteStudent(row.id); }}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ToastContainer />
    </>
  );
}
