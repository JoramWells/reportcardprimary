/* eslint-disable no-useless-concat */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */

import {
  Box, Button, FormControl, FormGroup, InputLabel, MenuItem, Modal, Select, TextField,
} from '@mui/material';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addExam } from '../../_features/exams/examSlice';
import { getFromStorage } from '../../utils/localStorage';
import { selectAllStudents } from '../../_features/student/studentSlice';
import { selectAllSubjects } from '../../_features/subjects/subjectSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '50%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
};

const AddExam = ({ open, handleClose }) => {
  const subjects = useSelector(selectAllSubjects);
  console.log(subjects, 'all subjects');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const [term, setTerm] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const { id } = useParams();

  const students = useSelector(selectAllStudents);
  const student = students.filter(
    (user) => user.id.toLowerCase().includes(id.toLowerCase()),
  );

  const inputValues = {
    id: nanoid(),
    studentId: id,
    studentName: `${`${student[0].firstName} ${student[0].secondName}`}`,
    term,
    category,
    className: student[0].className,
    subject,
    marks,
    ['marks-' + `${term}`]: marks,

  };

  const saveExams = () => {
    dispatch(
      addExam(inputValues),
    );
  };

  return (

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        height: '800px',
      }}
    >
      <Box sx={style}>
        <FormGroup
          style={{
            width: '70%',
            margin: 'auto',
          }}
        >
          {/* subject */}
          {student[0].type === 'ECD'
            ? (
              <FormControl
                style={{
                  margin: '1rem',
                }}
              >
                <InputLabel id="demo-simple-select-label">Select Term</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={term}
                  label="Term"
                  size="small"
                  onChange={(e) => setTerm(e.target.value)}
                >
                  <MenuItem value="Monthly">Monthly</MenuItem>
                  <MenuItem value="EOT">EOT</MenuItem>

                </Select>
              </FormControl>
            )
            : (
              <FormControl
                style={{
                  margin: '1rem',
                }}
              >
                <InputLabel id="demo-simple-select-label">Select Term</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={term}
                  label="Term"
                  size="small"
                  onChange={(e) => setTerm(e.target.value)}
                >
                  {getFromStorage('Terms').map((item) => (
                    <MenuItem key={item.id} value={item.termName}>{item.termName}</MenuItem>
                  ))}

                </Select>
              </FormControl>
            )}

          {/* catergory */}
          <FormControl
            style={{
              margin: '1rem',
            }}
          >
            <InputLabel id="demo-simple-select-label">Select Exam Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Term"
              size="small"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="BOT">BOT</MenuItem>
              <MenuItem value="MID">MID</MenuItem>
              <MenuItem value="EOT">EOT</MenuItem>

            </Select>
          </FormControl>
          {/* subject */}
          <FormControl
            style={{
              margin: '1rem',
            }}
          >
            <InputLabel id="demo-simple-select-label">Select Subject</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={subject}
              label="Term"
              size="small"
              onChange={(e) => setSubject(e.target.value)}
            >
              {subjects.map((item) => (
                <MenuItem key={item.id} value={item.subject}>{item.subject}</MenuItem>
              ))}

            </Select>
          </FormControl>

          {/* marks */}
          <FormControl
            style={{
              margin: '1rem',
            }}
          >
            <TextField
              id="outlined-basic"
              label="Marks"
              variant="outlined"
              size="small"
              sx={{
                width: '100%',
              }}
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />
          </FormControl>
          <Button
            variant="contained"
            sx={{
              width: '95%',
              display: 'block',
              margin: 'auto',
              marginTop: '2rem',

            }}
            onClick={() => { saveExams(); }}
          >
            Save

          </Button>

        </FormGroup>
      </Box>
    </Modal>

  );
};

export default AddExam;

AddExam.defaultProps = {
  open: false,
};

AddExam.propTypes = {
  open: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  handleClose: PropTypes.func,
};
