/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

function Badge({ text, width, bold }) {
  return (
    <div
      style={{
        backgroundColor: 'whitesmoke',
        padding: '3px',
        marginRight: '5px',
        fontWeight: bold ? '700' : '500',
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
  bold: false,
};

Badge.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  bold: PropTypes.bool,

};
