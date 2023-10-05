/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Title from '../Dashboard/Title';
import { useSubjectApi } from '../../hooks/useSubjectApi';

export default function StudentPerformance() {
  const [studentInfo, setStudentInfo] = useState([]);

  const { studentSubjectByID, getStudentSubjectById } = useSubjectApi();

  const navigate = useNavigate();

  const getData = () => {
    const studentData = localStorage.getItem('studentData');
    const data = JSON.parse(studentData);
    if (data) { setStudentInfo(data); }
  };

  const { id } = useParams();

  const deleteStudent = (studentId) => {
    setStudentInfo(studentInfo.filter((student) => student.id !== studentId));
    localStorage.setItem('studentData', JSON.stringify(studentInfo));
    // localStorage.todo
  };

  const { deleteStudentSubject } = useSubjectApi();

  useEffect(() => {
    getData();
    getStudentSubjectById(id);
  }, []);

  return (
    <>
      <Title>Exam Results</Title>

      <Table size="small">
        <TableHead>
          <TableRow style={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
          >
            <TableCell>Term</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Marks</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentSubjectByID.map((row) => (
            <TableRow key={row.id}>
              <TableCell style={{
                fontWeight: 'bold',
                color: 'grey',
              }}
              >
                {row.term}

              </TableCell>
              <TableCell>{row.subject}</TableCell>
              <TableCell>{row.marks}</TableCell>
              <TableCell align="center">
                <Tooltip title="Delete">
                  <IconButton
                    style={{
                      color: '#FD6868',
                    }}
                    onClick={() => { deleteStudentSubject(row.id); }}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
