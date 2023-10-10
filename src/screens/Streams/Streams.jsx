import {
  Button, Grid, Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { StreamContext } from '../../contexts/streamContext';
import useColumnNames from '../../constants/columnNames';

function Streams() {
  const navigate = useNavigate();
  const { streams } = useContext(StreamContext);
  const { streamColumn } = useColumnNames();

  return (
    <>
      <div style={{
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
      </div>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <DataGrid
            rows={streams}
            columns={streamColumn}
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
