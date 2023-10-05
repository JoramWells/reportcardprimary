import { Typography, Box } from '@material-ui/core';
import logo from '../imgs/logo.png';

function Header() {
  return (
    <div style={{
      width: '90%',
      margin: 'auto',
      display: 'block',
    }}
    >
      <Box style={{
        display: 'flex',
        justifyContent: 'flex-start',
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
              width: '150px',
              height: '150px',
              objectFit: 'contain',
              marginRight: '5rem',

            }}
          />
        </div>
        <div>
          <Typography
            variant="h5"
            style={{
              textAlign: 'center',
              fontWeight: '700',
            }}
          >
            TRINITY JUNIOUR SCHOOL
            <br />
            {' '}
            KAMULI - UGANDA
          </Typography>
          <Typography style={{
            fontWeight: 'bold',
            fontSize: '16px',
          }}
          >
            Tel: +256-752-971-270, +256-752-583-683
          </Typography>
          <div style={{
            textAlign: 'center',
          }}
          >
            Email: trinityjunioursch1@gmail.com
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Header;
