/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import Badge from './Badge';
import Underline from './Underline';
// import logo from '../imgs/logo.png';

function PersonalDetails({
  firstName, secondName, age, house, img,
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
        width: '80%',
      }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'flex-end',
          marginTop: '5px',
        }}
        >
          {/* Row 1 */}
          <Badge text="Index/Code" />

          <Underline />

          <Badge text="class" />

          <Underline />
          <Badge text="Position" />
          <Badge text="Out of" />

        </div>
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
            width: '65%',
            textTransform: 'uppercase',
          }}
          >
            {firstName} {secondName}
          </div>
          {/* <Underline width="55.4%" /> */}
          <Underline width="14%" />
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
          <Badge text="House" />
          <div
            style={{
              display: 'flex',
              fontWeight: 'bold',
              borderBottom: '1px solid black',
              width: '20%',
              textTransform: 'uppercase',
            }}
          >
            {house}
          </div>
          <Badge text="Age" />
          <div
            style={{
              display: 'flex',
              fontWeight: 'bold',
              borderBottom: '1px solid black',
              width: '20%',
              textTransform: 'uppercase',
            }}
          >
            {age}
          </div>
          <Underline width="35%" />

        </div>
        {/* Cores */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          marginTop: '5px',
        }}
        >
          <Badge text="Course Marks" width="15%" />
          <Underline width="10%" />
          <Badge text="Aggregate" />
          <Underline width="10%" />
          <Underline width="35%" />

        </div>

      </div>
      <div style={{
        width: '100px',
        height: '100px',
        border: '1px solid black',
      }}
      />
      <img src={img} alt={img} />

    </div>
  );
}

export default PersonalDetails;

PersonalDetails.defaultProps = {
  firstName: '',
  secondName: '',
  age: '',
  house: '',
  img: '',

};

PersonalDetails.propTypes = {
  firstName: PropTypes.string,
  secondName: PropTypes.string,
  age: PropTypes.string,
  house: PropTypes.string,
  img: PropTypes.string,

};
