/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-concat */
import {
  Box, Button, Grid, IconButton, Paper, Typography,
} from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PrintIcon from '@mui/icons-material/Print';
import { DataGrid } from '@mui/x-data-grid';

import { useSelector } from 'react-redux';
import StudentPerformanceBarChart from './StudentPerformanceBarChart';

import useColumnNames from '../../constants/columnNames';
import StudentProfileCard from './components/StudentProfileCard';
import { selectAllExams } from '../../_features/exams/examSlice';
import StudentPerformanceSummary from './components/StudentPerformanceSummary';

function StudentProfile() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { id } = useParams();
  const exam2 = useSelector(selectAllExams);

  const exams = exam2.filter((item) => item.studentId.toLowerCase()
    .includes(id.toLowerCase()));

  const { examColumn } = useColumnNames();

  return (
    <>

      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >

        <Button variant="outlined" onClick={handleOpen} disableElevation>Add Exams</Button>

      </Grid>

      <StudentPerformanceSummary />

      <Grid item xs={12} md={6} lg={5}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 300,
          }}
        >
          <Box style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          >
            <Typography
              variant="h6"
              style={{
                color: 'primary',
                textDecoration: 'underline',
              }}
            >
              Average Performance per Term
            </Typography>

            <IconButton>
              <PrintIcon />
            </IconButton>
          </Box>
          <StudentPerformanceBarChart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}

      <StudentProfileCard open={open} handleClose={handleClose} />
      {/* table */}

      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

          <DataGrid
            columns={examColumn}
            rows={exams}
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
      <ToastContainer />

    </>
  );
}

export default StudentProfile;
