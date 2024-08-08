import React,{memo} from 'react';
import { Box, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NoDataFallback = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        color: 'text.secondary',
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 50, mb: 2 }} />
      <Typography variant="h6">No Data Available</Typography>
      <Typography variant="body2">
        Please check your connection or try refreshing the page.
      </Typography>
    </Box>
  );
};

export default memo(NoDataFallback);
