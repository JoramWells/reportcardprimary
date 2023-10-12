/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */

import {
  Box, Button, FormControlLabel, FormGroup, Grid, Paper, Switch, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from '@mui/x-data-grid';

import { useSelector } from 'react-redux';

import { useState } from 'react';
import { selectAllClasses } from '../../_features/clases/classSlice';
import useColumnNames from '../../constants/columnNames';
import { getFromStorage } from '../../utils/localStorage';

function Classes() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const allClasses = useSelector(selectAllClasses);
  const { classColumns, universalColumn } = useColumnNames();
  const universalClass = getFromStorage('UniversalClass');

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
        {/* Switch */}
        <FormGroup>
          <FormControlLabel control={<Switch checked={checked} onChange={() => setChecked(!checked)} />} label="Advanced View" />
        </FormGroup>

      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          {checked
            ? (
              <DataGrid
                rows={universalClass}
                columns={universalColumn}
                disableRowSelectionOnClick
                sx={{
                  '.MuiDataGrid-columnHeaderTitle': {
                    fontWeight: 'bold !important',
                    overflow: 'visible !important',
                  },
                }}
              />
            )
            : (
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
            )}

        </Paper>
      </Grid>
    </>
  );
}

export default Classes;
