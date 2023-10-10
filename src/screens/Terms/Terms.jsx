/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';

import {
  Button,
  Grid, IconButton, Paper, Tooltip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { DataGrid } from '@mui/x-data-grid';
import { getFromStorage } from '../../utils/localStorage';
import { useLocalStorageFilterApi } from '../../hooks/useLocalStorageFilterApi';

const columns = [
  {
    field: 'subject',
    headerName: 'Subject Name',
    flex: 1,
  },
  {
    field: 'teacher',
    headerName: 'Subject Teacher',
    flex: 1,

  },
  {
    field: 'classes',
    headerName: 'Taught In',
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
