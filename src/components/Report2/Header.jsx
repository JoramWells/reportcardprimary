import { Typography, Box } from '@material-ui/core';
import logo from '../../imgs/logo.png';
import Underline from '../Underline';

function Header() {
  return (

    <Box style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '5px',
    }}
    >
      <div>
        <img
          src={logo}
          alt="company logo"
          style={{
            width: '120px',
            height: '120px',
            objectFit: 'contain',

          }}
        />
      </div>
      <div>
        <Typography
          variant="h5"
          style={{
            textAlign: 'center',
            fontWeight: '700',
            marginBottom: '1rem',
          }}
        >
          TRINITY JUNIOUR SCHOOL KAMULI

        </Typography>
        <Underline width="100%" />
        <Typography style={{
          fontWeight: 'bold',
          fontSize: '16px',
          textAlign: 'center',
        }}
        >
          WITH GOD I CAN
        </Typography>
        <Typography style={{
          fontWeight: 'bold',
          fontSize: '16px',
          textAlign: 'center',
        }}
        >
          P.O BOX 271 KAMULI
        </Typography>
        <div style={{
          textAlign: 'center',
        }}
        >
          END OF TERM NURSERY REPORT
        </div>
      </div>
      <div>
        <img
          src={logo}
          alt="company logo"
          style={{
            width: '120px',
            height: '120px',
            objectFit: 'contain',

          }}
        />
      </div>
    </Box>
  );
}

export default Header;
