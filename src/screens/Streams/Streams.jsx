import {
  Box, Button, Grid, IconButton, Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useContext } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { StreamContext } from '../../contexts/streamContext';

function Streams() {
  const navigate = useNavigate();
  const { streams, deleteStream } = useContext(StreamContext);
  const columns = [
    {
      field: 'className',
      headerName: 'Class Name',
      flex: 1,
    },
    {
      field: 'streamName',
      headerName: 'Stream Name',
      flex: 1,

    },
    {
      field: 'noOfStudents',
      headerName: 'Number of Students',
      flex: 1,

    },
    {
      field: 'classTeacher',
      headerName: 'Class Teacher',
      flex: 1,

    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() => deleteStream(params.row.id)}>
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
          onClick={() => navigate('/add-stream')}
        >
          Add Stream

        </Button>
      </Box>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <DataGrid
            rows={streams}
            columns={columns}
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

export default Streams;
