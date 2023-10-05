/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { nanoid } from 'nanoid';
import EditIcon from '@mui/icons-material/Edit';

import Title from '../Dashboard/Title';

const columns = [{
  id: nanoid(),
  columnName: 'Class Name',
},
{
  id: nanoid(),
  columnName: 'Class Teacher',
}, {
  id: nanoid(),
  columnName: 'No. of Students',
},
{
  id: nanoid(),
  columnName: 'Action',
},
];

export default function ClassesTable() {
  const [studentInfo, setStudentInfo] = useState([]);

  const navigate = useNavigate();

  const getData = () => {
    const studentData = localStorage.getItem('Classes');
    const data = JSON.parse(studentData);
    if (data) { setStudentInfo(data); }
  };

  const deleteStudent = (id) => {
    setStudentInfo(studentInfo.filter((student) => student.id !== id));
    localStorage.setItem('Classes', JSON.stringify(studentInfo.filter((student) => student.id !== id)));
    // localStorage.todo
  };

  useEffect(() => {
    getData();
    console.log([studentInfo]);
  }, []);

  return (
    <>
      <Title>
        Available Classes
        {' '}
        (
        {studentInfo.length}
        )
      </Title>

      <Table size="small">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align="left"
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
              >
                {column.columnName}

              </TableCell>
            ))}

          </TableRow>
        </TableHead>
        <TableBody>
          {studentInfo.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.className}</TableCell>
              <TableCell>{row.classTeacher}</TableCell>
              <TableCell>{row.noOfStudents}</TableCell>
              <TableCell style={{
                backgroundColor: 'whitesmoke',
              }}
              >
                <Tooltip title="Edit Class">
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
    </>
  );
}
