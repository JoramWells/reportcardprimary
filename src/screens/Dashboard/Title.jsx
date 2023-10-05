// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function Title(props) {
  const { children } = props;
  return (
    <Box style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    >
      <Typography component="h2" variant="h6" fontWeight={600} color="primary" gutterBottom>
        {children}
      </Typography>

    </Box>
  );
}

Title.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};

export default Title;
