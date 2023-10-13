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
import { blue } from '@mui/material/colors';
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
      />
      <Grid item xs={12}>

        <Paper
          style={{
            width: '100%',
            height: '200px',
            padding: '10px',
            backgroundColor: blue[500],
            position: 'relative',
            borderRadius: '20px',
          }}
          elevation={0}
        >
          <Typography variant="h4" color="white">
            Classes
          </Typography>
          {' '}
          <div style={{
            // position: 'absolute',
            // bottom: '100px',
            color: 'white',
            marginTop: '.4rem',
          }}
          >
            <Typography variant="h6">
              Registered
            </Typography>
            {allClasses.length}
            {' '}
            classes
            <br />
            2 streams
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              color: 'white',
            }}
          >
            <FormGroup>
              <FormControlLabel control={<Switch checked={checked} onChange={() => setChecked(!checked)} />} label="Advanced View" />
            </FormGroup>
          </div>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate('/add-class')}
            sx={{
              position: 'absolute',
              right: '10px',
              bottom: '10px',
              color: 'white',
              backgroundColor: blue[500],
              borderRadius: '100px',
              border: '3px solid white',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
            disableElevation
          >
            Add Class

          </Button>
        </Paper>

        {/* Switch */}

      </Grid>
      <Grid item xs={12}>
        <Paper elevation={0} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
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
                getRowClassName={(params) => `super-app-theme--${params.row.className}`}
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
