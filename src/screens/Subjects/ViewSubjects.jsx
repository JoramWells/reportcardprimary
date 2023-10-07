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
import { DataGrid } from '@mui/x-data-grid';
import Dashboard from '../Dashboard';
import { getFromStorage } from '../../utils/localStorage';
import { useLocalStorageFilterApi } from '../../hooks/useLocalStorageFilterApi';

const columns = [
  {
    field: 'subject',
    headerName: 'Subject Name',
    flex: 1,
  },
  {
    field: 'teacher',
    headerName: 'Subject Teacher',
    flex: 1,

  },
  {
    field: 'classes',
    headerName: 'Taught In',
    flex: 1,

  },

];

export default function ViewSubjects() {
  const [studentInfo, setStudentInfo] = useState(getFromStorage('subjects'));

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

  // const { results } = useLocalStorageFilterApi(studentInfo);
  // console.log(results, 'resultx');

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
