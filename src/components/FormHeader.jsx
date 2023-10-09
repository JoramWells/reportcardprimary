/* eslint-disable react/function-component-definition */
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const FormHeader = ({ navigationLink, title }) => {
  const navigate = useNavigate();
  return (
    <div style={{
      width: '30%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}
    >
      <IconButton onClick={() => navigate(navigationLink)}>
        <ArrowBackIcon />

      </IconButton>
      {title}

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
