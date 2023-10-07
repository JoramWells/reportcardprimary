import {
  FormControl, Button, FormGroup, Paper, TextField, InputLabel, Select, MenuItem,
} from '@mui/material';
import { useEffect, useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';

import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { getFromStorage } from '../../utils/localStorage';

// const electron = window.require('electron');
// const { ipcRenderer } = electron;

function AddECDSubject() {
  const getSubjects = () => {
    const data = localStorage.getItem('subjects');
    return JSON.parse(data) || [];
  };
  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');

  const [userData, setUserData] = useState(getSubjects());

  const [teachers] = useState(getFromStorage('Teachers'));

  const handleChange = (e) => {
    setTeacher(e.target.value);
  };
  const inputValues = {
    id: nanoid(),
    subject,
    teacher,
    systtem: 'ECD',

  };

  // const getSubjects = () => {
  //   const temp = localStorage.getItem('todos');
  //   const savedUsers = JSON.parse(temp);
  //   return savedUsers || [];
  // };

  // const [subjects, setSubjects] = useState(getSubjects());

  const saveSubject = (subjects) => {
    localStorage.setItem('subjects', JSON.stringify(subjects));
  };

  const getSubjectName = (name) => {
    const results = userData.filter(
      (subj) => subj.subject.toLowerCase().includes(name.toLowerCase()),
    );
    console.log(results.length);
    if (results.length > 0) return true;
    return false;
  };

  const saveData = () => {
    // if (subject.length === 0) {
    //   toast.warning('Enter subject name');
    // }
    if (!getSubjectName(inputValues.subject)) {
      const newSubject = [...userData, inputValues];
      setUserData(newSubject);
      saveSubject(newSubject);
      toast.success('Added subject Succesfully');
      // ipcRenderer.send('asynchronous', 'ping');
    } else {
      toast.warning(`${subject} already added!!`);
    }
  };

  useEffect(() => {
    const hasUser = localStorage.getItem('subjects');
    if (hasUser && hasUser.length < 0) {
      localStorage.setItem('subjects', JSON.stringify(userData));
    }
  }, []);
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80vh',
      width: '100%',
    }}
    >

      <Paper
        sx={{
          width: '50%',
          height: '70%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          position: 'relative',
          borderRadius: '15px',
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
              label="Subject Name"
              variant="outlined"
              size="small"
              style={{
                width: '100%',
              }}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </FormControl>
          <FormControl
            style={{
              margin: '1rem',
            }}
          >
            <InputLabel id="demo-simple-select-label">Select Teacher</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={teacher}
              label="Term"
              size="small"
              onChange={handleChange}
            >
              {teachers.map((item) => (
                <MenuItem value={item.id}>{`${item.firstName} ${item.secondName}`}</MenuItem>
              ))}

            </Select>
          </FormControl>

          <Button
            variant="contained"
            disableElevation
            style={{
              width: '94%',
              margin: 'auto',
              // display: 'block',
              padding: '8px',
              marginTop: '2.5rem',
              // backgroundColor: '#291749',
              fontWeight: 'bold',
            }}
            onClick={() => saveData()}
            endIcon={<SaveIcon />}
          >
            ADD SUBJECT
          </Button>

          {/* have an account */}

        </FormGroup>

      </Paper>
      {' '}
      <ToastContainer draggable closeOnClick />

    </div>
  );
}

export default AddECDSubject;
