import {
  Box, Button, Grid, Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Dashboard from '../Dashboard';
import ClassesTable from './ClassesTable';

function Classes() {
  const navigate = useNavigate();
  return (
    <Dashboard>
      <Box style={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
      }}
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/add-class')}
        >
          Add Class

        </Button>
      </Box>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <ClassesTable />
        </Paper>
      </Grid>
    </Dashboard>
  );
}

export default Classes;
