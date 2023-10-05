import { Typography, Box } from '@material-ui/core';
import { useSearchParams } from 'react-router-dom';
import logo from '../../imgs/logo.png';
import Underline from '../Underline';

function Header() {
  const [searchParams] = useSearchParams();

  return (

    <Box style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    }}
    >
      <div>
        <img
          src={logo}
          alt="company logo"
          style={{
            width: '100px',
            height: '100px',
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
            marginBottom: '.5rem',
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
          textTransform: 'uppercase',
        }}
        >
          {searchParams.get('term') === 'BOT' && 'Begining of term'}
          {searchParams.get('term') === 'MID' && 'Mid of term'}
          {searchParams.get('term') === 'EOT' && 'End of term'}

          {' '}
          {' '}
          NURSERY REPORT
        </div>
      </div>
      <div>
        <img
          src={logo}
          alt="company logo"
          style={{
            width: '100px',
            height: '100px',
            objectFit: 'contain',

          }}
        />
      </div>
    </Box>
  );
}

export default Header;
