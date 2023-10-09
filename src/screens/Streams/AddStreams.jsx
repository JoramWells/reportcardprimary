/* eslint-disable no-unused-vars */
import {
  FormControl, Button, FormGroup, Paper, TextField, InputLabel, Select, MenuItem,
} from '@mui/material';
import { useContext, useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import { nanoid } from 'nanoid';
import { getFromStorage } from '../../utils/localStorage';
import { ClassContext } from '../../contexts/classContext';
import FormHeader from '../../components/FormHeader';
import { StreamContext } from '../../contexts/streamContext';

const teachers = getFromStorage('Teachers');

function AddStreams() {
  const [className, setClassName] = useState('');
  const [streamName, setstreamName] = useState('');
  const [classTeacher, setClassTeacher] = useState('');
  const [noOfStudents, setNoOfStudents] = useState('');

  const { saveStreams } = useContext(StreamContext);

  const inputValues = {
    id: nanoid(),
    streamName,
    className,
    classTeacher,
    noOfStudents,

  };

  const handleChange = (e) => {
    setClassName(e.target.value);
  };

  const handleTeacherChange = (e) => {
    setClassTeacher(e.target.value);
  };

  const { classes } = useContext(ClassContext);

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
          padding: '10px',
          position: 'relative',
        }}
        sx={{
          pt: 10,
          pb: 10,
        }}
        elevation={0}
      >

        <FormHeader navigationLink="/streams" title="Add Streams" />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <FormGroup style={{
            width: '80%',
          }}
          >

            {/* name of class */}
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
                value={className}
                label="Term"
                size="small"
                onChange={handleChange}
              >
                {classes.map((item) => (
                  <MenuItem
                    key={item.id}
                    value={item.className}
                  >
                    {item.className}

                  </MenuItem>
                ))}

              </Select>
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
              <InputLabel id="demo-simple-select-label">Select Teacher</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={classTeacher}
                label="Term"
                size="small"
                onChange={handleTeacherChange}
              >
                {teachers.map((item) => (
                  <MenuItem key={item.id} value={item.id}>{`${item.firstName} ${item.secondName}`}</MenuItem>
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
                label="Number of students"
                variant="outlined"
                size="small"
                style={{
                  width: '100%',
                }}
                onChange={(e) => setNoOfStudents(e.target.value)}
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
              onClick={() => saveStreams(inputValues)}
              endIcon={<SaveIcon />}
            >
              SAVE
            </Button>

            {/* have an account */}

          </FormGroup>

        </div>
      </Paper>

    </div>
  );
}

export default AddStreams;
