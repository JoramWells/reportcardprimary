/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */

import { Grid, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllStudents } from '../../../_features/student/studentSlice';
import usePositionApi from '../../../hooks/usePositionApi';

const StudentPerformanceSummary = () => {
  const { id } = useParams();

  const students = useSelector(selectAllStudents);
  const student = students.filter(
    (user) => user.id.toLowerCase().includes(id.toLowerCase()),
  );

  const studentName = `${student[0].firstName} ${student[0].secondName}`;
  const { getStudentPosition } = usePositionApi();
  const studentPstn = getStudentPosition(studentName);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 300,
        }}
      >
        <Typography
          variant="h6"
          style={{
            color: 'primary',
          }}
        >
          Performace Analysis
        </Typography>
        {/* <StudentPerformanceChart /> */}
        <ul>
          <li>
            Class Name:
            {' '}
            {student[0].className}

          </li>
          <li>
            Stream Name:
            {' '}
            {student[0].streamName}

          </li>
          <li>
            Number of Students:
            {' '}
            {student[0].noOfStudents}
          </li>
          <li>
            Position of Student:
            {' '}
            {studentPstn + 1}
          </li>
        </ul>
      </Paper>
    </Grid>
  );
};

export default StudentPerformanceSummary;
