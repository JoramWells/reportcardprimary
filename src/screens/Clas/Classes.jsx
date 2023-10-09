/* eslint-disable no-unused-vars */
import { useState } from 'react';

import {
  Box, Button, Grid, IconButton, Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import Dashboard from '../Dashboard';
import { getFromStorage } from '../../utils/localStorage';

const classes = getFromStorage('Classes');

function Classes() {
  const navigate = useNavigate();
  const [studentInfo, setStudentInfo] = useState([]);
  const [selection, setSelection] = useState([]);
  const [rows, setRows] = useState(classes);

  const deleteStudent = (id) => {
    setStudentInfo(studentInfo.filter((student) => student.id !== id));
    localStorage.setItem('Classes', JSON.stringify(classes.filter((student) => student.id !== id)));
  // localStorage.todo
  };

  const columns = [
    {
      field: 'className',
      headerName: 'Class Name',
      flex: 1,
    },
    {
      field: 'classTeacher',
      headerName: 'Class Teacher',
      flex: 1,

    },
    {
      field: 'noOfStudents',
      headerName: 'Number of Students',
      flex: 1,

    },
    {
      field: 'registeredStudents',
      headerName: 'Registered Students',
      flex: 1,

    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      sortable: false,
      renderCell: () => (
        <IconButton onClick={() => {
          const selectedIDs = new Set(selection);
          setRows((r) => r.filter((x) => !selectedIDs.has(x.id)));
          console.log(selectedIDs);
          deleteStudent();
        }}
        >
          <DeleteOutlineIcon />
        </IconButton>
      ),

    },
  ];
  return (
    <Dashboard>
      <Box style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
      >
        <Paper>
          Available Classes
          {' '}
          {classes.length}
        </Paper>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/add-class')}
        >
          Add Class

        </Button>
      </Box>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <DataGrid
            rows={classes}
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

export default Classes;
