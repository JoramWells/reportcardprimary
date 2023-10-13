/* eslint-disable react/function-component-definition */
import { IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const FormHeader = ({ navigationLink, title }) => {
  const navigate = useNavigate();
  return (
    <div style={{
      width: '95%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid whitesmoke',
      padding: '5px',
      // backgroundColor: 'whitesmoke',

    }}
    >
      <IconButton onClick={() => navigate(navigationLink)}>
        <ArrowBackIcon />

      </IconButton>
      <Typography variant="h5" fontWeight={700}>
        {title}
      </Typography>

    </div>
  );
};

export default FormHeader;

// default props
FormHeader.defaultProps = {
  navigationLink: '',
  title: '',

};
FormHeader.propTypes = {
  navigationLink: PropTypes.string,
  title: PropTypes.string,

};
