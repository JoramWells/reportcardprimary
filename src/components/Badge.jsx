/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

function Badge({ text, width }) {
  return (
    <div
      style={{
        backgroundColor: 'whitesmoke',
        padding: '5px',
        marginRight: '5px',
        fontWeight: '500',
        width: width || '12%',
        textAlign: 'center',
        fontSize: '14px',
      }}
    >
      {text}
    </div>
  );
}

export default Badge;

Badge.defaultProps = {
  text: '',
  width: '',
};

Badge.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
};
