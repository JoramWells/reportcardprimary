/* eslint-disable no-unused-vars */
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {
  Box, Button, Link, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import Attendance from '../Dashboard/Attendance';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

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
    <>
      <Grid item xs={12} md={8} lg={4}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Typography component="p" variant="h4">
            {studentInfo.length}
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            as of 15 March, 2019
          </Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '80%',
          }}
          >
            <div style={{
              backgroundColor: 'whitesmoke',
              borderRadius: '100px',
              padding: '10px',
              width: '35%',
              textAlign: 'center',
              color: 'grey',
            }}
            >
              ECD

            </div>

            <div style={{
              backgroundColor: 'whitesmoke',
              borderRadius: '100px',
              padding: '10px',
              width: '35%',
              textAlign: 'center',
              color: 'grey',
            }}
            >
              Primary

            </div>
          </Box>

          <div>
            <Typography variant="h4" color="text.primary">Registered Teachers</Typography>

          </div>
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
    </>
  );
}
