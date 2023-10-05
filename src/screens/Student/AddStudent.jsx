/* eslint-disable no-unused-vars */
import {
  FormControl, Button, FormGroup, Paper, TextField, InputLabel, Select, MenuItem,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Dashboard from '../Dashboard';
import { getClassNames, getStudentSubjects } from '../../utils/getStudents';

function AddStudent() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [indexCodeName, setIndexCodeName] = useState('');
  const [houseName, setHouseName] = useState('');
  const [age, setAge] = useState('');
  const [subject, setSubject] = useState('');
  const [division, setDivision] = useState('');

  const [subjects, setSubjects] = useState(getClassNames());

  const [userData, setUserData] = useState([]);

  const inputValues = {
    id: nanoid(),
    firstName,
    secondName,
    indexCodeName,
    className: subject,
    houseName,
    age,
    division,
  };

  const getStudents = () => {
    const data = localStorage.getItem('studentData');
    return JSON.parse(data) || [];
  };

  const [students, setStudents] = useState(getStudents());

  const saveStudent = (student) => {
    localStorage.setItem('studentData', JSON.stringify(student));
  };

  const saveData = () => {
    const newStudent = [...students, inputValues];
    setUserData(newStudent);
    saveStudent(newStudent);
  };

  const getSubjects = () => {
    const data = localStorage.getItem('subjects');
    // if (data) {
    //   setSubjects(JSON.parse(data));
    // }

    return JSON.parse(data) || [];
  };

  const handleChange = (e) => {
    setSubject(e.target.value);
  };

  useEffect(() => {
    const hasUser = localStorage.getItem('studentData');
    if (!hasUser && hasUser.length < 0) {
      localStorage.setItem('studentData', JSON.stringify(userData));
    }
    getSubjects();
  }, []);
  return (
    <Dashboard>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '70vh',
        width: '100%',
        boxSizing: 'border-box',
      }}
      >

        <Paper
          style={{
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            borderRadius: '15px',
          }}
          sx={{
            pt: 5,
            pb: 5,
          }}
          elevation={0}
        >

          <FormGroup style={{
            width: '80%',
          }}
          >
            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size="small"
                sx={{
                  width: '100%',
                }}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>

            {/* password input */}
            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <TextField
                id="outlined-basic"
                label="Second Name"
                variant="outlined"
                size="small"
                style={{
                  width: '100%',
                }}
                onChange={(e) => setSecondName(e.target.value)}
              />
            </FormControl>

            {/* confirm password */}
            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <TextField
                id="outlined-basic"
                label="Scholar Id"
                variant="outlined"
                size="small"
                style={{
                  width: '100%',
                }}
                onChange={(e) => setIndexCodeName(e.target.value)}

              />
            </FormControl>

            {/* classname */}
            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <InputLabel id="demo-simple-select-label">Class name</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subject}
                label="Term"
                size="small"
                onChange={handleChange}
              >
                {subjects.map((item) => (
                  <MenuItem value={item.className}>{item.className}</MenuItem>
                ))}

              </Select>
            </FormControl>

            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <TextField
                id="outlined-basic"
                label="House"
                variant="outlined"
                size="small"
                style={{
                  width: '100%',
                }}
                onChange={(e) => setHouseName(e.target.value)}

              />
            </FormControl>

            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <TextField
                id="outlined-basic"
                label="Age"
                variant="outlined"
                size="small"
                style={{
                  width: '100%',
                }}
                onChange={(e) => setAge(e.target.value)}
              />
            </FormControl>

            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <TextField
                id="outlined-basic"
                label="Division"
                variant="outlined"
                size="small"
                style={{
                  width: '100%',
                }}
                onChange={(e) => setDivision(e.target.value)}

              />
            </FormControl>

            <Button
              variant="contained"
              disableElevation
              style={{
                width: '95%',
                margin: 'auto',
                display: 'block',
                padding: '5px',
                marginTop: '1.5rem',
              }}
              onClick={() => saveData()}
            >
              SAVE STUDENT
            </Button>

            {/* have an account */}

          </FormGroup>

        </Paper>
      </div>
    </Dashboard>
  );
}

export default AddStudent;
