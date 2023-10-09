import {
  FormControl, Button, FormGroup, Paper, TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';

function AddSystem() {
  const getSubjects = () => {
    const data = localStorage.getItem('subjects');
    return JSON.parse(data) || [];
  };
  const [subject, setSubject] = useState('');

  const [userData, setUserData] = useState(getSubjects());

  const inputValues = {
    subject,

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
    if (results.length > 0) return true;
    return false;
  };

  const saveData = () => {
    if (!getSubjectName(inputValues.subject)) {
      const newSubject = [...userData, inputValues];
      setUserData(newSubject);
      saveSubject(newSubject);
    } else {
      console.log('Cannot add two subjects');
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
      height: '100vh',
      width: '100%',
    }}
    >

      <Paper style={{
        width: '50%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        position: 'relative',
      }}
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
              onChange={(e) => setSubject(e.target.value)}
            />
          </FormControl>

          <Button
            variant="contained"
            disableElevation
            style={{
              width: '94%',
              margin: 'auto',
              // display: 'block',
              padding: '10px',
              marginTop: '2.5rem',
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
    </div>
  );
}

export default AddSystem;
