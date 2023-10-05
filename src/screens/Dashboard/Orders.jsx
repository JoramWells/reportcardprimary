/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { IconButton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { nanoid } from 'nanoid';
import Title from './Title';
import TableComponent from '../../components/TableComponent';

const columns = [{
  id: nanoid(),
  columnName: 'First Name',
},
{
  id: nanoid(),
  columnName: 'Second Name',
}, {
  id: nanoid(),
  columnName: 'Index Code',
},
{
  id: nanoid(),
  columnName: 'Age (Yrs)',
},
{
  id: nanoid(),
  columnName: 'Classname',
},
{
  id: nanoid(),
  columnName: 'category',
},
{
  id: nanoid(),
  columnName: 'Action',
},
];

export default function Orders() {
  const [studentInfo, setStudentInfo] = useState([]);

  const navigate = useNavigate();

  const getData = () => {
    const studentData = localStorage.getItem('studentData');
    const data = JSON.parse(studentData);
    if (data) { setStudentInfo(data); }
  };

  const deleteStudent = (id) => {
    setStudentInfo(studentInfo.filter((student) => student.id !== id));
    localStorage.setItem('studentData', JSON.stringify(studentInfo.filter((student) => student.id !== id)));
    // localStorage.todo
  };

  useEffect(() => {
    getData();
    console.log([studentInfo]);
  }, []);

  return (
    <TableComponent columns={columns} data={studentInfo} navigationLink="/student-profile/" />
  );
}
