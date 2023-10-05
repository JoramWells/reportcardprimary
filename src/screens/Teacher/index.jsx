import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Attendance from '../Dashboard/Attendance';
import TeacherTable from './TeacherTable';

export default function Teacher() {
  const navigate = useNavigate();
  return (
    <Dashboard>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Attendance />
        </Paper>
      </Grid>

      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
            alignItems: 'center',
          }}
        >
          <Button onClick={() => navigate('/add-teacher')} variant="contained" disableElevation>Add Teacher</Button>
        </Paper>
      </Grid>

      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <TeacherTable />
        </Paper>
      </Grid>
    </Dashboard>
  );
}
