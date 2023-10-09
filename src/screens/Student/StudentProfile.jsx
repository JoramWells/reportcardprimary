/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-concat */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import {
  Box, Button, FormControl, FormGroup, Grid, IconButton, InputLabel,
  MenuItem, Modal, Paper, Select, TextField, Typography,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import PrintIcon from '@mui/icons-material/Print';
import { DataGrid } from '@mui/x-data-grid';
import { useStudentApi } from '../../hooks/useStudentApi';
import { getSubjects } from '../../utils/subjectFuncs';
import { useSubjectApi } from '../../hooks/useSubjectApi';
import StudentPerformanceBarChart from './StudentPerformanceBarChart';
import { findTerm } from '../../utils/calculate';
import { SubjectContext } from '../../contexts/subjectContext';
import { getFromStorage } from '../../utils/localStorage';
import { findStudentPstn, returnObjectTotal, sortItems } from '../../utils/utilityFunctions';

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

const columns = [
  {
    field: 'term',
    headerName: 'Term',
    flex: 1,
  },
  {
    field: 'subject',
    headerName: 'Subject',
    flex: 1,

  },
  {
    field: 'marks',
    headerName: 'Marks',
    flex: 1,

  },

];

function StudentProfile() {
  const [subjects, setSubjects] = useState(getSubjects());
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const [term, setTerm] = useState('');

  const { results } = useStudentApi();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSubject(e.target.value);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const { id } = useParams();

  const {
    saveStudentSubjectByID, studentSubjectByID,
    getStudentSubjectById,
  } = useSubjectApi();

  const inputValues = {
    id: nanoid(),
    studentId: id,
    studentName: `${`${results[0].firstName} ${results[0].secondName}`}`,
    term,
    className: results[0].className,
    subject,
    marks,
    'average-BOT': findTerm(studentSubjectByID, 'BOT'),
    ['marks-' + `${term}`]: marks,

  };

  const arrays = getFromStorage('studentSubjects');
  const resultList = returnObjectTotal(arrays, 'Class 4');
  const pstn = sortItems(resultList);
  const studentName = `${results[0].firstName} ${results[0].secondName}`;
  console.log(findStudentPstn(pstn, studentName), 'student');

  // const savedSubjects = getStudentSubjectById(id);
  const {
    saveStudentSubject, getStudentExamDetails,
    studentExamDetail,
  } = useContext(SubjectContext);

  useEffect(() => {
    getStudentSubjectById(id);
  }, []);

  return (
    <>
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
          >Performace Analysis
          </Typography>
          {/* <StudentPerformanceChart /> */}
          <ul>
            <li>
              Class Name: {results[0].className}

            </li>
            <li>
              Stream Name: {results[0].streamName}

            </li>
            <li>
              Number of Students: {results[0].noOfStudents}
            </li>
          </ul>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 300,
          }}
        >
          <Box style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          >
            <Typography
              variant="h6"
              style={{
                color: 'primary',
                textDecoration: 'underline',
              }}
            >Average Performance per Term
            </Typography>

            <IconButton onClick={() => {
              results[0].type === 'ECD'
                ? navigate(`/report2/${id}?term=${term}`)
                : navigate(`/report1/${id}`);
            }}
            >
              <PrintIcon />
            </IconButton>
          </Box>
          <StudentPerformanceBarChart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
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
            src={results[0].profile}
            alt={results[0].firstName}
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              borderRadius: '100px',
            }}
          />
          <Typography
            variant="h6"
          >{results[0].firstName} {results[0].secondName} {results[0].age} yrs
          </Typography>

          <div style={{
            fontWeight: 'bold',
            fontSize: '12px',
            backgroundColor: 'whitesmoke',
            padding: '2px',
          }}
          >
            {results[0].className}
          </div>
          <div style={{
            // fontWeight: 'bold',
            color: 'grey',
            fontSize: '12px',
          }}
          >
            {results[0].indexCodeName} (code)
          </div>
          <Button
            variant="contained"
            disableElevation
            style={{

              marginTop: '1rem',
            }}
          >Edit Profile
          </Button>

          {/* add exam */}

          <Box sx={{
            marginTop: '1rem',
          }}
          >
            <Button onClick={handleOpen} disableElevation>Add Exams</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <FormGroup
                  style={{
                    width: '70%',
                    margin: 'auto',
                  }}
                >
                  {/* subject */}
                  {results[0].type === 'ECD'
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
                          onChange={handleTermChange}
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
                          onChange={handleTermChange}
                        >
                          <MenuItem value="BOT">BOT</MenuItem>
                          <MenuItem value="MID">MID</MenuItem>
                          <MenuItem value="EOT">EOT</MenuItem>

                        </Select>
                      </FormControl>
                    )}

                  {/* term */}
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
                      onChange={handleChange}
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
                    onClick={() => { saveStudentSubject(inputValues); }}
                  >
                    Save

                  </Button>

                </FormGroup>
              </Box>
            </Modal>

          </Box>

        </Paper>
      </Grid>

      {/* table */}

      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>

          <DataGrid
            columns={columns}
            rows={studentSubjectByID}
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
      <ToastContainer />

    </>
  );
}

export default StudentProfile;
