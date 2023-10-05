/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import Badge from '../Badge';
import Underline from '../Underline';
// import logo from '../imgs/logo.png';

function PersonalDetails({
  firstName, secondName, age, house,
}) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '5px',
    }}
    >
      <div style={{
        width: '100%',
      }}
      >

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginTop: '5px',
        }}
        >
          <Badge text="Name" />
          <div style={{
            display: 'flex',
            fontWeight: 'bold',
            borderBottom: '1px solid black',
            width: '50%',
            textTransform: 'uppercase',
          }}
          >
            {firstName} {secondName}
          </div>
          {/* <Underline width="55.4%" /> */}
          <Badge text="Index No." />

          <Underline width="14%" />

        </div>
        {/* personal details */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          marginTop: '5px',
        }}
        >
          <Badge text="Class" />
          <div
            style={{
              display: 'flex',
              fontWeight: 'bold',
              borderBottom: '1px solid black',
              width: '15%',
              textTransform: 'uppercase',
            }}
          >
            {house}
          </div>
          {/* term */}
          <div
            style={{
              display: 'flex',
              fontWeight: 'bold',
              borderBottom: '1px solid black',
              width: '15%',
              textTransform: 'uppercase',
            }}
          >
            {age}
          </div>
          <Badge text="Days in term" />

          <Underline width="25%" />
          <Badge text="Attended" />

          <Underline width="8%" />

        </div>
        {/* Cores */}

      </div>

    </div>
  );
}

export default PersonalDetails;

PersonalDetails.defaultProps = {
  firstName: '',
  secondName: '',
  age: '',
  house: '',

};

PersonalDetails.propTypes = {
  firstName: PropTypes.string,
  secondName: PropTypes.string,
  age: PropTypes.string,
  house: PropTypes.string,

};
