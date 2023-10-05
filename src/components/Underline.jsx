/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

function Underline({ width = '20%' }) {
  return (
    <div
      style={{
        border: '1px solid black',
        width: width || '20%',
        marginLeft: '5px',
        marginRight: '5px',
      }}
    />
  );
}

export default Underline;

Underline.defaultProps = {
  width: '',
};

Underline.propTypes = {
  width: PropTypes.string,
};
