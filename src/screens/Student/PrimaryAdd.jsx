/* eslint-disable object-shorthand */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import {
  FormControl, Button, FormGroup, Paper, TextField, InputLabel, Select, MenuItem,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { StudentContext } from '../../contexts/studentContext';
import { ClassContext } from '../../contexts/classContext';
import { StreamContext } from '../../contexts/streamContext';

function PrimaryAdd() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [indexCodeName, setIndexCodeName] = useState('');
  const [houseName, setHouseName] = useState('');
  const [streamName, setStreamName] = useState('');

  const [age, setAge] = useState('');
  const [subject, setSubject] = useState('');
  const [division, setDivision] = useState('');
  const [profile, setProfile] = useState('');

  const { classes } = useContext(ClassContext);
  const { streams } = useContext(StreamContext);

  const getStreamName = (name) => {
    const results = streams.filter(
      (subj) => subj.className.toLowerCase().includes(name.toLowerCase()),
    );
    return results;
  };

  const { saveStudents } = useContext(StudentContext);

  const inputValues = {
    id: nanoid(),
    firstName: firstName,
    secondName,
    indexCodeName,
    className: subject,
    streamName,
    houseName,
    age,
    division,
    type: 'Primary',
    profile,
  };

  const handleChange = (e) => {
    setSubject(e.target.value);
  };

  const handleStreamChange = (e) => {
    setStreamName(e.target.value);
  };

  const uploadPhoto = (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      localStorage.setItem('image', reader.result);
      setProfile(reader.result);
    });
    if (image) {
      reader.readAsDataURL(image);
    }
  };

  return (
    <div style={{
      width: '100%',
    }}
    >
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
                value={firstName}
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
                value={secondName}
                style={{
                  width: '100%',
                }}
                onChange={(e) => setSecondName(e.target.value)}
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
                {classes.map((item) => (
                  <MenuItem
                    key={item.className}
                    value={item.className}
                  >
                    {item.className}

                  </MenuItem>
                ))}

              </Select>
            </FormControl>

            {/* classname */}
            <FormControl
              style={{
                margin: '1rem',
              }}
            >
              <InputLabel id="demo-simple-select-label">Stream name</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={streamName}
                label="Stream"
                size="small"
                onChange={handleStreamChange}
              >
                {getStreamName(subject).map((item) => (
                  <MenuItem
                    key={item.id}
                    value={item.streamName}
                  >
                    {item.streamName}

                  </MenuItem>
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
                value={houseName}
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
                value={age}
                style={{
                  width: '100%',
                }}
                onChange={(e) => setAge(e.target.value)}
              />
            </FormControl>

            <input type="file" onChange={(e) => uploadPhoto(e)} />
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
              onClick={() => saveStudents(inputValues)}
            >
              SAVE STUDENT
            </Button>

            {/* have an account */}

          </FormGroup>

        </Paper>
      </div>
    </div>
  );
}

export default PrimaryAdd;
