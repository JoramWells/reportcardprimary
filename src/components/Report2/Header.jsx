import { useSearchParams } from 'react-router-dom';
import logo from '../../imgs/logo.png';
import Underline from '../Underline';

function Header() {
  const [searchParams] = useSearchParams();

  return (

    <div style={{
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
        <div
          style={{
            textAlign: 'center',
            fontWeight: '700',
            marginBottom: '.5rem',
          }}
        >
          TRINITY JUNIOUR SCHOOL KAMULI

        </div>
        <Underline width="100%" />
        <div style={{
          fontWeight: 'bold',
          fontSize: '16px',
          textAlign: 'center',
        }}
        >
          WITH GOD I CAN
        </div>
        <div style={{
          fontWeight: 'bold',
          fontSize: '16px',
          textAlign: 'center',
        }}
        >
          P.O BOX 271 KAMULI
        </div>
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
    </div>
  );
}

export default Header;
