import {
  FormControl, Button, FormGroup, Paper, TextField,
} from '@mui/material';
import { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';

import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
// import moment from 'moment'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import moment from 'moment/moment';
import { getFromStorage } from '../../utils/localStorage';

// const electron = window.require('electron');
// const { ipcRenderer } = electron;

function AddTerms() {
  const [term, setTerm] = useState('');

  const [userData, setUserData] = useState(getFromStorage('Terms'));

  const [startDate, setStartDate] = useState(dayjs('2022-04-19'));
  const [endDate, setEndDate] = useState(dayjs('2022-04-17'));

  const inputValues = {
    id: nanoid(),
    termName: term,
    startDate: moment(startDate).format('MM/DD/YYYY'),
    endDate: moment(endDate).format('MM/DD/YYYY'),

  };

  const saveTerm = (subjects) => {
    localStorage.setItem('Terms', JSON.stringify(subjects));
  };

  const getTermName = (name) => {
    const results = userData.filter(
      (subj) => subj.termName.toLowerCase().includes(name.toLowerCase()),
    );
    if (results.length > 0) return true;
    return false;
  };

  const saveData = () => {
    if (!getTermName(inputValues.termName)) {
      const newTerm = [...userData, inputValues];
      setUserData(newTerm);
      saveTerm(newTerm);
      toast.success('Added term Succesfully');
      // ipcRenderer.send('asynchronous', 'ping');
    } else {
      toast.warning(`${term} already added!!!`);
    }
  };

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
              label="Term Name"
              variant="outlined"
              size="medium"
              style={{
                width: '100%',
              }}
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </FormControl>
          <FormControl style={{
            margin: '1rem',
          }}
          >

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label="Start Date"
                  value={startDate}
                  sx={{
                    width: '100%',
                  }}
                  onChange={(newValue) => setStartDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </FormControl>

          <FormControl style={{
            margin: '1rem',
          }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label="End Date"
                  value={endDate}
                  sx={{
                    width: '100%',
                  }}
                  onChange={(newValue) => setEndDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </FormControl>

          <Button
            variant="contained"
            disableElevation
            style={{
              width: '94%',
              margin: 'auto',
              // display: 'block',
              padding: '8px',
              marginTop: '2rem',
              // backgroundColor: '#291749',
              fontWeight: 'bold',
            }}
            onClick={() => saveData()}
            endIcon={<SaveIcon />}
          >
            ADD TERM
          </Button>

          {/* have an account */}

        </FormGroup>

      </Paper>
      {' '}
      <ToastContainer draggable closeOnClick />

    </div>
  );
}

export default AddTerms;
