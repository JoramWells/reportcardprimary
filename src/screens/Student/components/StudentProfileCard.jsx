/* eslint-disable no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import {
  Button, Grid, Paper, Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddExam from '../AddExam';
import { selectAllStudents } from '../../../_features/student/studentSlice';

const StudentProfileCard = ({ open, handleClose }) => {
  const { id } = useParams();

  const students = useSelector(selectAllStudents);
  const student = students.filter(
    (user) => user.id.toLowerCase().includes(id.toLowerCase()),
  );

  return (
    <Grid item xs={12} md={4} lg={3}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 300,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={student[0].profile}
          alt={student[0].firstName}
          style={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '100px',
          }}
        />
        <Typography
          variant="h6"
        >
          {student[0].firstName}
          {' '}
          {student[0].secondName}
          {' '}
          {student[0].age}
          {' '}
          yrs
        </Typography>

        <div style={{
          fontWeight: 'bold',
          fontSize: '12px',
          backgroundColor: 'whitesmoke',
          padding: '2px',
        }}
        >
          {student[0].className}
        </div>
        <div style={{
        // fontWeight: 'bold',
          color: 'grey',
          fontSize: '12px',
        }}
        >
          {student[0].indexCodeName}
          {' '}
          (code)
        </div>
        <Button
          variant="contained"
          disableElevation
          style={{

            marginTop: '1rem',
          }}
        >
          Edit Profile
        </Button>

        {/* add exam */}
        <AddExam open={open} handleClose={handleClose} />

      </Paper>
    </Grid>
  );
};

export default StudentProfileCard;

StudentProfileCard.defaultProps = {
  open: false,
};

StudentProfileCard.propTypes = {
  open: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  handleClose: PropTypes.func,
};
