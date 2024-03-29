/* eslint-disable no-unused-vars */
import {
  FormControl, Button, FormGroup, Paper, TextField, InputLabel, Select, MenuItem,
} from '@mui/material';
import { useEffect, useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';

import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function AddTeacher() {
  // get route path
  const location = useLocation();
  const { pathname } = location;

  const getTeachers = () => {
    const data = localStorage.getItem('Teachers');
    return JSON.parse(data) || [];
  };
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [system, setSystem] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [IdNo, setIdNo] = useState('');

  const [userData, setUserData] = useState(getTeachers());

  const inputValues = {
    id: nanoid(),
    firstName,
    secondName,
    phoneNumber,
    system,
    IdNo,

  };

  const handleSystemChange = (e) => {
    setSystem(e.target.value);
  };

  // const getTeachers = () => {
  //   const temp = localStorage.getItem('todos');
  //   const savedUsers = JSON.parse(temp);
  //   return savedUsers || [];
  // };

  // const [subjects, setSubjects] = useState(getTeachers());

  const addTeacher = (subjects) => {
    localStorage.setItem('Teachers', JSON.stringify(subjects));
  };

  const getSubjectName = (name) => {
    const results = userData.filter(
      (subj) => subj.firstName.toLowerCase().includes(name.toLowerCase()),
    );
    if (results.length > 0) return true;
    return false;
  };

  const saveData = () => {
    if (!getSubjectName(inputValues.firstName)) {
      const newSubject = [...userData, inputValues];
      setUserData(newSubject);
      addTeacher(newSubject);
      toast.success('Added New Teacher');
    } else {
      toast.warning('Cannot add two teachers');
    }
  };

  useEffect(() => {
    const hasUser = localStorage.getItem('subjects');
    if (hasUser && hasUser.length < 0) {
      localStorage.setItem('subjects', JSON.stringify(userData));
    }
  }, []);
  return (

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        width: '100%',
      }}
    >

      <Paper
        style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          position: 'relative',
        }}
        sx={{
          paddingTop: '10px',
          pb: 10,
        }}
        elevation={0}
      >
        <FormGroup style={{
          width: '80%',
        }}
        >

          {/* name of teacher */}
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
              style={{
                width: '100%',
              }}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>

          {/* name of teacher */}
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

          {/* Number of Students  */}
          <FormControl
            style={{
              margin: '1rem',
            }}
          >
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              size="small"
              style={{
                width: '100%',
              }}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </FormControl>

          {/* Name of class teacher */}
          <FormControl
            style={{
              margin: '1rem',
            }}
          >
            <TextField
              id="outlined-basic"
              label="ID Number"
              variant="outlined"
              size="small"
              style={{
                width: '100%',
              }}
              onChange={(e) => setIdNo(e.target.value)}
            />
          </FormControl>

          <FormControl
            style={{
              margin: '1rem',
            }}
          >
            <InputLabel id="demo-simple-select-label">Select System</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={system}
              label="Term"
              size="small"
              onChange={handleSystemChange}
            >
              <MenuItem value="ECD">ECD</MenuItem>
              <MenuItem value="Primary">Primary</MenuItem>

            </Select>
          </FormControl>

          <Button
            variant="contained"
            disableElevation
            style={{
              width: '94%',
              margin: 'auto',
              // display: 'block',
              padding: '10px',
              marginTop: '2rem',
              // backgroundColor: '#291749',
            }}
            onClick={() => saveData()}
            endIcon={<SaveIcon />}
          >
            SAVE
          </Button>

          {/* have an account */}

        </FormGroup>

      </Paper>
      <ToastContainer />
    </div>

  );
}

export default AddTeacher;
