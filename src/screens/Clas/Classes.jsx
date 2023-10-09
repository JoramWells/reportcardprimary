/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';

import {
  Box, Button, Grid, IconButton, Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { ClassContext } from '../../contexts/classContext';
import { getFromStorage } from '../../utils/localStorage';

function Classes() {
  const navigate = useNavigate();
  const { classes, deleteClass } = useContext(ClassContext);
  const universalClass = getFromStorage('UniversalClass');

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
      renderCell: (params) => (
        <IconButton onClick={() => {
          deleteClass(params.row.id);
        }}
        >
          <DeleteOutlineIcon />
        </IconButton>
      ),

    },
  ];

  const universalColumn = [
    {
      field: 'className',
      headerName: 'Class Name',
      flex: 1,
    },
    {
      field: 'classTeacher',
      headerName: 'Class Teacher',
      flex: 1,
      // renderCell: (params) => (
      //   <ul>
      //     {params.classTeacher.map((classTeacher, idx) => (
      //       <li key={idx}>{classTeacher}</li>
      //     ))}
      //   </ul>
      // ),

    },
    {
      field: 'noOfStudents',
      headerName: 'Number of Students',
      flex: 1,
      // renderCell: (params) => (
      //   <ul>
      //     {params.noOfStudents.map((noOfStudents, idx) => (
      //       <li key={idx}>{noOfStudents}</li>
      //     ))}
      //   </ul>
      // ),

    },
    {
      field: 'registeredStudents',
      headerName: 'Registered Students',
      flex: 1,
      // renderCell: (params) => (
      //   <ul>
      //     {params.registeredStudents.map((registeredStudents, idx) => (
      //       <li key={idx}>{registeredStudents}</li>
      //     ))}
      //   </ul>
      // ),

    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() => {
          deleteClass(params.row.id);
        }}
        >
          <DeleteOutlineIcon />
        </IconButton>
      ),

    },
  ];
  return (
    <>
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
            rows={universalClass?.length > 0 ? universalClass : classes}
            columns={universalClass?.length > 0 ? universalColumn : columns}
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

export default Classes;
