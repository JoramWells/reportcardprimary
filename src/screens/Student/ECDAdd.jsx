/* eslint-disable no-unused-vars */
import {
  FormControl, Button, FormGroup, Paper, TextField, InputLabel, Select, MenuItem,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { StudentContext } from '../../contexts/studentContext';
import { ClassContext } from '../../contexts/classContext';

const terms = [
  {
    id: nanoid(),
    name: 'BOT',
  },
  {
    id: nanoid(),
    name: 'MID',
  },
  {
    id: nanoid(),
    name: 'EOT',
  },
];

function ECDAdd() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [indexCodeName, setIndexCodeName] = useState('');
  const [houseName, setHouseName] = useState('');
  const [age, setAge] = useState('');
  const [subject, setSubject] = useState('');
  const [division, setDivision] = useState('');

  const { saveStudents } = useContext(StudentContext);
  const { classes } = useContext(ClassContext);

  const inputValues = {
    id: nanoid(),
    firstName,
    secondName,
    indexCodeName,
    className: subject,
    houseName,
    age,
    division,
    type: 'ECD',
  };

  const handleChange = (e) => {
    setSubject(e.target.value);
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

export default ECDAdd;
