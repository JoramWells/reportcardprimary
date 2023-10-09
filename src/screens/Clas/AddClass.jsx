import {
  FormControl, Button, FormGroup, Paper, TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';

import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';

function AddClass() {
  const getClasses = () => {
    const data = localStorage.getItem('Classes');
    return JSON.parse(data) || [];
  };
  const [className, setClassName] = useState('');

  const [userData, setUserData] = useState(getClasses());

  const inputValues = {
    id: nanoid(),
    className,

  };

  // const getClasses = () => {
  //   const temp = localStorage.getItem('todos');
  //   const savedUsers = JSON.parse(temp);
  //   return savedUsers || [];
  // };

  // const [subjects, setSubjects] = useState(getClasses());

  const addClass = (subjects) => {
    localStorage.setItem('Classes', JSON.stringify(subjects));
  };

  const getClassName = (name) => {
    const results = userData.filter(
      (subj) => subj.className.toLowerCase().includes(name.toLowerCase()),
    );
    if (results.length > 0) return true;
    return false;
  };

  const saveData = () => {
    if (!getClassName(inputValues.className)) {
      const newSubject = [...userData, inputValues];
      setUserData(newSubject);
      addClass(newSubject);
      toast('Added New Class');
    } else {
      console.log('Cannot add two classes');
    }
  };

  useEffect(() => {
    const hasUser = localStorage.getItem('Classes');
    if (hasUser && hasUser.length < 0) {
      localStorage.setItem('Classes', JSON.stringify(userData));
    }
  }, []);
  return (
    <>
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
            pt: 10,
            pb: 10,
          }}
          elevation={0}
        >
          <FormGroup style={{
            width: '80%',
          }}
          >

            {/* name of class */}
            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <TextField
                id="outlined-basic"
                label="Name of Class"
                variant="outlined"
                size="small"
                style={{
                  width: '100%',
                }}
                onChange={(e) => setClassName(e.target.value)}
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
      <ToastContainer />
    </>
  );
}

export default AddClass;
