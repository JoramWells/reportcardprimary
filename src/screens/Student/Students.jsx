import {
  Box, Button, Grid, Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Orders from '../Dashboard/Orders';

function Students() {
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
          <Orders />
        </Paper>
      </Grid>
    </Dashboard>
  );
}

export default Students;
