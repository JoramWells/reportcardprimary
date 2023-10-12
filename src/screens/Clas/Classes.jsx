/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */

import {
  Box, Button, Grid, Paper, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from '@mui/x-data-grid';

import { useSelector } from 'react-redux';

import { selectAllClasses } from '../../_features/clases/classSlice';
import useColumnNames from '../../constants/columnNames';

function Classes() {
  const navigate = useNavigate();
  const allClasses = useSelector(selectAllClasses);
  const { classColumns } = useColumnNames();
  // const universalClass = getFromStorage('UniversalClass');

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
          {allClasses.length}
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
        <Box style={{
          borderRadius: '15px',
          height: '150px',
          backgroundColor: '#E3F2FF',
          padding: '20px',
        }}
        >
          <Typography>You cannot view a Class Unless You and a Stream</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <DataGrid
            rows={allClasses}
            columns={classColumns}
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
