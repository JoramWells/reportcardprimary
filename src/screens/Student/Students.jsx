import {
  Box, Button, Grid, Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

import { useSelector } from 'react-redux';
import useColumnNames from '../../constants/columnNames';

function Students() {
  const navigate = useNavigate();
  const student2 = useSelector((state) => state.students);

  const { studentColumn } = useColumnNames();

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
            rows={student2}
            columns={studentColumn}
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
