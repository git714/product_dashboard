import React,{memo} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {

  return (
    <AppBar position="static" sx={{backgroundColor:'#a274e3'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img 
            src="https://www.airiasearch.com/static/media/logo_dark.bfdcc86ed3469a151adedd3c9c148c7c.svg" 
            alt="Logo" 
            style={{ height: '40px', verticalAlign: 'middle' }}
          />
        </Typography>
       
       
      </Toolbar>
    </AppBar>
  );
};

export default memo(Navbar);
