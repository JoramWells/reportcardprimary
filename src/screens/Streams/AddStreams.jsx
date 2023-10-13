/* eslint-disable no-unused-vars */
import {
  FormControl, Button, FormGroup, Paper, TextField, InputLabel, Select, MenuItem,
} from '@mui/material';
import { Fragment, useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFromStorage } from '../../utils/localStorage';
import FormHeader from '../../components/FormHeader';
import { getInitials } from '../../utils/utilityFunctions';
import { addStream } from '../../_features/streams/streamSlice';
import { selectAllClasses } from '../../_features/clases/classSlice';

const teachers = getFromStorage('Teachers');

function AddStreams() {
  const [className, setClassName] = useState('');
  const [streamName, setstreamName] = useState('');
  const [classTeacher, setClassTeacher] = useState('');
  const [noOfStudents, setNoOfStudents] = useState('');

  const inputValues = {
    id: nanoid(),
    streamName,
    className,
    classTeacher,
    noOfStudents,

  };

  const dispatch = useDispatch();
  const classes = useSelector(selectAllClasses);

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
        sx={{
          width: '50%',
          position: 'relative',
          height: '95%',
          borderRadius: '15px',
        }}
        elevation={3}
      >

        <>
          <FormHeader navigationLink="/streams" title="Add Streams" />
          <FormGroup
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              padding: '10px',
            }}
          >
            <>

              {/* name of class */}
              {/* classname */}
              <FormControl
                style={{
                  margin: '1rem',
                  width: '80%',
                }}
              >
                <InputLabel id="demo-simple-select-label">Class name</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={className}
                  label="Term"
                  size="small"
                  onChange={(e) => setClassName(e.target.value)}
                  style={{
                    padding: '0',
                  }}
                >
                  {classes.map((item) => (
                    <MenuItem
                      key={item.id}
                      value={item.className}
                    >
                      {item.className}

                    </MenuItem>
                  ))}
                  <MenuItem style={{
                    backgroundColor: 'whitesmoke',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  >
                    <Link
                      to="/add-class"
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      Add Class
                    </Link>

                  </MenuItem>

                </Select>
              </FormControl>

              {/* Number of Students  */}
              <FormControl
                style={{
                  margin: '1rem',
                  width: '80%',
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Stream Name"
                  placeholder="Enter Stream Name"
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
                  width: '80%',
                }}
              >
                <InputLabel id="demo-simple-select-label">Select Teacher</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={classTeacher}
                  label="Term"
                  size="small"
                  onChange={(e) => setClassTeacher(e.target.value)}
                >
                  {teachers.map((item) => (
                    <MenuItem key={item.id} value={getInitials(`${item.firstName}  ${item.secondName}`)}>{`${item.firstName} ${item.secondName}`}</MenuItem>
                  ))}

                  <MenuItem style={{
                    backgroundColor: 'whitesmoke',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  >
                    <Link
                      to="/add-teacher"
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      Add Teacher
                    </Link>

                  </MenuItem>

                </Select>
              </FormControl>

              <FormControl
                style={{
                  margin: '1rem',
                  width: '80%',
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
                size="small"
                style={{
                  width: '80%',
                  margin: 'auto',
                  // display: 'block',
                  padding: '8px',
                  marginTop: '1rem',
                  // backgroundColor: '#291749',
                }}
                onClick={() => dispatch(addStream(inputValues))}
                endIcon={<SaveIcon />}
              >
                SAVE
              </Button>

              {/* have an account */}

            </>

          </FormGroup>
        </>
      </Paper>

    </div>
  );
}

export default AddStreams;
