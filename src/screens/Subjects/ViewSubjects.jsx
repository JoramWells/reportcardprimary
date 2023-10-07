/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import {
  Button,
  Grid, IconButton, Paper, Tooltip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { nanoid } from 'nanoid';
import { DataGrid } from '@mui/x-data-grid';
import TableComponent from '../../components/TableComponent';
import Dashboard from '../Dashboard';

const columns = [
  {
    field: 'firstName',
    headerName: 'First Name',
    flex: 1,
  },
  {
    field: 'secondName',
    headerName: 'Second Name',
    flex: 1,

  },
  {
    field: 'indexCode',
    headerName: 'Index Code',
    flex: 1,

  },
  {
    field: 'age',
    headerName: 'Age (Yrs)',
    flex: 1,

  },
  {
    field: 'className',
    headerName: 'Class Name',
    flex: 1,

  },
  {
    field: 'category',
    headerName: 'Category',
    flex: 1,

  },
];

export default function ViewSubjects() {
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
    <Dashboard>

      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button onClick={() => navigate('/add-subject')} variant="contained" disableElevation>Add Subject</Button>
      </Grid>
      <Grid item xs={12} lg={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          {/* <TableComponent columns={columns}
          data={studentInfo} navigationLink="/student-profile/" /> */}

          <DataGrid
            rows={studentInfo}
            columns={columns}
            disableRowSelectionOnClick
            sx={{
              '.MuiDataGrid-columnHeaderTitle': {
                fontWeight: 'bold !important',
                overflow: 'visible !important',
              },
            }}
          />

        </Paper>

      </Grid>
    </Dashboard>
  );
}
