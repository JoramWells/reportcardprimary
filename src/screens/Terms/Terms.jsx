/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

import {
  Button,
  Grid, Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { getFromStorage } from '../../utils/localStorage';

const columns = [
  {
    field: 'termName',
    headerName: 'Term Name',
    flex: 1,
  },
  {
    field: 'startDate',
    headerName: 'Start Date',
    flex: 1,

  },
  {
    field: 'endDate',
    headerName: 'End Date',
    flex: 1,

  },

];

export default function Terms() {
  const [termData, setTermData] = useState(getFromStorage('Terms'));

  const navigate = useNavigate();

  const deleteStudent = (id) => {
    setTermData(termData.filter((student) => student.id !== id));
    localStorage.setItem('studentData', JSON.stringify(termData.filter((student) => student.id !== id)));
    // localStorage.todo
  };

  // const { results } = useLocalStorageFilterApi(studentInfo);
  // console.log(results, 'resultx');

  return (
    <>

      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button onClick={() => navigate('/add-term')} variant="contained" disableElevation>Add Term</Button>
      </Grid>
      <Grid item xs={12} lg={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

          <DataGrid
            rows={termData}
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
