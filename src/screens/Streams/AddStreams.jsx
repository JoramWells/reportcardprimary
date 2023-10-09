import {
    FormControl, Button, FormGroup, Paper, TextField,
  } from '@mui/material';
  import { useEffect, useState } from 'react';
  import SaveIcon from '@mui/icons-material/Save';
  
  import { nanoid } from 'nanoid';
  import { ToastContainer, toast } from 'react-toastify';
  import Dashboard from '../Dashboard';
  
  function AddStreams() {

    const [className, setClassName] = useState('');
    const [streamName, setstreamName] = useState('');
    const [classTeacher, setClassTeacher] = useState('');
  
    const streamData = getFromStorage('Streams')
  
    const inputValues = {
      id: nanoid(),
      streamName,
      className,
      classTeacher,
  
    };

  
    const addClass = (subjects) => {
      localStorage.setItem('Classes', JSON.stringify(subjects));
    };
  
    const getClassName = (name) => {
      const results = streamData.filter(
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
      <Dashboard>
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
  
              {/* Number of Students  */}
              <FormControl
                style={{
                  margin: '1rem',
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Stream Name"
                  variant="outlined"
                  size="small"
                  style={{
                    width: '100%',
                  }}
                  onChange={(e) => setstreamName(e.target.value)}
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
                  label="Class teacher name"
                  variant="outlined"
                  size="small"
                  style={{
                    width: '100%',
                  }}
                  onChange={(e) => setClassTeacher(e.target.value)}
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
      </Dashboard>
    );
  }
  
  export default AddStreams;
  