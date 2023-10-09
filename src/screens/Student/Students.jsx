import {
  Box, Button, Grid, IconButton, Paper,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useContext } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { StudentContext } from '../../contexts/studentContext';

function Students() {
  const navigate = useNavigate();
  const { students, deleteStudent } = useContext(StudentContext);

  const columns = [
    {
      field: 'id',
      headerName: 'First Name',
      flex: 1,
      renderCell: (params) => <Link to={`/student-profile/${params.row.id}`}>{params.row.firstName}</Link>,

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
      field: 'category',
      headerName: 'Category',
      flex: 1,

    },
    {
      field: 'className',
      headerName: 'Class Name',
      flex: 1,

    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() => deleteStudent(params.row.id)}>
          <DeleteOutlineIcon />
        </IconButton>
      ),

    },
  ];
  return (
    <>
      <Box style={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
      }}
      >
        <Button
          variant="contained"
          disableElevation
          style={{
            fontWeight: 'bold',
          }}
          onClick={() => navigate('/add-student')}
        >
          Add Student

        </Button>
      </Box>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <DataGrid
            rows={students}
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

export default Students;
