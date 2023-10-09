import {
  FormControl, Button, FormGroup, Paper, TextField,
} from '@mui/material';
import { useContext, useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';

import { nanoid } from 'nanoid';
import { ClassContext } from '../../contexts/classContext';

function AddClass() {
  const [className, setClassName] = useState('');

  const inputValues = {
    id: nanoid(),
    className,

  };

  const { saveClasses } = useContext(ClassContext);

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
            onClick={() => saveClasses(inputValues)}
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

export default AddClass;
