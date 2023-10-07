/* eslint-disable no-unused-vars */
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import Attendance from '../Dashboard/Attendance';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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
    field: 'phoneNumber',
    headerName: 'Phone Number',
    flex: 1,

  },
  {
    field: 'system',
    headerName: 'System',
    flex: 1,

  },
];

export default function Teacher() {
  const [studentInfo, setStudentInfo] = useState([]);

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

  useEffect(() => {
    getData();
    console.log([studentInfo]);
  }, []);

  return (
    <Dashboard>
      <Grid item xs={12} md={8} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          {/* <Attendance /> */}
          <Typography>Registered Teachers</Typography>
        </Paper>
      </Grid>

      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
            alignItems: 'center',
          }}
        >
          <Button onClick={() => navigate('/add-teacher')} variant="contained" disableElevation>Add Teacher</Button>
        </Paper>
      </Grid>

      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
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
