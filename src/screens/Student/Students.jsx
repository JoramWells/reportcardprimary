import {
  Box, Button, Grid, Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import TableComponent from '../../components/TableComponent';
import { getFromStorage } from '../../utils/localStorage';

const columns = [{
  id: nanoid(),
  columnName: 'First Name',
},
{
  id: nanoid(),
  columnName: 'Second Name',
}, {
  id: nanoid(),
  columnName: 'Index Code',
},
{
  id: nanoid(),
  columnName: 'Age (Yrs)',
},
{
  id: nanoid(),
  columnName: 'Category',
},
{
  id: nanoid(),
  columnName: 'Classname',
},
{
  id: nanoid(),
  columnName: 'Action',
},
];

function Students() {
  const navigate = useNavigate();
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
          <TableComponent
            columns={columns}
            data={getFromStorage('studentData')}
            navigationLink="/student-profile/"
          />

        </Paper>
      </Grid>
    </>
  );
}

export default Students;
