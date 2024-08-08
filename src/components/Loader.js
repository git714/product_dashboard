// Loader.js
import React,{memo} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const Loader = ({ isLoading }) => {
  return (
    isLoading && (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          zIndex: 1300,
        }}
      >
        <CircularProgress />
      </Box>
    )
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default memo(Loader);
